// routes/movies.js
const express = require("express");
const router = express.Router();

const {
  getMovies,
  getMovie,
  addMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movie");

/* 
    INSTRUCTION: setup the movie router here:
    - GET /movies: List all movies (public)
    - GET /movies/:id: Get a specific movie by its id (public)
    - POST /movies: Add a new movie (staff or admin)
    - PUT /movies/:id: Update a movie (staff or admin)
    - DELETE /movies/:id: Delete a movie (admin only)
*/

router.get("/", async (req, res) => {
  try {
    const movies = await getMovies();
    res.status(200).send(movies);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

router.get("/:_id", async (req, res) => {
  try {
    const _id = req.params._id;
    const movie = await getMovie(_id);
    res.status(200).send(movie);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const title = req.body.title;
    const director = req.body.director;
    const genre = req.body.genre;
    const releaseDate = req.body.releaseDate;
    const description = req.body.description;

    const newMovie = await addMovie(
      title,
      director,
      genre,
      releaseDate,
      description
    );
    res.status(200).send(newMovie);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

router.put("/:_id", async (req, res) => {
  try {
    const _id = req.params._id;
    const title = req.body.title;
    const director = req.body.director;
    const genre = req.body.genre;
    const releaseDate = req.body.releaseDate;
    const description = req.body.description;

    const updatedMovie = await updateMovie(
      _id,
      title,
      director,
      genre,
      releaseDate,
      description
    );
    res.status(200).send(updatedMovie);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

router.delete("/:_id", async (req, res) => {
  try {
    const _id = req.params._id;
    await deleteMovie(_id);
    res.status(200).send({
      message: `Product with the id #${_id} has been succesfully deleted`,
    });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = router;
