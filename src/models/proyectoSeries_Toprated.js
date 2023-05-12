//https://developers.themoviedb.org/3/collections/get-collection-images
////cdbce95d5a79f025bdb488749921105f
const mongoose = require('mongoose');

const proyectoSeriesTopratedSchema = mongoose.Schema({
    page: {
      type: Number
    },
  });
// Tercer argumento = Colleccion
const Serie_Toprated = mongoose.model('Serie_Toprated', proyectoSeriesTopratedSchema, 'series_toprated');

module.exports = Serie_Toprated;

Serie_Toprated