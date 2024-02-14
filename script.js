let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {count: numberOfFilms, movies: {}, actors: {}, genres: [], privat: false};

let movie
let score
for (let i = 0; i < 2; i++){
    movie = prompt('Один из последних просмотренных фильмов', '')
    score = prompt('На сколько оцените его?', '')
    personalMovieDB.movies[movie] = score
}





console.log(personalMovieDB)