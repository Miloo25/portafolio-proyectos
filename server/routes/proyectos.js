const express = require('express');
const router = express.Router();
const db = require('../config/db'); // Importamos tu conexión real

// 📥 Ventanilla 1: Guardar proyecto (POST)
router.post('/', (req, res) => {
  // Recibimos los campos mapeados según tu base de datos
  const { nombre, descripcion, url_github, tecnologias } = req.body;

  // Validación básica por si llega algo vacío
  if (!nombre || !descripcion) {
    return res.status(400).json({ error: "El nombre y la descripción son obligatorios" });
  }

  const query = `INSERT INTO proyectos (nombre, descripcion, url_github, tecnologias) VALUES (?, ?, ?, ?)`;

  db.query(query, [nombre, descripcion, url_github, tecnologias], (err, result) => {
    if (err) {
      console.error("Error al insertar en la base de datos:", err);
      return res.status(500).json({ error: 'Error al guardar.' });
    }
    res.status(201).json({ mensaje: '¡Proyecto guardado con éxito! 🚀', id: result.insertId });
  });
});

// 📤 Ventanilla 2: Obtener proyectos (GET)
router.get('/', (req, res) => {
  // Ordenados por tu columna real 'creado_en'
  const query = 'SELECT * FROM proyectos ORDER BY creado_en DESC';

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error al obtener de la base de datos:", err);
      return res.status(500).json({ error: 'Error al obtener datos.' });
    }
    res.json(results);
  });
});

module.exports = router;