import express from "express";
import dotenv from "dotenv";
import mainRoutes from "./router/mainRoutes";
import path from "path";
import cors from "cors";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(mainRoutes);
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
