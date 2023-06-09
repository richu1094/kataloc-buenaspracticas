const mongoose = require('mongoose');

const proyectoSeriesTopratedSchema = mongoose.Schema({
    page: {
      type: Number
    },
  });
// Tercer argumento = Colleccion
const Serie_Toprated = mongoose.model('Serie_Toprated', proyectoSeriesTopratedSchema, 'series_toprated');

module.exports = Serie_Toprated;

Serie_Toprated