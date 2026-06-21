const express = require('express');
const router = express.Router();
const db = require('../config/db'); // Importamos la conexión que separamos arriba

// Ventanilla 1: Guardar proyecto (POST)
router.post('/', (req, res) => {
  const { nombre, descripcion, url_github, tecnologias } = req.body;
  const query = `INSERT INTO proyectos (nombre, descripcion, url_github, tecnologias) VALUES (?, ?, ?, ?)`;

  db.query(query, [nombre, descripcion, url_github, tecnologias], (err, result) => {
    if (err) return res.status(500).json({ error: 'Error al guardar.' });
    res.status(201).json({ mensaje: '¡Proyecto guardado!', id: result.insertId });
  });
});

// Ventanilla 2: Obtener proyectos (GET)
router.get('/', (req, res) => {
  const query = 'SELECT * FROM proyectos ORDER BY creado_en DESC';

  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al obtener datos.' });
    res.json(results);
  });
});

module.exports = router;