// Exercise 1: Get the array of all directors.

const getAllDirectors = (movies) =>  movies.map(movie => movie.director);
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
const getMoviesFromDirector = (movies,director) => movies.filter(movie => movie.director===director);
console.log(getMoviesFromDirector);
    /*function getMoviesFromDirector(movies, director) {
      return movies.filter(movie => movie.director===director);
    }*/


// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
      let filmsFromDirector = getMoviesFromDirector(movies,director);
      return filmsFromDirector.reduce((averageRate,film) => (averageRate + film.rate),0); 
}

// Exercise 4:  Alphabetic order by title 
const orderAlphabetically = movies => movies.sort

function orderAlphabetically(movies) {
  let alphabeticallyMovies =  movies.sort((a,b) =>{
    
    if (a.name < nameB){
      return -1;
    }
    if (a.name > b.name){
      return 1;
    }
    return 0;
  })
  let alphabeticallyMovies20 = alphabeticallyMovies.slice(0,20);
  let alphabeticallyMoviesName20 = alphabeticallyMovies20.map( movie => movie.name);
  return alphabeticallyMoviesName20;

}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

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
