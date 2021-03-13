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
    let k=prompt("What is the name of the movie ?");
    let m = +prompt("what rating would you give out of 5 ?");
    moviedb.movies[k] = m;
}

for(let i ;i<numberOfFilms;i++){
    document.write(moviedb.movies[i]);
}