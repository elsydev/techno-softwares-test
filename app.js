import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import salesRoutes from "./routes/salesRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());

app.use(cors());
app.use(morgan("dev"));

app.use("/api/sales", salesRoutes);
app.use((req, res, next) => {
  res.status(404).json({ message: "Endpoint not found" });
});
export default app;
