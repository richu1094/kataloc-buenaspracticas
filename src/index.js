const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

//Variables de entorno
require("dotenv").config();
const peliculasRouter = require("./routes/peliculas.js");
const seriesRouter = require("./routes/series.js");
const path = require("path");

//Swagger
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Kataloc API",
      version: "1.0.0",
      description: "API para el proyecto Kataloc",
    },
    servers: [
      {
        url: "https://kataloc-swagger.herokuapp.com",
        description: "Heroku server",
      },
      { url: "http://localhost:3000", description: "Local server" },
    ],
  },
  apis: [`${path.join(__dirname, "./routes/*.js")}`],
};

//Settings
const app = express();
const port = process.env.PORT || 3000;

//Middleware
app.use(
  cors({
    origin: "*",
  })
);
app.use(morgan("tiny"));
app.use(express.json());
app.use("/api", peliculasRouter);
app.use("/api", seriesRouter);
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(swaggerSpec)));

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