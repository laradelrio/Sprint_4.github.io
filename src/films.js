// Exercise 1: Get the array of all directors.
const getAllDirectors = (movies) => movies.map(movie => movie.director);
console.log(getAllDirectors);

/*function getAllDirectors(movies){
  return movies.map(movie => movie.director);
}
*/

/*function getAllDirectors(array) {
  let result =  ???;
  console.log("EXERCICE 1 ->", result);
  return result;
}*/

// Exercise 2: Get the films of a certain director
const getMoviesFromDirector = (movies, director) => movies.filter(movie => movie.director === director);
console.log(getMoviesFromDirector);
/*function getMoviesFromDirector(movies, director) {
  return movies.filter(movie => movie.director===director);
}*/


// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  let filmsFromDirector = getMoviesFromDirector(movies, director);
  return moviesAverage(filmsFromDirector);

}
function moviesAverage(specificMovies) {
  let sumRates = specificMovies.reduce((accumulator, film) => accumulator + film.score, 0);
  return Math.round(((sumRates / specificMovies.length) + Number.EPSILON) * 100) / 100;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  let movieList = [...movies];
  let alphabeticallyMovies = movieList.sort((a, b) => {

    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });

  let alphabeticallyMovies20 = alphabeticallyMovies.slice(0, 20);
  let alphabeticallyMoviesName20 = alphabeticallyMovies20.map(movie => movie.title);
  return alphabeticallyMoviesName20;
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  let movieList = [...movies];
  return movieList.sort((a, b) => {
    //sorts by year
    if (a.year < b.year) {
      return -1;
    }
    if (a.year > b.year) {
      return 1;
    }
    //if year the same, sorts bu title
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }

    return 0;
  });


}
// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
  // get moveis form catefory - then call movies average()
  let moviesByGenreWithScore = movies.filter(movie => ([...movie.genre].includes(genre) && movie.score != ""));
  return moviesAverage(moviesByGenreWithScore);
}


// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
