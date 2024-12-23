const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/movieApp")
  .then(() => {
    console.log("Connection to database: Open");
  })
  .catch((err) => {
    console.log("Error:");
  });

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
  favourite: Boolean,
});

const Movie = mongoose.model("Movie", movieSchema);

const rpo = new Movie({ title: "Ready Player 1", year: 2018, score: 9.3, rating: "PG", favourite: true });
