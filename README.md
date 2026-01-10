# Professional Advice Chat

Este proyecto es una aplicación web para ofrecer asesorías y chat en tiempo real entre clientes y profesionales.

Este README es **inicial** y se irá ampliando a medida que avance el proyecto según el plan de acción.

---

## 🚀 Estado actual del proyecto (Día 7)

Hasta el momento se han completado:
- Configuración del entorno  
- Backend básico con Node.js y Express  
- Rutas GET, POST, PUT y DELETE  
- Base de datos MySQL creada  
- CRUD de ejemplo (`/personas`) funcionando  
- Conexión Node ↔ MySQL con `mysql2`  
- Uso profesional de Git (ramas, commits, merges)  

---

## 📦 Tecnologías usadas hasta ahora
- Node.js  
- Express  
- ES6 Modules  
- MySQL  
- mysql2 (conexión con promesas)  
- Git y GitHub  

---

## ▶️ Cómo ejecutar el proyecto
1.  Clonar el repositorio:
    ```bash
    git clone https://github.com/JudasIscariote/professional-advice-chat.git

2.  Instalar dependencias:
    npm install

3.  Ejecutar servidor:
    node index.js

    El servidor arrancará en:
    http://localhost:3000

📁 Estructura actual del proyecto
professional-advice-chat/
├── db/
│   └── connection.js
├── routes/
│   ├── test.routes.js
│   ├── dbtest.routes.js
│   └── personas.routes.js
├── index.js
├── package.json
└── README.md

✨ Nota
Este README será extendido en futuros días del plan, especialmente cuando:
    * implementemos autenticación
    * agreguemos frontend con React
    * incorporemos WebSockets y videollamadas
    * integremos pagos
    * preparemos el despliegue


Este es un README simple, claro y acorde al Día 7, sin nada que se adelante al futuro.

---

# 🟧 PASO 3 — Hacer commit del README
```bash
git add README.md
git commit -m "docs: add initial README for Day 7"