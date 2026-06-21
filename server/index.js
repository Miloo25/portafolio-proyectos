// 1. Importamos la librería Express que descargamos antes
const express = require('express');

// 2. Inicializamos la aplicación de Express
const app = express();

// 3. Definimos el puerto donde escuchará nuestro servidor
const PORT = 3000;

// 4. Creamos nuestra primera "Ruta" (Endpoint). 
// Cuando entremos a http://localhost:3000/ nos responderá este mensaje.
app.get('/', (req, res) => {
  res.send('¡Servidor funcionando correctamente!');
});

// 5. Le decimos al servidor que empiece a escuchar las peticiones
app.listen(PORT, () => {
  console.log(`Servidor corriendo con éxito en http://localhost:${PORT}`);
});