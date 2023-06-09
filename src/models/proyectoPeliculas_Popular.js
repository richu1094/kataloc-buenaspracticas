const mongoose = require('mongoose');

const proyectoPeliculasPopularSchema = mongoose.Schema({
    page: {
      type: Number
    },
  });
// Tercer argumento = Colleccion
const Pelicula_Popular = mongoose.model('Pelicula_Popular', proyectoPeliculasPopularSchema, 'peliculas_popular');

module.exports = Pelicula_Popular;