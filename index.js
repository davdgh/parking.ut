const express = require('express');
const spacesController = require('../controllers/spaces.controller');

const router = express.Router();

// Rutas para los espacios de estacionamiento
router.get('/espacios', spacesController.getSpaces);
router.put('/espacios/:id', spacesController.updateSpace);

module.exports = router;
