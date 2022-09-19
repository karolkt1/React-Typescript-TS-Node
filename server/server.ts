import express from "express";
import dotenv from "dotenv";
import session from "express-session";
import router from "./router/mainRoutes";
// const router = require("./router/mainRoutes");
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public")));
app.set("trust proxy", 1); // trust first proxy
app.use(
  session({
    secret: "keyboard cat",
    store: new session.MemoryStore(),
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: false, sameSite: "none" },
  })
);
app.use(router);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
