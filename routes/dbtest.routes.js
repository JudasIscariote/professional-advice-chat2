// routes/dbtest.routes.js — prueba básica de conexión a MySQL
import { Router } from "express";
import pool from "../db/connection.js";

const router = Router();

router.get("/", async (req, res) => {
    try {
        // Ejecutamos una consulta muy simple
        const [rows] = await pool.query("SELECT 1 + 1 AS resultado");
        res.json({
            mensaje: "Conexión a MySQL funcionando",
            resultado: rows[0].resultado,
        });
    } catch (error) {
        console.error("Error en la conexión MySQL:", error);
        res.status(500).json({ error: "Error al conectar a MySQL" });
    }
});

export default router;
