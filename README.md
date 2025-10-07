# sorteos_cami

Aplicación web para gestionar y mostrar sorteos, con un frontend en Astro y un backend (Node/Express) pensado para exponer APIs de sorteos y validaciones de DNI.

Este README explica cómo ejecutar el proyecto en desarrollo, la estructura principal, variables de entorno importantes, endpoints disponibles (cuando el backend esté implementado) y pasos recomendados para completar el backend si aún falta código.

## Contenido

- Frontend: `frontend/` — Sitio estático construído con Astro + Tailwind.
- Backend: `backend/` — API en Node.js (Express) con conexión a MySQL (carpeta `db/`).

## Estado actual

- El frontend ya tiene páginas y consume la API en `http://localhost:3000/api/sorteos` (archivo: `frontend/src/pages/sorteos.astro`).
- El `backend/package.json` declara dependencias (Express, mysql2, dotenv, cors) pero los archivos clave del backend (`server.js`, `db/connection.js` y los controladores/rutas) están vacíos en esta copia del repositorio. En este README incluyo instrucciones para completar y ejecutar el backend.

## Tecnologías

- Frontend: Astro, Tailwind CSS
- Backend: Node.js, Express
- Base de datos: MySQL (con `mysql2`)
- Otros: dotenv para variables de entorno, cors

## Requisitos previos

- Node.js v18+ y npm instalados
- MySQL (o MariaDB) si vas a usar la base de datos localmente

## Configuración y ejecución (desarrollo)

Abre dos terminales o pestañas: uno para el backend y otro para el frontend.

1) Instala dependencias

PowerShell (desde la carpeta raíz del proyecto):

```powershell
cd .\backend; npm install; cd ..\frontend; npm install
```

2) Configurar variables de entorno para el backend

Dentro de `backend/` crea un archivo `.env` con, al menos, estas variables:

```
PORT=3000
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_password
DB_NAME=tu_basedatos
```

3) Ejecutar el backend (desarrollo)

En un terminal PowerShell desde `backend/`:

```powershell
npm run start
```

Nota: el script `start` usa `nodemon server.js`. Asegúrate de que `server.js` tenga la lógica del servidor (ver sección "Plantilla mínima de server.js" más abajo).

4) Ejecutar el frontend (desarrollo)

En otro terminal PowerShell desde `frontend/`:

```powershell
npm run dev
```

Por defecto Astro servirá el sitio en `http://localhost:4321` (o el puerto que indique el log de `astro dev`). La página `sorteos.astro` hace una petición a `http://localhost:3000/api/sorteos` para obtener la lista de sorteos.

## Endpoints esperados (documentación rápida)

Estos endpoints son los esperados por el frontend y por el propósito del proyecto. Como los archivos de rutas están vacíos, tendrás que implementarlos en `backend/routes` y `backend/controllers`.

- GET /api/sorteos
	- Descripción: Devuelve un arreglo JSON con los sorteos disponibles.
	- Respuesta de ejemplo: [{ "id": 1, "nombre": "Sorteo X", "fecha": "2025-10-10" }]

- POST /api/validar-dni
	- Descripción: Recibe { dni: "..." } y devuelve si es válido y/o datos asociados.

## Plantilla mínima para completar el backend

Si quieres un punto de partida rápido para `backend/server.js`, pega este esqueleto (no lo añado automáticamente para no sobreescribir tu proyecto):

```js
// Ejemplo básico de server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Rutas de ejemplo
app.get('/api/sorteos', (req, res) => {
	res.json([{ id: 1, nombre: 'Sorteo demo' }]);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API escuchando en http://localhost:${port}`));
```

Y un `db/connection.js` mínimo:

```js
// db/connection.js
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
});

module.exports = pool;
```

## Estructura del proyecto (resumen)

```
/
├─ backend/           # API (Node/Express)
│  ├─ controllers/    # controladores (vacío actualmente)
│  ├─ db/             # conexión a BD (vacío actualmente)
│  ├─ routes/         # rutas (vacío actualmente)
│  └─ server.js       # servidor (vacío actualmente)
├─ frontend/          # Sitio en Astro
│  ├─ src/
│  │  ├─ pages/       # páginas (index.astro, sorteos.astro)
│  │  └─ components/
│  └─ package.json
└─ README.md
```

## Despliegue

- Frontend (Astro): compila con `npm run build` dentro de `frontend/` y sirve el contenido de `dist/` en cualquier servidor estático.
- Backend: desplegar en un servicio Node (Heroku, Render, Railway, VPS) asegurando las variables de entorno y la conexión a MySQL.

## Contribuir

1. Haz un fork.
2. Crea una rama feature/mi-cambio.
3. Envía un PR con una descripción clara.

## Próximos pasos recomendados

- Implementar `backend/server.js` y las rutas en `backend/routes` y `backend/controllers`.
- Añadir scripts de start/production más explícitos si planeas desplegar (por ejemplo `start:prod`).
- Añadir pruebas unitarias para endpoints importantes.

## Licencia

Revisa el archivo `LICENSE` incluido en el repositorio.

---

Si quieres, puedo:

- Generar automáticamente un `server.js` y un `db/connection.js` de arranque para que el backend ya responda la ruta `/api/sorteos`.
- Crear ejemplos de controladores y rutas (GET/POST) y un pequeño seed SQL para la tabla de sorteos.

Dime qué prefieres y lo implemento.
