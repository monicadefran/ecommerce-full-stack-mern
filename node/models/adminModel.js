import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema(
   {
     name: { type: String  },
     email: { type: String },
     password: { type: String },
   },
   { collection: "user" }
 );