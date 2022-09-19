import path from "path";
import express from "express";
const router = express.Router();
import {
  getIndex,
  postLogin,
  getTabulator,
  getTest,
} from "../controllers/mainController";
import { checkToken } from "../middleware/checkToken";
// const { check, validationResult } = require("express-validator");

router.get("/", getIndex);

router.post("/login", postLogin);

router.get("/test", checkToken, getTest);

router.get("/tabulator", checkToken, getTabulator);

export default router;
