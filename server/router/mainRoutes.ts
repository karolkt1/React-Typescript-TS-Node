import path from "path";
import express from "express";
const router = express.Router();
import { getIndex, postLogin } from "../controllers/mainController";
const { check, validationResult } = require("express-validator");
// const { isAuth } = require("../middleware/isAuth");
// const { isNotAuth } = require("../middleware/isNotAuth");
// const { isNotAdmin } = require("../middleware/isNotAdmin");

router.get("/", getIndex);

router.post("/login", postLogin);

export default router;
