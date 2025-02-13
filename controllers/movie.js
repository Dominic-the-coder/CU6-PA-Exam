/* 
    INSTRUCTION: setup movie controller functions here
    - getMovies: get all movies
    - getMovie: get a specific movie
    - createMovie: create a new movie
    - updateMovie: update a movie
    - deleteMovie: delete a movie
*/

const Movie = require("../models/movie");

const getMovies = async () => {
const movies = await Movie.find().populate("director").populate("genre");
  return movies;
};

const getMovie = async (_id) => {
  const movie = await Movie.findById(_id);
  return movie;
};

const addMovie = async (title, director, genre, releaseDate, description) => {
  const newMovie = new Movie({
    title,
    director,
    genre,
    releaseDate,
    description,
  });
  await newMovie.save();
  return newMovie;
};

const updateMovie = async (
  _id,
  title,
  director,
  genre,
  releaseDate,
  description
) => {
  const updatedMovie = await Movie.findByIdAndUpdate(
    _id,
    {
      title,
      director,
      genre,
      releaseDate,
      description,
    },
    { new: true }
  );
  return updatedMovie;
};

const deleteMovie = async (_id) => {
  return await Movie.findByIdAndDelete(_id);
};

module.exports = {
  getMovies,
  getMovie,
  addMovie,
  updateMovie,
  deleteMovie,
};
