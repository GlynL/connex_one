import { NextFunction, Request, Response } from "express";

export function auth(req: Request, res: Response, next: NextFunction) {
  const token = req.header("Authorization");
  if (token !== process.env.AUTH_TOKEN) {
    res.status(403).json({ message: "Unauthorized access." });
  } else {
    next();
  }
}
