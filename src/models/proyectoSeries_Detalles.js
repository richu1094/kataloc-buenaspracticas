const mongoose = require('mongoose');

const proyectoSeriesDetallesSchema = mongoose.Schema({
    id: {
      type: Number
    },
    nombre: {
      type: String
    },
  });
// Tercer argumento = Colleccion
const Serie_Detalles = mongoose.model('Serie_Detalles', proyectoSeriesDetallesSchema, 'series_detalles');

module.exports = Serie_Detalles;
