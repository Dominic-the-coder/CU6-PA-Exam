/* 
    INSTRUCTION: setup director controller functions here
    - getDirectors: get all directors
    - getDirector: get a specific director
    - createDirector: create a new director
    - updateDirector: update a director
    - deleteDirector: delete a director
*/

const Director = require("../models/director");

const getDirectors = async () => {
  const directors = await Director.find();
  return directors;
};

const getDirector = async (_id) => {
  const director = await Director.findById(_id);
  return director;
};

const addDirector = async (name, bio, contact, movieDirected) => {
  const newDirector = new Director({
    name,
    bio,
    contact,
    movieDirected,
  });
  await newDirector.save();
  return newDirector;
};

const updateDirector = async (_id, name, bio, contact, movieDirected) => {
  const updatedDirector = await Director.findByIdAndUpdate(
    _id,
    {
      name,
      bio,
      contact,
      movieDirected,
    },
    { new: true }
  );
  return updatedDirector;
};

const deleteDirector = async (_id) => {
  return await Director.findByIdAndDelete(_id);
};

module.exports = {
  getDirectors,
  getDirector,
  addDirector,
  updateDirector,
  deleteDirector,
};
