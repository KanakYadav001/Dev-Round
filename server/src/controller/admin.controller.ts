import { UserModel } from "../model/user.model";

import type { Request , Response } from "express";


export const admin = {
    
    updateInterviewerProfileStatus : async (req : Request, res : Response) =>{

        try {



        }catch(err){

            console.log(err);
            
        
            res.status(500).json({
                message  : "Some Error While Update Interviewer Status"
            })

        }
    },
    getAllInterviewersByFilter : async (req : Request  , res : Response) =>{
        try {




            
        }catch(err){
            console.log(err);

            res.status(500).json({
                message : "Some Problem Occur While fetch Interviewer Profile"
            })
            
        }
    }



}