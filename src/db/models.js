// const db = require('./db');
// const { MovieSchema, MovieReviewSchema } = require('./Schema');

// const MovieDetail = db.model('MovieDetail', MovieSchema);
// const MovieReview = db.model('MovieReview', MovieReviewSchema);

// async function createMovie(movieData) {
//   try {
//     const result = await MovieDetail.create(movieData);
//     return result;
//   } catch(err) {
//     return err;
//   }
// }

// async function deleteMovie(movieId) {
//   try {
//     const result = await MovieDetail.deleteOne({ id : movieId });
//     return result;
//   } catch(err) {
//     return err;
//   }
// }

// async function getMovie(movieId) {
//   // find movie by id 
//   try {
//     const result = await MovieDetail.findOne({ id: movieId });
//     return result;
//   } catch(err) {
//     return err;
//   }
// }

// async function editMovie(movieId, section, text) {
//   //
//   try {
//     const result = await MovieDetail.findOneAndUpdate({ id: movieId }, {
//       [section]: text
//     }, { new: true });
//     return result;
//   } catch(err) {
//     return err;
//   }
// }

// async function createMovieReview(movieReviewData) {
//   try {
//     const result = await MovieReview.create(movieReviewData);
//     return result;
//   } catch(err) {
//     return err;
//   }
// }

// async function getMovieReview(reviewId) {
//   try {
//     const result = await MovieReview.findOne({ id: reviewId });
//     return result;
//   } catch(err) {
//     return err;
//   }
// }

// async function deleteMovieReview(reviewId) {
//   try {
//     const result = await MovieReview.deleteOne({id: reviewId });
//     return result;
//   } catch(err) {
//     return err;
//   }
// }

// module.exports = {
//   MovieDetail,
//   MovieReview,
//   createMovie,
//   deleteMovie,
//   getMovie,
//   editMovie,
//   getMovieReview,
//   createMovieReview,
//   deleteMovieReview,
// };