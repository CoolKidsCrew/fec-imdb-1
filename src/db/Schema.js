// const db = require('./db');
// const Schema = db.Schema;

// const MovieSchema = new Schema({
//   // id: Number,
//   id: {
//     type: Number,
//     unique: true,
//   },
//   title: String,
//   cast: Array,
//   photos: Array,
//   // STORY LINE
//   storyline: String,
//   plotKeyWords: Array,
//   taglines: String,
//   genres: Array,
//   movieRating: String,
//   mpaa: String,
//   // DETAILS
//   officialSites: Array,
//   country: String,
//   languages: Array,
//   releaseDate: String,
//   aKa: String,
//   filmingLocations: Array,
//   // BOX OFFICE
//   budget: String,
//   openingWeekend: String,
//   gross: String,
//   cumulative: String,
//   // CREDITS
//   productionCo: Array,
//   runtime: String,
//   soundMix: String,
//   color: String,
//   aspectRatio: String,
//   // DID YOU KNOW
//   trivia: String,
//   goofs: String,
//   quotes: String,
//   crazyCredits: String, 
//   connections: String,
//   soundtracks: Array,
//   faq: Array,
// });

// const MovieReviewSchema = new Schema({
//   id: { type: Number, unique: true },
//   movie_title: String,
//   reviewer: String,
//   review_title: String,
//   review: String,
//   review_date: String,
//   reviews_number: Number,
//   review_viewers: Number,
//   review_likes: Number,
//   review_average: Number
// });

// module.exports = {
//   MovieSchema,
//   MovieReviewSchema,
// };