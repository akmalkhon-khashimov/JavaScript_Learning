// console.log("hibich");
// const answer=prompt("Ready?","");
// const conf=confirm("ready ?");
// const category = 'toys';
// console.log("https://someurl.com/"+category);
// const num = 4;
// console.log(`https://someurl.com/${category}/${num}`);
// console.log(5/2);
// &&||

const numberOfFilms = +prompt("how many movies have you watched ?","");

let moviedb = {
    count:numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i=0;i<numberOfFilms;i++){
    moviedb.movies[prompt("What is the name of the movie ?")] = +prompt("what rating would you give out of 5 ?");
}

for(;i<numberOfFilms;i++){
    document.write(moviedb.movies[i]);
}