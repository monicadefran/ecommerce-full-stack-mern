import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema(
   {
     username: { 
      type: String,
      required: true,
      trim: true,  
   
   },
     email: { 
      type: String,
      required: true,
      trim: true,
      unique:true,
   },
     password: { 
      type: String,
      required: true,
    },
   });

   export default mongoose.model('User', userSchema)