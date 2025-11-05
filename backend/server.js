const express = require("express");
const cors = require("cors");
require("./db/connection")
const clientesRoutes = require("./routes/clientes.routes");
//const sorteosRoutes = require("./routes/sorteos.routes");
const ticketsRoutes = require("./routes/tickets.routes");
const ganadoresRoutes = require("./routes/ganadores.routes");

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// 🔗 Rutas principales
app.use("/api/clientes", clientesRoutes);
//app.use("/api/sorteos", sorteosRoutes);
app.use("/api/tickets", ticketsRoutes);
app.use("/api/ganadores", ganadoresRoutes);

// 🧩 Ruta base
app.get("/", (req, res) => res.send("API de sorteos funcionando 🚀"));

app.listen(3000, () => console.log("✅ Servidor corriendo en el puerto 3000"));
