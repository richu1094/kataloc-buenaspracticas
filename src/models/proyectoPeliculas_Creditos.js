const mongoose = require("mongoose");

const proyectoPeliculasCreditosSchema = mongoose.Schema({
  id: {
    type: Number,
  },
});
// Tercer argumento = Colleccion
const Pelicula_Creditos = mongoose.model(
  "Pelicula_Creditos",
  proyectoPeliculasCreditosSchema,
  "peliculas_creditos"
);

module.exports = Pelicula_Creditos;