// routes/genres.js
const express = require("express");
const router = express.Router();

const {
  getGenres,
  getGenre,
  addGenre,
  updateGenre,
  deleteGenre,
} = require("../controllers/genre");

/* INSTRUCTION: setup the genre router here:
    - GET /genres: List all genres (public)
    - POST /genres: Add a new genre (staff or admin)
    - PUT /genres/:id: Update a genre (staff or admin)
    - DELETE /genres/:id: Delete a genre (admin only)
*/

router.get("/", async (req, res) => {
  try {
    const genres = await getGenres();
    res.status(200).send(genres);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

router.get("/:_id", async (req, res) => {
  try {
    const _id = req.params._id;
    const genre = await getGenre(_id);
    res.status(200).send(genre);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const name = req.body.name;

    const newGenre = await addGenre(name);
    res.status(200).send(newGenre);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

router.put("/:_id", async (req, res) => {
  try {
    const name = req.body.name;

    const updatedGenre = await updateGenre(_id, name);
    res.status(200).send(updatedGenre);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

router.delete("/:_id", async (req, res) => {
  try {
    const _id = req.params._id;
    await deleteGenre(_id);
    res.status(200).send({
      message: `Product with the id #${_id} has been succesfully deleted`,
    });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = router;
