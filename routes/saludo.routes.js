import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.json({
        mensaje: "Hola Ignacio, esta es una ruta de práctica del Día 7.",
    });
});

export default router;
