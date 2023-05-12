const express = require("express");

const Pelicula_Detalles = require("../models/proyectoPeliculas_Detalles");
const Pelicula_Genero = require("../models/proyectoPeliculas_Genero");
const Pelicula_Toprated = require("../models/proyectoPeliculas_Toprated");
const Pelicula_Popular = require("../models/proyectoPeliculas_Popular");

const router = express.Router();

router.get("/peliculas/detalles", async (req, res) => {
  try {
    const pelicula = await Pelicula_Detalles.find({}).select({ id: 1, original_title:1 });
    res.json(pelicula);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ mensaje: err.message });
  }
});

router.get("/peliculas/detalles/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const pelicula = await Pelicula_Detalles.find({ id: id }).select({ id: 1, original_title:1 });
    if (pelicula.length == 0) {
      res.status(404).send("La película no existe");
    } else {
      res.json(pelicula);
    }
  } catch (err) {
    console.log(err.message);
    res.status(404).json({ mensaje: err.message });
  }
});

router.get("/peliculas/genero", async (req, res) => {
  try {
    const pelicula = await Pelicula_Genero.find({});
    res.json(pelicula);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ mensaje: err.message });
  }
});

router.get("/peliculas/toprated", async (req, res) => {
  try {
    const pelicula = await Pelicula_Toprated.find({});
    res.json(pelicula);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ mensaje: err.message });
  }
});

router.get("/peliculas/toprated/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const pelicula = await Pelicula_Toprated.find({ page: id }).select({ results:1 });
    if (pelicula.length == 0) {
      res.status(404).send("La película no existe");
    } else {
      res.json(pelicula);
    }
  } catch (err) {
    console.log(err.message);
    res.status(404).json({ mensaje: err.message });
  }
});

router.get("/peliculas/popular", async (req, res) => {
  try {
    const pelicula = await Pelicula_Popular.find({});
    res.json(pelicula);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ mensaje: err.message });
  }
});

router.get("/peliculas/popular/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const pelicula = await Pelicula_Popular.find({ page: id }).select({ results:1 });
    if (pelicula.length == 0) {
      res.status(404).send("La película no existe");
    } else {
      res.json(pelicula);
    }
  } catch (err) {
    console.log(err.message);
    res.status(404).json({ mensaje: err.message });
  }
});

module.exports = router;