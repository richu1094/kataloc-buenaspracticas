const mongoose = require('mongoose');

const proyectoPeliculasDetallesSchema = mongoose.Schema({
    id: {
      type: Number
    },
  });
// Tercer argumento = Colleccion
const Pelicula_Detalles = mongoose.model('Pelicula_Detalles', proyectoPeliculasDetallesSchema, 'peliculas_detalles');

module.exports = Pelicula_Detalles;
