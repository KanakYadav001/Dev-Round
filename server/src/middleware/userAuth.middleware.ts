import jwt from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";

export const Middleware = {
  authMiddleware: async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        message: "Unauthorizrd Access",
      });
    }
    try {
      const decode = await jwt.verify(token, process.env.JWT_SECRET);

      req.user = decode;

      next();
    } catch (err) {
      res.status(401).json({
        message: "Forbidden!!!",
      });
    }
  },

  adminMiddleware: async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token;

    if (!token || token.role != "ADMIN") {
      return res.status(401).json({
        message: "Unauthorizrd Access",
      });
    }

    try {
      const decode = await jwt.verify(token, process.env.JWT_SECRET);

      req.user = decode;

      next();
    } catch (err) {
      res.status(401).json({
        message: "Forbidden!!!",
      });
    }
  },
  InterviewerMiddleware: async (req: Request,res: Response,next: NextFunction ) => {
    const token = req.cookies.token;

    if (!token || token.role != "INTERVIEWER") {
      return res.status(401).json({
        message: "Unauthorizrd Access",
      });
    }

    try {
      const decode = await jwt.verify(token, process.env.JWT_SECRET);
      req.user = decode;
      next();
    } catch (err) {
      res.status(401).json({
        message: "Forbidden!!!",
      });
    }
  },
};
