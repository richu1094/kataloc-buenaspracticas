const mongoose = require('mongoose');

const proyectoSeriesGeneroSchema = mongoose.Schema({
  });
// Tercer argumento = Colleccion
const Serie_Genero = mongoose.model('Serie_Genero', proyectoSeriesGeneroSchema, 'genero_series');

module.exports = Serie_Genero;
