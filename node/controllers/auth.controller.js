import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';

import { createAccessToken } from '../libs/jwt.js'; 



export const register = async (req, res) => {

   const {email, password, username} = req.body;

   try {
      // Encriptamos la contraseña
      const passwordHash = await bcrypt.hash(password,10);

      const newUser = new User ({
         username,
         email, 
         password:passwordHash,
       });
   
      
      const userSaved = await newUser.save();
      const token = await createAccessToken ({id: userSaved._id});

      
         res.cookie( 'token', token );
         res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
         });
   } catch (error) {
      res.status(500).json({message: error.message});
   }
   

   //res.send ('registrando');
};
export const login = async (req, res) => res.send("login");