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
// const rpo = new Movie({
//   title: "Ready Player 1",
//   year: 2018,
//   score: 9.6,
//   rating: "PG",
//   favourite: true,
// });

// Movie.insertMany([
//   { title: "Jaws", year: 2018, score: 8.3, rating: "PG", favourite: false },
//   {
//     title: "Back to the Future",
//     year: 2018,
//     score: 9.7,
//     rating: "U",
//     favourite: true,
//   },
//   {
//     title: "Saving Private Ryan",
//     year: 2018,
//     score: 7.1,
//     rating: "18",
//     favourite: false,
//   },
//   {
//     title: "Ghostbusters",
//     year: 2018,
//     score: 6.7,
//     rating: "PG",
//     favourite: false,
//   },
//   {
//     title: "Raders of the Lost Ark",
//     year: 2018,
//     score: 9.9,
//     rating: "PG",
//     favourite: true,
//   },
// ])
//   .then((data) => {
//     console.log("Saved");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Error:");
//   });

Movie.find({ rating: "18" }).then((data) => console.log(data));
