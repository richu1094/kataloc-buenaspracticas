const express = require("express");
const mongoose = require("mongoose");
//Variables de entorno
require("dotenv").config();
const userRouter = require("./routes/user.js");
const seriesRouter = require("./routes/series.js");

const app = express();
const port = process.env.PORT || 3000;

//Middleware
app.use(express.json());
app.use('/api', userRouter);
app.use('/api', seriesRouter);

app.get("/", (req, res) => {
  res.send("<h1>Bienvenido a la API de Kataloc</h1>");
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Conectado a MongoDB Atlas.");
    app.listen(port, () => {
      console.log("Escuchando el puerto 3000...");
    });
  })
  .catch((err) => {
    console.log("No se pudo conectar con MongoDB.", err);
  });