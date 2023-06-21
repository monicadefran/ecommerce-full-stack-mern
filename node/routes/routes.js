import express from 'express'
import { getAllstock, getStock, createStock, updateStock, deleteStock,updateImage, avatar } from '../controllers/StockController.js'

import multer from 'multer';
import { dirname, extname, join } from 'path';
import { fileURLToPath } from 'url';

const CURRENT_DIR = dirname(fileURLToPath(import.meta.url));

const MIMETYPES = ['image/jpeg', 'image/png'];


const multerUpload = multer({
   storage: multer.diskStorage({
       destination: join(CURRENT_DIR, '../uploads'),
       filename: (req, file, cb) => {
           const fileExtension = extname(file.originalname);
           const fileName = file.originalname.split(fileExtension)[0];

           cb(null, `${Date.now()}-${file.originalname}`);
       },
   }),
   fileFilter: (req, file, cb) => {
       if (MIMETYPES.includes(file.mimetype)) cb(null, true);
       else cb(new Error(`Only ${MIMETYPES.join(' ')} mimetypes are allowed`));
   },
   limits: {
       fieldSize: 10000000,
   },
});


const router = express.Router()

router.get('/', getAllstock)
router.get('/:id', getStock)
router.post('/', createStock)
router.put('/:id', updateStock)
router.delete('/:id', deleteStock)


router.post('/upload/:id', multerUpload.single('file'), updateImage);
router.get("/avatar/:file", avatar);

export default router
