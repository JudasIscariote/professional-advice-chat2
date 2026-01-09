-- Crear base de datos.
CREATE DATABASE professional_advice_chat;

-- Utilizar base de datos creada.
USE professional_advice_chat;

-- Crear tabla "personas".
CREATE TABLE
    personas (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(50),
        edad INT
    );

-- Agregar 2 registros.
INSERT INTO personas (nombre, edad) VALUES ('Ignacio', 44);
INSERT INTO personas (nombre, edad)VALUES ('Rodrigo', 30);

-- Leer datos de tabla "personas".
SELECT * FROM personas;

-- Actualizar datos en registro con id 1 de tabla "personas".
UPDATE personas SET edad = 45 WHERE id = 1;

-- Eliminar registro con id 2 de tabla "personas".
DELETE FROM personas WHERE id = 2;