//https://developers.themoviedb.org/3/collections/get-collection-images
////cdbce95d5a79f025bdb488749921105f
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
