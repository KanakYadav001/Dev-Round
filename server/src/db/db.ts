import mongoose from 'mongoose'
import type { Request , Response } from 'express'

export const dataBase = {
    mongoDb : async (req : Request, res : Response) =>{

        try {
            await mongoose.connect(process.env.MONGO_URI) 
            console.log("MongoDB Connect Sucessfully");
            



        }catch(err){

            console.log(err);

            res.status(501).json({
                message : "Some Error while Connect To MongoDB"
            })
            

        }


    }
} 