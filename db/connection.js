// db/connection.js — conexión MySQL con ES6
import mysql from "mysql2/promise";

// Creamos un pool de conexiones (mucho mejor que una conexión única)
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "professional_advice_chat",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

// Exportamos el pool para usarlo en otros archivos
export default pool;
