const express = require("express");

const Pelicula_Detalles = require("../models/proyectoPeliculas_Detalles");
const Pelicula_Creditos = require("../models/proyectoPeliculas_Creditos");
const Pelicula_Videos = require("../models/proyectoPeliculas_Videos");
const Pelicula_Providers = require("../models/proyectoPeliculas_Providers");
const Pelicula_Genero = require("../models/proyectoPeliculas_Genero");
const Pelicula_Toprated = require("../models/proyectoPeliculas_Toprated");
const Pelicula_Popular = require("../models/proyectoPeliculas_Popular");

const router = express.Router();

/**
 * @swagger
 * /api/peliculas/detalles:
 *  get:
 *     summary: Obtener detalles de todas las películas
 *     tags: [Detalles]
 *     responses:
 *       '200':
 *        description: La solicitud ha tenido éxito
 *       '500':
 *        description: Error del servidor
 */

router.get("/peliculas/detalles", async (req, res) => {
  try {
    const pelicula = await Pelicula_Detalles.find({}).select({
      id: 1,
      original_title: 1,
    });
    res.status(200).json(pelicula);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ mensaje: err.message });
  }
});

/**
 * @swagger
 * /api/peliculas/detalles/{id}:
 *   get:
 *     summary: Obtener detalles de una película
 *     tags: [Detalles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: El ID de la película
 *     responses:
 *       '200':
 *        description: La solicitud ha tenido éxito
 *       '404':
 *        description: La película no existe
 *       '500':
 *        description: Error del servidor
 */

router.get("/peliculas/detalles/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const pelicula = await Pelicula_Detalles.find({ id: id });
    if (pelicula.length == 0) {
      res.status(404).send("La película no existe");
    } else {
      res.status(200).json(pelicula);
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ mensaje: "Error del servidor"});
  }
});

/**
 * @swagger
 * /api/peliculas/detalles/buscar/{nombre}:
 *   get:
 *     summary: Buscar detalles de una película
 *     tags: [Buscar]
 *     parameters:
 *       - in: path
 *         name: nombre
 *         schema:
 *           type: string
 *         required: true
 *         description: El nombre de la película
 *     responses:
 *       '200':
 *        description: La solicitud ha tenido éxito
 *       '404':
 *        description: La película no existe
 *       '500':
 *        description: Error del servidor
 */

router.get("/peliculas/detalles/buscar/:nombre", async (req, res) => {
  try {
    const { nombre } = req.params;
    const pelicula = await Pelicula_Detalles.find({
      original_title: { $regex: nombre, $options: "i" },
    });
    if (pelicula.length == 0) {
      res.status(404).send("La película no existe");
    } else {
      res.status(200).json(pelicula);
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ mensaje: "Error del servidor"});
  }
});

/**
 * @swagger
 * /api/peliculas/toprated:
 *  get:
 *     summary: Obtener peliculas top-rated
 *     tags: [Mejores Calificadas]
 *     responses:
 *      '200':
 *       description: La solicitud ha tenido éxito
 *      '500':
 *       description: Error del servidor
 */
router.get("/peliculas/toprated", async (req, res) => {
  try {
    const pelicula = await Pelicula_Toprated.find({});
    res.status(200).json(pelicula);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ mensaje: err.message });
  }
});

/**
 * @swagger
 * /api/peliculas/toprated/{id}:
 *   get:
 *     summary: Obtener una película top-rated
 *     tags: [Mejores Calificadas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: El ID de la película top-rated
 *     responses:
 *       '200':
 *        description: La solicitud ha tenido éxito
 *       '404':
 *        description: La película no existe
 *       '500':
 *        description: Error del servidor
 */

router.get("/peliculas/toprated/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const pelicula = await Pelicula_Toprated.find({ page: id });
    if (pelicula.length == 0) {
      res.status(404).send("La película no existe");
    } else {
      res.status(200).json(pelicula);
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ mensaje: "Error del servidor"});
  }
});

/**
 * @swagger
 * /api/peliculas/popular:
 *  get:
 *     summary: Obtener peliculas populares
 *     tags: [Populares]
 *     responses:
 *       '200':
 *        description: La solicitud ha tenido éxito
 *       '500':
 *        description: Error del servidor
 */

router.get("/peliculas/popular", async (req, res) => {
  try {
    const pelicula = await Pelicula_Popular.find({});
    res.status(200).json(pelicula);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ mensaje: err.message });
  }
});

/**
 * @swagger
 * /api/peliculas/popular/{id}:
 *   get:
 *     summary: Obtener una película popular
 *     tags: [Populares]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: El ID de la película popular
 *     responses:
 *       '200':
 *        description: La solicitud ha tenido éxito
 *       '404':
 *        description: La película no existe
 *       '500':
 *        description: Error del servidor
 */

router.get("/peliculas/popular/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const pelicula = await Pelicula_Popular.find({ page: id });
    if (pelicula.length == 0) {
      res.status(404).send("La película no existe");
    } else {
      res.status(200).json(pelicula);
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ mensaje: "Error del servidor"});
  }
});

/**
 * @swagger
 * /api/peliculas/creditos:
 *  get:
 *     summary: Obtener créditos de todas las películas
 *     tags: [Créditos]
 *     responses:
 *       '200':
 *        description: La solicitud ha tenido éxito
 *       '500':
 *        description: Error del servidor
 */

router.get("/peliculas/creditos", async (req, res) => {
  try {
    const pelicula = await Pelicula_Creditos.find({}).select({
      id: 1,
      original_title: 1,
    });
    res.status(200).json(pelicula);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ mensaje: err.message });
  }
});

/**
 * @swagger
 * /api/peliculas/creditos/{id}:
 *   get:
 *     summary: Obtener créditos de una película
 *     tags: [Créditos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: El ID de la película
 *     responses:
 *       '200':
 *         description: OK
 *       '404':
 *         description: La película no existe
 *       '500':
 *         description: Error del servidor
 */

router.get("/peliculas/creditos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const pelicula = await Pelicula_Creditos.find({ id: id });
    if (pelicula.length == 0) {
      res.status(404).send("La película no existe");
    } else {
      res.status(200).json(pelicula);
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ mensaje: "Error del servidor"});
  }
});

/**
 * @swagger
 * /api/peliculas/providers:
 *  get:
 *     summary: Obtener proveedores de todas las películas
 *     tags: [Providers]
 *     responses:
 *       '200':
 *        description: La solicitud ha tenido éxito
 *       '500':
 *        description: Error del servidor
 */

router.get("/peliculas/providers", async (req, res) => {
  try {
    const pelicula = await Pelicula_Providers.find({}).select({
      id: 1,
    });
    res.status(200).json(pelicula);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ mensaje: err.message });
  }
});

/**
 * @swagger
 * /api/peliculas/providers/{id}:
 *   get:
 *     summary: Obtener proveedores de una película
 *     tags: [Providers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: El ID de la película
 *     responses:
 *       '200':
 *         description: La solicitud ha tenido éxito
 *       '404':
 *         description: La película no existe
 *       '500':
 *        description: Error del servidor
 */

router.get("/peliculas/providers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const pelicula = await Pelicula_Providers.find({ id: id });
    if (pelicula.length == 0) {
      res.status(404).send("La película no existe");
    } else {
      res.status(200).json(pelicula);
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ mensaje: "Error del servidor"});
  }
});

/**
 * @swagger
 * /api/peliculas/videos:
 *  get:
 *     summary: Obtener vídeos de todas las películas
 *     tags: [Videos]
 *     responses:
 *       '200':
 *        description: La solicitud ha tenido éxito
 *       '500':
 *        description: Error del servidor
 */

router.get("/peliculas/videos", async (req, res) => {
  try {
    const pelicula = await Pelicula_Videos.find({}).select({
      id: 1,
    });
    res.status(200).json(pelicula);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ mensaje: err.message });
  }
});

/**
 * @swagger
 * /api/peliculas/videos/{id}:
 *   get:
 *     summary: Obtener vídeos de una película
 *     tags: [Videos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: El ID de la película
 *     responses:
 *       '200':
 *        description: OK
 *       '404':
 *        description: La película no existe
 *       '500':
 *        description: Error del servidor
 */

router.get("/peliculas/videos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const pelicula = await Pelicula_Videos.find({ id: id });
    if (pelicula.length == 0) {
      res.status(404).send("La película no existe");
    } else {
      res.status(200).json(pelicula);
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ mensaje: "Error del servidor"});
  }
});

/**
 * @swagger
 * /api/peliculas/genero:
 *  get:
 *     summary: Obtener género de peliculas
 *     tags: [Género]
 *     responses:
 *       '200':
 *        description: OK
 *       '500':
 *        description: Error del servidor
 */
router.get("/peliculas/genero", async (req, res) => {
  try {
    const pelicula = await Pelicula_Genero.find({});
    res.status(200).json(pelicula);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ mensaje: err.message });
  }
});

module.exports = router;