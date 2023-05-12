//https://developers.themoviedb.org/3/collections/get-collection-images
////cdbce95d5a79f025bdb488749921105f
const mongoose = require('mongoose');

const proyectoSeriesPopularSchema = mongoose.Schema({
    page: {
      type: Number
    },
  });
// Tercer argumento = Colleccion
const Serie_Popular = mongoose.model('Serie_Popular', proyectoSeriesPopularSchema, 'series_popular');

module.exports = Serie_Popular;