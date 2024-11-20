import User from "../models/User.js";
import { pool } from "../config/dbsql.js";

export const getSales = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM sales");
    res.json(rows);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
export const getSaleById = async (req, res) => {
  const id = req.params.id;
  try {
    const [rows] = await pool.query("SELECT * FROM sales WHERE id = ?", [id]);
    if (rows.length <= 0) {
      return res.status(404).json({ message: "Sale not found" });
    }
    res.json(rows[0]);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
export const getSaleByUser = async (req, res) => {
  const { username } = req.body;
  try {
    const [rows] = await pool.query("SELECT * FROM sales WHERE username = ?", [
      username,
    ]);
    if (rows.length <= 0) {
      return res.status(404).json({ message: "Sale not found" });
    }
    res.json(rows[0]);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
export const registerSale = async (req, res) => {
  const { username, amount, product } = req.body;
  const date = new Date();
  try {
    const [rows] = await pool.query(
      "INSERT INTO sales (username, amount, product, date) VALUES (?, ?,?,?)",
      [username, amount, product, date]
    );
    res.send({ id: rows.id, username, amount, product, date });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
export const updateSale = async (req, res) => {
  const id = req.params.id;
  const { username, amount, product } = req.body;
  try {
    const [result] = await pool.query(
      "UPDATE sales SET  amount = ?, product = ? WHERE id = ? ",
      [amount, product, id]
    );
    console.log(result);
    if (result.affectedRows <= 0) {
      res.status(404).json({ message: "Sale not found" });
    }
    const [rows] = await pool.query("SELECT * FROM sales WHERE id = ?", [id]);
    res.json(rows[0]);
    /*   pool.query("SELECT * FROM sales WHERE id = ?", [id], (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.json(results[0]);
  }); */
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const deleteSale = async (req, res) => {
  const id = req.params.id;
  try {
    const [result] = await pool.query("DELETE FROM sales WHERE id = ?", [id]);
    if (result.affectedRows <= 0) {
      res.status(404).json({ message: "Sale not found" });
    }
    res.status(204).json({ message: "Sale deleted successfully!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
