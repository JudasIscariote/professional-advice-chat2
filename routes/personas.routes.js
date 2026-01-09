// routes/personas.routes.js
import { Router } from "express";
import pool from "../db/connection.js";

const router = Router();

/* --------------------------------------------------
   1. SELECT — Obtener todas las personas
-------------------------------------------------- */
router.get("/", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM personas");
        res.json(rows);
    } catch (error) {
        console.error("Error al obtener personas:", error);
        res.status(500).json({ error: "Error al obtener personas" });
    }
});

/* --------------------------------------------------
   2. INSERT — Crear una persona nueva
-------------------------------------------------- */
router.post("/", async (req, res) => {
    try {
        const { nombre, edad } = req.body;

        const sql = "INSERT INTO personas (nombre, edad) VALUES (?, ?)";
        const params = [nombre, edad];

        const [result] = await pool.query(sql, params);

        res.json({
            mensaje: "Persona agregada correctamente",
            nuevaPersonaId: result.insertId,
        });
    } catch (error) {
        console.error("Error al insertar persona:", error);
        res.status(500).json({ error: "Error al insertar persona" });
    }
});

/* --------------------------------------------------
   3. UPDATE — Actualizar una persona
-------------------------------------------------- */
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, edad } = req.body;

        const sql = "UPDATE personas SET nombre = ?, edad = ? WHERE id = ?";
        const params = [nombre, edad, id];

        await pool.query(sql, params);

        res.json({ mensaje: "Persona actualizada correctamente" });
    } catch (error) {
        console.error("Error al actualizar persona:", error);
        res.status(500).json({ error: "Error al actualizar persona" });
    }
});

/* --------------------------------------------------
   4. DELETE — Eliminar una persona
-------------------------------------------------- */
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const sql = "DELETE FROM personas WHERE id = ?";
        const params = [id];

        await pool.query(sql, params);

        res.json({ mensaje: "Persona eliminada correctamente" });
    } catch (error) {
        console.error("Error al eliminar persona:", error);
        res.status(500).json({ error: "Error al eliminar persona" });
    }
});

export default router;
