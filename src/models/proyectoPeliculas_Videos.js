const mongoose = require("mongoose");

const proyectoPeliculasVideosSchema = mongoose.Schema({
  id: {
    type: Number,
  },
});
// Tercer argumento = Colleccion
const Pelicula_Videos = mongoose.model(
  "Pelicula_Videos",
  proyectoPeliculasVideosSchema,
  "peliculas_videos"
);

module.exports = Pelicula_Videos;
