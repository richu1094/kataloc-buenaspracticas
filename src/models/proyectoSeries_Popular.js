const mongoose = require('mongoose');

const proyectoSeriesPopularSchema = mongoose.Schema({
    page: {
      type: Number
    },
  });
// Tercer argumento = Colleccion
const Serie_Popular = mongoose.model('Serie_Popular', proyectoSeriesPopularSchema, 'series_popular');

module.exports = Serie_Popular;