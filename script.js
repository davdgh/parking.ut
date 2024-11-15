const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const port = 3000;

// Configuración de la base de datos (ajusta según tus credenciales)
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'parking_system'
});

// Obtener el estado de todos los espacios
app.get('/api/espacios', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM espacios');
    res.json(rows);
  } catch (error) {
    console.error('Error al obtener los espacios:', error);
    res.status(500).send('Error en el servidor');
  }
});

// Actualizar el estado de un espacio
app.put('/api/espacios/:id', async (req, res) => {
  const { id } = req.params;
  const { estado } = req.body;

  try {
    await pool.query('UPDATE espacios SET estado = ? WHERE id_espacio = ?', [estado, id]);
    res.sendStatus(200);
  } catch (error) {
    console.error('Error al actualizar el espacio:', error);
    res.status(500).send('Error en el servidor');
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});