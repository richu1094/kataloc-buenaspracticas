//https://developers.themoviedb.org/3/collections/get-collection-images
////cdbce95d5a79f025bdb488749921105f
const mongoose = require('mongoose');

const proyectoPeliculasGeneroSchema = mongoose.Schema({
  });
// Tercer argumento = Colleccion
const Pelicula_Genero = mongoose.model('Pelicula_Genero', proyectoPeliculasGeneroSchema, 'genero_peliculas');

module.exports = Pelicula_Genero;
