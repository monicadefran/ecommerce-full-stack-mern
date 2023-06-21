//importamos el Modelo
import StockModel from "../models/StockModel.js";
import fs from "fs";
import path from "path";

//** Métodos para el CRUD **/

//Mostrar todos los stock
export const getAllstock = async (req, res) => {
    try {
        const stock = await StockModel.find()
        res.status(200).json(stock)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Mostrar un stock
export const getStock = async (req, res) => {
        try {
            const id = req.params.id
            await StockModel.findById( {_id:id} ).then( (stock) => {
                res.status(200).json(stock)
            })        
        } catch (error) {
            res.json( {message: error.message} )
        }
}
//Crear un stock
export const createStock = async (req, res) => {
    try {
       await StockModel.create(req.body)
       res.status(200).json({
           "message":"¡Producto creado correctamente!"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Actualizar un Stock
export const updateStock = async (req, res) => {
    try {
        const id = req.params.id
        await StockModel.updateOne({_id: id}, req.body).then( res => {
            console.log(res)
        })
        res.status(200).json({
            "message":"¡Producto actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Eliminar un Stock
export const deleteStock = async (req, res) => {
    try {
        const id = req.params.id
        await StockModel.deleteOne({ _id : id }).then( res => {
            console.log(res)
        })
        res.status(200).json({
            "message":"¡Producto eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

export const updateImage = async (req, res) => {

    //recogemos id del articulo al que vamos  a actualizar su imagen 
    try {
        const id = req.params.id
        const updateUser = await StockModel.findByIdAndUpdate(
            {_id:id},
            {image:req.file.filename},
            {new:true}
        )

        return res.status(200).send ({
            status: "succes",
            mensage: "upload working",
            user: updateUser,
        }
    
        )
        
    } catch (error) {
        res.json( {message: error.message} )
    }
   




    //recogemos el nombre de la imagen que hemos guardado


    //actualizamos el campo imagen de el articulo 

    //devolvemos respuesta correcta 


}

export const avatar = (req, res) => {
    //sacar el parametro de la url
    const file = req.params.file;
  
    // montar el path real de la imagen
  
    const filepath = "./uploads/" + file
  
    //comprobar que existe la imagen
    console.log(filepath);
    fs.stat(filepath, (error, exists) => {
      if (!exists)
        return res.status(404).send({
          status: "error",
          message: "no existe la imagen",
        });
  
      //devolver file
      return res.sendFile(path.resolve(filepath));
    });
  };

