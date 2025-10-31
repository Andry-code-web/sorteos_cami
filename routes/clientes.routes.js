const express = require("express");
const router = express.Router();
const {
  getClientes,
  getClienteByDni,
  createCliente,
} = require("../controllers/clientes.controller");

router.get("/", getClientes);
router.get("/:dni", getClienteByDni);
router.post("/", createCliente);

module.exports = router;
