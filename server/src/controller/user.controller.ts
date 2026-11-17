import type { Request, Response } from "express";
import { UserModel } from "../model/user.model";
import { InterviewerModel } from "../model/interviewer.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const auth = {
  signIn: async (req: Request, res: Response) => {
    try {
      const { name, password, email, skill, techStack, experience, role } =
        req.body;

      const IsUser = await UserModel.findOne({
        email: email,
      });

      if (IsUser) {
       return res.status(401).json({
          message: "User Already Exits ! Go to login Page ",
        });
      }

      const hashPassword = await bcrypt.hash(password.trim(), 10);

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
        { expiresIn: "7d" },
      );

      res.cookie("token", token, {
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
      const { email, password } = req.body;

      const isUserExit = await UserModel.findOne({
        email: email,
      });

      if (!isUserExit || isUserExit.status != "ACTIVE") {
        return res.status(401).json({
          message: "User Not Exits OR Suspended",
        });
      }

      const isValidPassword = await bcrypt.compare(
        password,
        isUserExit.password,
      );

      if (!isValidPassword) {
        return res.status(401).json({
          message: "Invalid Password !!",
        });
      }

      const token = jwt.sign(
        { id: isUserExit._id, role: isUserExit.role },
        process.env.JWT_SECRET,
        { expiresIn: "7d" },
      );

      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 60 * 60 * 1000,
      });

      res.status(200).json({
        message: "User Login Sucessfully",
      });
    } catch (err) {
      res.status(501).json({
        message: "Error Occur While SignUp",
      });
    }
  },

  getProfile: async (req: Request, res: Response) => {
    try {
      const id = req.user.id;

      const isUserExit = await UserModel.findOne({
        _id: id,
      }).select("-password -createdAt -updatedAt -__v");

      if (!isUserExit || isUserExit.status != "ACTIVE") {
        return res.status(401).json({
          message: "User Not Found OR User Is Suspended !!!",
        });
      }

      let InterviewerProfile = null;

      if (isUserExit.role == "INTERVIEWER") {
        InterviewerProfile = await InterviewerModel.findOne({
          userId: id,
        }).select("-userId -createdAt -updatedAt -__v");
      }

      res.status(200).json({
        message: "User Fetch Sucessfully",
        user: isUserExit,
        InterviewerProfile,
      });
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
      const token = req.cookies.token;

      console.log(token);

      if (!token) {
        return res.status(404).json({
          message: "Token Not Found!!",
        });
      }

      res.clearCookie("token", {
       httpOnly: true,
      secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
       path: "/",
      });

      res.status(200).json({
        message: "Logout Sucessfully",
      });
    } catch (err) {
      console.log(err);
      res.status(501).json({
        message: "Error Occur While Logout",
      });
    }
  },

  updateProfile: async (req: Request, res: Response) => {
    try {
      const user = req.user;

      const { name, email, experience, skills, techStack } = req.body;

      const isUserExit = await UserModel.findOne({
        _id: user.id,
      });

      if (!isUserExit || isUserExit.status != "ACTIVE") {
        return res.status(401).json({
          message: "User Not Exits or user is suspended",
        });
      }

      if (email) {
        const isEmailAllreadyUse = await UserModel.findOne({
          email: email,
          _id : {$ne: user.id}
        });

        if (isEmailAllreadyUse) {
          return res.status(401).json({
            message: "Email Already associated with Other Account",
          });
        }
      }

      if (name) isUserExit.name = name;

      if (email) isUserExit.email = email;

      let InterviewerProfile = null;

      if (isUserExit.role == "INTERVIEWER") {

        InterviewerProfile = await InterviewerModel.findOne({
          userId: user.id,
        });

        if(!InterviewerProfile){
          return res.status(401).json({
            message : "Interviewer file not found !!!"
          })
        }

        if (experience) InterviewerProfile.experience = experience;

        if (techStack) {
          for (let techstack of techStack) {
            InterviewerProfile.techStack.push(techstack);
          }
        }

        if (skills) {
          for (let skill of skills) {
            InterviewerProfile.skills.push(skill);
          }
        }
      }

      await isUserExit.save();
      if(InterviewerProfile){
         await InterviewerProfile.save();
      }
     

      res.status(200).json({
        message: "Profile Update Sucessfully",
        user: isUserExit,
        InterviewerProfile,
      });
    } catch (err) {
      console.log(err);
      res.status(501).json({
        message: "Error Occur while update Profile",
      });
    }
  },
  updatePassword: async (req: Request, res: Response) => {
    try {
      const user = req.user;

      const { currentPassword, newPassword } = req.body;

      const isUserExit = await UserModel.findOne({
        _id: user.id,
      });

      if (!isUserExit || isUserExit.status !== "ACTIVE") {
        return res.status(401).json({
          message: "User Not Exits or user is suspended",
        });
      }

      const isValidPassword = await bcrypt.compare(
        currentPassword.trim(),
        isUserExit.password,
      );

      if (!isValidPassword) {
        return res.status(401).json({
          message: "Invalid current Password",
        });
      }

      const hashPassword = await bcrypt.hash(newPassword.trim(), 10);

      isUserExit.password = hashPassword;

      await isUserExit.save();

      res.status(200).json({
        message: "Passwaord Change Sucessfully",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Error Occur while update Password",
      });
    }
  },
};
