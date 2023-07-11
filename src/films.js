// Exercise 1: Get the array of all directors.
const getAllDirectors = (movies) => movies.map(movie => movie.director);

// Exercise 2: Get the films of a certain director
const getMoviesFromDirector = (movies, director) => movies.filter(movie => movie.director === director);

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
  let moviesByGenreWithScore = movies.filter(movie => ([...movie.genre].includes(genre) && movie.score != ""));
  return moviesAverage(moviesByGenreWithScore);
}


// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {

  let moviesCopy = movies.map(movie => {
    return {
      title: movie.title,
      year: movie.title,
      director: movie.director,
      duration: calcMin(movie),
      genre: movie.genre,
      score: movie.score,
    }
  });

  return moviesCopy;
}

function calcMin(movie) {

  let hour = parseInt(movie.duration.charAt(0, movie.duration.indexOf("h")));
  let min = parseInt(movie.duration.substring((movie.duration.indexOf("min") - 2), movie.duration.indexOf("min")));

  if (isNaN(hour)) {
    hour = 0;
  } else if (isNaN(min)) {
    min = 0;
  }

  let totalMin = min + hour * 60;
  console.log(totalMin);
  return totalMin;
}

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
