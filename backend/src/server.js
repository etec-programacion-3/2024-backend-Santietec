// server.js
const express = require('express');
const connection = require('./database'); // Importa tu conexión a la base de datos

const app = express();
const PORT = 3000;

// Middleware para manejar JSON
app.use(express.json());

// Endpoint de ejemplo para obtener datos
app.get('/api/datos', (req, res) => {
  const query = 'SELECT * FROM tu_tabla'; // Cambia esto al nombre de tu tabla
  connection.query(query, (error, results) => {
    if (error) {
      return res.status(500).json({ error: 'Error en la consulta a la base de datos' });
    }
    res.json(results);
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
