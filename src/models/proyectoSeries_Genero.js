//https://developers.themoviedb.org/3/collections/get-collection-images
////cdbce95d5a79f025bdb488749921105f
const mongoose = require('mongoose');

const proyectoSeriesGeneroSchema = mongoose.Schema({
  });
// Tercer argumento = Colleccion
const Serie_Genero = mongoose.model('Serie_Genero', proyectoSeriesGeneroSchema, 'genero_series');

module.exports = Serie_Genero;
