//https://developers.themoviedb.org/3/collections/get-collection-images
////cdbce95d5a79f025bdb488749921105f
const mongoose = require('mongoose');

const proyectoPeliculasDetallesSchema = mongoose.Schema({
    id: {
      type: Number
    },
  });
// Tercer argumento = Colleccion
const Pelicula_Detalles = mongoose.model('Pelicula_Detalles', proyectoPeliculasDetallesSchema, 'peliculas_detalles');

module.exports = Pelicula_Detalles;
