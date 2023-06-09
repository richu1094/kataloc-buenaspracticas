const mongoose = require("mongoose");

const proyectoPeliculasProvidersSchema = mongoose.Schema({
  id: {
    type: Number,
  },
});
// Tercer argumento = Colleccion
const Pelicula_Providers = mongoose.model(
  "Pelicula_Providers",
  proyectoPeliculasProvidersSchema,
  "peliculas_providers"
);

module.exports = Pelicula_Providers;
