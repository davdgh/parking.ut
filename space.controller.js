const pool = require('../db'); // Importa la conexión a la base de datos

const getSpaces = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM espacios');
    res.json(rows);
  } catch (error) {
    console.error('Error al obtener los espacios:', error);
    res.status(500).send('Error en el servidor');
  }
};

const updateSpace = async (req, res) => {
  const { id } = req.params;
  const { estado } = req.body;

  try {
    await pool.query('UPDATE espacios SET estado = ? WHERE id_espacio = ?', [estado, id]);
    res.sendStatus(200);
  } catch (error) {
    console.error('Error al actualizar el espacio:', error);
    res.status(500).send('Error en el servidor');
  }
};

module.exports = { getSpaces, updateSpace};
