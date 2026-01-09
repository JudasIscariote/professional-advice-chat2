// routes/test.routes.js
import { Router } from "express";

const router = Router();

// GET /saludo
router.get("/saludo", (req, res) => {
    res.json({ mensaje: "Hola desde GET" });
});

// POST /saludo
router.post("/saludo", (req, res) => {
    res.json({
        mensaje: "POST recibido",
        datos: req.body,
    });
});

// PUT /saludo
router.put("/saludo", (req, res) => {
    res.json({
        mensaje: "PUT recibido",
        datos_actualizados: req.body,
    });
});

// DELETE /saludo
router.delete("/saludo", (req, res) => {
    res.json({
        mensaje: "DELETE recibido (simulado)",
    });
});

export default router;
