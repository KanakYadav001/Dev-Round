import type { Request, Response } from "express";
import { UserModel } from "../model/user.model";
import { InterviewerModel } from "../model/interviewer.model";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

export const auth = {
  signIn: async (req: Request, res: Response) => {
    try {
      const { name, password, email, skill, techStack, experience, role } =
        req.body;

      const IsUser = await UserModel.findOne({
        email: email,
      });

      if (IsUser) {
        res.status(401).json({
          message: "User Already Exits ! Go to login Page ",
        });
      }

      const hashPassword = await bcrypt.hash(password, 10);

      const user = await UserModel.create({
        name: name,
        password: hashPassword,
        email: email,
        role: role,
      });

      if (role == "INTERVIEWER") {
        await InterviewerModel.create({
          userId: user._id,
          experience: experience,
          skills: skill,
          techStack,
        });
      }
      const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
      );

      res.cookie("token", token , {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 60 * 60 * 1000,
      });

      res.status(201).json({
        message: "User Created Sucessfully",
        userId: user.id,
        role: user.role,
      });
    } catch (err) {
      console.log(err);
      res.status(501).json({
        message: "Error Occur while signIn",
      });
    }
  },

  signUp: async (req: Request, res: Response) => {
    try {

        


    } catch (err) {
      res.status(501).json({
        message: "Error Occur While SignUp",
      });
    }
  },

  getProfile: async (req: Request, res: Response) => {
    try {
    } catch (err) {
      console.log(err);
      res.status(501).json({
        message: "Error Occur While fetch Profile",
      });
    }
  },

  refreshToken: async (req: Request, res: Response) => {
    try {
    } catch (err) {
      console.log(err);
      res.status(501).json({
        message: "Error Occur while assign new token",
      });
    }
  },
  logout: async (req: Request, res: Response) => {
    try {
    } catch (err) {
      console.log(err);
      res.status(501).json({
        message: "Error Occur While Logout",
      });
    }
  },

  updateProfile: async (req: Request, res: Response) => {
    try {
    } catch (err) {
      console.log(err);
      res.status(501).json({
        message: "Error Occur while update Profile",
      });
    }
  },
  updatePassword: async (req: Request, res: Response) => {
    try {
    } catch (err) {
      console.log(err);
      res.status(501).json({
        message: "Error Occur while update Password",
      });
    }
  },
};
