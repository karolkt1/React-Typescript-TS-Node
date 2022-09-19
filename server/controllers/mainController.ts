import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

export const getIndex = (req: Request, res: Response, next: NextFunction) => {
  res.send({ message: "Hello World!" });
};
class User {
  constructor(
    public id: number,
    public email: string,
    public password: string,
    public token: string | null
  ) {}
}
declare module "express-session" {
  interface SessionData {
    user: User;
  }
}

export const postLogin = (req: Request, res: Response, next: NextFunction) => {
  const user = new User(
    Math.floor(Math.random() * 1000),
    req.body.email.toLowerCase(),
    req.body.password,
    null
  );

  let token: string | null = null;
  if (user.password === "admin") {
    token = jwt.sign({ userEmail: user.email }, process.env.SERCRET_KEY!, {
      expiresIn: "1h",
    });
  } else {
    token = null;
  }
  user.token = token;
  req.session.user = user;
  res.send({ token: token });
};

export const getTabulator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = [
    { firstName: "Oli", lastName: "Bob" },
    { firstName: "Mary", lastName: "May" },
  ];
  res.send(data);
};

export const getTest = (req: Request, res: Response, next: NextFunction) => {
  // req.session.user = {"id":123, "email":"","password":"", "token":""};
  try {
    const decoded = jwt.verify(
      req.session.user!.token!,
      process.env.SERCRET_KEY!
    );
    console.log("decoded", decoded);
  } catch (error) {
    console.log("error", error);
  }
  // console.log(req.session);
  res.send(req.session);
};
