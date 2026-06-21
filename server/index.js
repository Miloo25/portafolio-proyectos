const express = require('express');
require('dotenv').config();
const proyectosRoutes = require('./routes/proyectos'); // Importamos las rutas ordenadas

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Le decimos al servidor que use las rutas de proyectos cuando alguien entre a /api/proyectos
app.use('/api/proyectos', proyectosRoutes);

app.get('/', (req, res) => {
  res.send('¡Servidor ordenado y funcionando!');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});