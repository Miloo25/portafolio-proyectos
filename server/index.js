const express = require('express');
const cors = require('cors'); // 🎨 Librería para permitir la conexión desde el Frontend (React)
require('dotenv').config();    // Permite leer las variables del archivo .env
const proyectosRoutes = require('./routes/proyectos'); // Importamos tus rutas ordenadas

const app = express();
// Definimos el puerto (usa el de .env o por defecto el 3000)
const PORT = process.env.PORT || 3000;

// ==========================================
// ⚙️ MIDDLEWARES (CONFIGURACIONES GLOBALES)
// ==========================================

// Habilitamos CORS para que Vite (puerto 5173) pueda comunicarse sin bloqueos con Node (puerto 3000)
app.use(cors()); 

// Habilita a Express para que pueda entender los formatos JSON que envía el formulario
app.use(express.json());

// ==========================================
// 🧭 ASIGNACIÓN DE RUTAS
// ==========================================

// Le decimos al servidor que use el archivo de rutas cuando alguien apunte a /api/proyectos
app.use('/api/proyectos', proyectosRoutes);

// Ruta de cortesía para verificar en el navegador que el servidor esté en línea
app.get('/', (req, res) => {
  res.send('¡Servidor ordenado, con CORS activado y funcionando perfectamente! 🚀');
});

// ==========================================
// 🚀 INICIO DEL SERVIDOR
// ==========================================
app.listen(PORT, () => {
  console.log(`Servidor corriendo con éxito en http://localhost:${PORT}`);
});