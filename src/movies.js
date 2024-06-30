// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    let nuevoArrayDeDirectores = moviesArray.map( (cadaElemento) => {
        // console.log(cadaElemento)
        // receives an array of movies as an argument and returns a new (mapped) array.
        return cadaElemento.director
    })
    return nuevoArrayDeDirectores
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    // receives an array as a parameter and filter 👀 the array so we can have only the drama movies 
    // where Steven Spielberg is the director.
    
    if (moviesArray.length === 0){
        return 0
    }
    let nuevoArrayDeFiltroDirector = moviesArray.filter((cadaElemento) => {
        return cadaElemento.director === 'Steven Spielberg' && cadaElemento.genre.includes("Drama");
    });

    return nuevoArrayDeFiltroDirector.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
   // want to know the average score of all of them and display it on the console
    if(moviesArray.length === 0){
        return 0
    }
    let scoreMovies = moviesArray.reduce((acc, elementoPeli) => {
        if(!elementoPeli.score){
            elementoPeli.score = 0;
        }
         return acc + elementoPeli.score;
    }, 0);
    return Math.round((scoreMovies / moviesArray.length) * 100) / 100

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
