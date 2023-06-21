import express  from "express"
import cors from 'cors'
//importamos la conexión a la DB
import db from "./database/db.js"
//importamos nuestro enrutador
import StockRoutes from './routes/routes.js'
//importamos morgan
import morgan from "morgan";

import { dirname, extname, join } from 'path';
import { fileURLToPath } from 'url';

import authRoutes from './routes/auth.routers.js';


// declaramos la constante que va a ser parte de la dirección donde van a estar las imagenes 
const CURRENT_DIR = dirname(fileURLToPath(import.meta.url));


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/stock', StockRoutes)


app.use(morgan('dev'));
app.use(express.json());

app.use ('/api',authRoutes);


//declaramos la ruta donde se guardan las imagenes, /public es porque es de acceso publico
app.use('/public', express.static(join(CURRENT_DIR, './uploads')));

export default app;
