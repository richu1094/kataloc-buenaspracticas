//https://developers.themoviedb.org/3/collections/get-collection-images
////cdbce95d5a79f025bdb488749921105f
const mongoose = require('mongoose');

const proyectoPeliculasTopratedSchema = mongoose.Schema({
    page: {
      type: Number
    },
  });
// Tercer argumento = Colleccion
const Pelicula_Toprated = mongoose.model('Pelicula_Toprated', proyectoPeliculasTopratedSchema, 'peliculas_toprated');

module.exports = Pelicula_Toprated;