import path from "path";
import express from "express";
const router = express.Router();
import { getIndex, postLogin, getTabulator } from "../controllers/mainController";
const { check, validationResult } = require("express-validator");

router.get("/", getIndex);

router.post("/login", postLogin);

router.get("/tabulator", getTabulator);

export default router;
