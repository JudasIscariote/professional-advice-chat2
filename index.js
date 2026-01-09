import express from "express";
import testRoutes from "./routes/test.routes.js";

const app = express();
const port = process.env.PORT || 3000;

// Permite que Express lea JSON enviado por el cliente
app.use(express.json());

// Registrar las rutas de test en /api
app.use("/api", testRoutes);

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
