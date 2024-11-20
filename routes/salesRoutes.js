import { Router } from "express";
import { pool } from "../config/dbsql.js";
import {
  getSales,
  getSaleById,
  getSaleByUser,
  registerSale,
  updateSale,
  deleteSale,
} from "../controllers/salesController.js";
const router = Router();

router.get("/ping", async (req, res) => {
  const [result] = await pool.query('SELECT "pong" AS result');
  res.json(result[0]);
});
router.get("/", getSales);
router.get("/:id", getSaleById);
router.post("/search", getSaleByUser);
router.post("/register", registerSale);
router.patch("/:id", updateSale);
router.delete("/:id", deleteSale);
export default router;
