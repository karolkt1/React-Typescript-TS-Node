import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const checkToken = (req: Request, res: Response, next: NextFunction) => {
  let token;
  if (req.headers.authorization) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return res.status(401).send("Access denied. No token provided.");
  }
  try {
    const decoded = jwt.verify(token, process.env.SERCRET_KEY!);
    // const decoded = jwt.verify(token, "qwe");
    req.body.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send("Invalid token.");
  }
};
