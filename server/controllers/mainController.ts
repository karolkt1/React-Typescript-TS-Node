import { Request, Response, NextFunction } from "express";

export const getIndex = (req: Request, res: Response, next: NextFunction) => {
  res.send({ message: "Hello World!" });
};

export const postLogin = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body);
  if (req.body.password === "admin") {
    res.send({ message: "Login Successful!", authenticated: true });
  } else {
    res.send({ message: "Login Failed!", authenticated: false });
  }
};
