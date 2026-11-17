import {InterviewerModel} from '../model/interviewer.model'
import { UserModel } from '../model/user.model'
import type {Request , Response} from 'express'

export const Interviewer = {


    createInterviewerProfile : async (req : Request , res : Response) =>{

        try {

            





        }catch(err){
            console.log(err)
            res.status(500).json({
                message  : "Error While Create Profile"
            })
        }
    },

    getInterviewrProfiles : async (req : Request , res : Response) =>{

        try {




        }catch(err){
            console.log(err);
            
            res.status(500).json({
                message  : "Some Error Occur While Fetching Intervieer Profiles"
            })
        }
    },
    getInterviewrProfileById : async (req : Request, res : Response ) =>{

        try {




        }catch(err){

            console.log(err);
            
            res.status(501).json({
                message : "Some Error Occur While Fetching Intervieer Profile"
            })

        }
    },
    updateInterviewerProfile : async (req  :Request, res : Response ) => {

        try {

            



            
        }catch(err){
            console.log(err)

            res.status(500).json({
                message : "Eroor Occur While Updating The Profile"
            })

        }
    },
    getInterviewrMe : async (req : Request, res : Response) =>{

        try {



        }catch(err){
            console.log(err);
            res.status(500).json({
                message : "Error Occur while fetch profile "
            })
            
        }
    }



}