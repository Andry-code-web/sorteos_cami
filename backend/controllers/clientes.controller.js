const db = require("../db/connection");

// Obtener todos los clientes
exports.getClientes = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM clientes");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener clientes", error });
  }
};

// Buscar cliente por DNI
exports.getClienteByDni = async (req, res) => {
  const { dni } = req.params;
  try {
    const [rows] = await db.query("SELECT * FROM clientes WHERE dni = ?", [dni]);
    if (rows.length === 0) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: "Error al buscar cliente", error });
  }
};

// Crear cliente nuevo
exports.createCliente = async (req, res) => {
  const { dni, nombres, apellidos, celular, email } = req.body;
  try {
    const [result] = await db.query(
      "INSERT INTO clientes (dni, nombres, apellidos, celular, email) VALUES (?, ?, ?, ?, ?)",
      [dni, nombres, apellidos, celular, email]
    );
    res.status(201).json({ id: result.insertId, dni, nombres, apellidos, celular, email });
  } catch (error) {
    res.status(500).json({ message: "Error al crear cliente", error });
  }
};

