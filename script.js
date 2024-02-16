// let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let numberOfFilms






function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }

} 

// start()

let personalMovieDB = {count: numberOfFilms, movies: {}, actors: {}, genres: [], privat: false};

// let movie;
// let score;
// let i = 0

// while (i === 0){
//     for (let i = 0; i < 2; i++){
//         const movie = prompt('Один из последних просмотренных фильмов', '')
//         const score = prompt('На сколько оцените его?', '')
//     }
//     if (movie.length > 0 && movie.length < 50){
//         personalMovieDB.movies[movie] = score 
//         break
//     }
    
// }


  
    // for (let i = 0; i < 2; i++){
    //     const movie = prompt('Один из последних просмотренных фильмов', '')
    //     const score = prompt('На сколько оцените его?', '')
    //     if (movie != null && score != null && movie != '' && score != '' && movie.length < 50){
    //         personalMovieDB.movies[movie] = score
    //         console.log("done")
    //     }
    //     else {
    //         i = i - 1
    //     }  
    // }


    // for (let i = 0; i < 2; i++){
    //     const movie = prompt('Один из последних просмотренных фильмов', '')
    //     const score = prompt('На сколько оцените его?', '')
    //     if (movie != null && score != null && movie != '' && score != '' && movie.length < 50){
    //         personalMovieDB.movies[movie] = score
    //         console.log("done")
    //     }
    //     else {
    //         i = i - 1
    //     }  
    // }


    function sayLastMovie(){
       let i = 0
    

    while (i < 2){
        const movie = prompt('Один из последних просмотренных фильмов', '')
        const score = prompt('На сколько оцените его?', '') 
        i++
        console.log(i)
        if (movie != null && score != null && movie != '' && score != '' && movie.length < 50){
            personalMovieDB.movies[movie] = score
            console.log("done")
        }
        else {
            i = i - 1
            console.log(i)
        }
    } 
    }

    // sayLastMovie()
    
        
    
    function setLevel(){
       if (personalMovieDB.count < 10){
        alert("Malo")
    } 
    else if (personalMovieDB.count < 30){
        alert("Zritel")
    }
    else if (personalMovieDB.count >= 30) {
        alert("ogo!")
    }
    else {
        alert("error")
    } 
    }
    
    
// setLevel();

console.log(personalMovieDB)

function showMyDB(hidden){
    if (!hidden){
        console.log(personalMovieDB)
    }
}

// showMyDB(personalMovieDB.privat)

let genre 
function writeYourGenres(){
    let count = 1
    // let num = 1
    while (count <= 3){
        genre =  prompt(`Назовите ваш любимый жанр номер ${count}`) 
        personalMovieDB.genres[count-1] = genre
        count++
        // num++

        if (genre === '' || genre === null || isNaN(genre) === false){
            console.log(isNaN(genre))
            count--
            // num--
        }
    }
    console.log(personalMovieDB)
}

writeYourGenres()