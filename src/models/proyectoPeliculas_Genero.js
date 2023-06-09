const mongoose = require('mongoose');

const proyectoPeliculasGeneroSchema = mongoose.Schema({
  });
// Tercer argumento = Colleccion
const Pelicula_Genero = mongoose.model('Pelicula_Genero', proyectoPeliculasGeneroSchema, 'peliculas_genero');

module.exports = Pelicula_Genero;
