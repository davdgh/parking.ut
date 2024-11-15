const express = require('express');
const mysql = require('mysql2/promise');
const spacesRouter = require('./routes/index');

const app = express();
const port = 3000;

// Configuración de la base de datos (ajusta según tus credenciales)
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'parking_system'
});

// Middleware para parsear el cuerpo de las solicitudes
app.use(express.json());

// Rutas
app.use('/api', spacesRouter);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

