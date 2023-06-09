const mongoose = require('mongoose');

const proyectoPeliculasTopratedSchema = mongoose.Schema({
    page: {
      type: Number
    },
  });
// Tercer argumento = Colleccion
const Pelicula_Toprated = mongoose.model('Pelicula_Toprated', proyectoPeliculasTopratedSchema, 'peliculas_toprated');

module.exports = Pelicula_Toprated;