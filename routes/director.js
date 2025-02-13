// routes/directors.js
const express = require("express");
const router = express.Router();

const {
  getDirectors,
  getDirector,
  addDirector,
  updateDirector,
  deleteDirector,
} = require("../controllers/director");

/* 
    INSTRUCTION: setup the director router here:
    - GET /directors: List all directors (public)
    - GET /directors/:id: Get a specific director by its id (public)
    - POST /directors: Add a new director (staff or admin)
    - PUT /directors/:id: Update a director (staff or admin)
    - DELETE /directors/:id: Delete a director (admin only)
*/

router.get("/", async (req, res) => {
  try {
    const directors = await getDirectors();
    res.status(200).send(directors);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

router.get("/:_id", async (req, res) => {
  try {
    const _id = req.params._id;
    const director = await getDirector(_id);
    res.status(200).send(director);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const name = req.body.name;
    const bio = req.body.bio;
    const contact = req.body.contact;
    const movieDirected = req.body.movieDirected;

    const newDirector = await addDirector(name, bio, contact, movieDirected);
    res.status(200).send(newDirector);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

router.put("/:_id", async (req, res) => {
  try {
    const _id = req.params._id;
    const name = req.body.name;
    const bio = req.body.bio;
    const contact = req.body.contact;
    const movieDirected = req.body.movieDirected;

    const updatedDirector = await updateDirector(
      _id,
      name,
      bio,
      contact,
      movieDirected
    );
    res.status(200).send(updatedDirector);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

router.delete("/:_id", async (req, res) => {
  try {
    const _id = req.params._id;
    await deleteDirector(_id);
    res.status(200).send({
      message: `Product with the id #${_id} has been succesfully deleted`,
    });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = router;
