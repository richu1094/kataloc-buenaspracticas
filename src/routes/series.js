const express = require("express");

const Serie_Detalles = require("../models/proyectoSeries_Detalles");
const Serie_Genero = require("../models/proyectoSeries_Genero");
const Serie_Toprated = require("../models/proyectoSeries_Toprated");
const Serie_Popular = require("../models/proyectoSeries_Popular");

const routerSeries = express.Router();

routerSeries.get("/series/detalles", async (req, res) => {
  try {
    const serie = await Serie_Detalles.find({}).select({ id: 1, name: 1 });
    res.json(serie);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ mensaje: err.message });
  }
});

routerSeries.get("/series/detalles/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const serie = await Serie_Detalles.find({ id: id }).select({
      id: 1,
      name: 1,
    });
    if (serie.length == 0) {
      res.status(404).send("La serie no existe");
    } else {
      res.json(serie);
    }
  } catch (err) {
    console.log(err.message);
    res.status(404).json({ mensaje: err.message });
  }
});

routerSeries.get("/series/genero", async (req, res) => {
  try {
    const serie = await Serie_Genero.find({});
    res.json(serie);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ mensaje: err.message });
  }
});

routerSeries.get("/series/toprated", async (req, res) => {
  try {
    const serie = await Serie_Toprated.find({});
    res.json(serie);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ mensaje: err.message });
  }
});

routerSeries.get("/series/toprated/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const serie = await Serie_Toprated.find({ page: id }).select({
      results: 1,
    });
    if (serie.length == 0) {
      res.status(404).send("La película no existe");
    } else {
      res.json(serie);
    }
  } catch (err) {
    console.log(err.message);
    res.status(404).json({ mensaje: err.message });
  }
});

routerSeries.get("/series/popular", async (req, res) => {
  try {
    const serie = await Serie_Popular.find({});
    res.json(serie);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ mensaje: err.message });
  }
});

routerSeries.get("/series/popular/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const serie = await Serie_Popular.find({ page: id }).select({ results: 1 });
    if (serie.length == 0) {
      res.status(404).send("La película no existe");
    } else {
      res.json(serie);
    }
  } catch (err) {
    console.log(err.message);
    res.status(404).json({ mensaje: err.message });
  }
});

module.exports = routerSeries;