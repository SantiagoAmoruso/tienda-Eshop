import express from "express";
import cors from "cors";
import pool from "./conexion.js";

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/productos", async (req, res) => {
  const sql = "SELECT * FROM productos";
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query(sql);
    connection.release();
    res.json(rows);
  } catch (error) {
    res.status(500).send("error en la consulta");
  }
});

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto:", PORT);
});
