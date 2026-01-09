import express from "express";
import testRoutes from "./routes/test.routes.js";
import dbTestRouter from './routes/dbtest.routes.js';
import personasRouter from './routes/personas.routes.js';

const app = express();
const port = process.env.PORT || 3000;

// Permite que Express lea JSON enviado por el cliente
app.use(express.json());

// Registrar las rutas de test en /api
app.use("/api", testRoutes);

// Probar conexión a MySQL
app.use('/dbtest', dbTestRouter);

// Probar CRUD MySQL con tabla "personas".
app.use('/personas', personasRouter);

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
