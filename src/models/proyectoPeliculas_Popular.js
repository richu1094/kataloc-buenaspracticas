//https://developers.themoviedb.org/3/collections/get-collection-images
////cdbce95d5a79f025bdb488749921105f
const mongoose = require('mongoose');

const proyectoPeliculasPopularSchema = mongoose.Schema({
    page: {
      type: Number
    },
  });
// Tercer argumento = Colleccion
const Pelicula_Popular = mongoose.model('Pelicula_Popular', proyectoPeliculasPopularSchema, 'peliculas_popular');

module.exports = Pelicula_Popular;