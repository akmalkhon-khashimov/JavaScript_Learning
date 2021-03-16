// console.log("hibich");
// const answer=prompt("Ready?","");
// const conf=confirm("ready ?");
// const category = 'toys';
// console.log("https://someurl.com/"+category);
// const num = 4;
// console.log(`https://someurl.com/${category}/${num}`);
// console.log(5/2);
// &&||

// const numberOfFilms = +prompt("how many movies have you watched ?","");

// let moviedb = {
//     count:numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for(let i=0;i<numberOfFilms;i++){
//     let k=prompt("What is the name of the movie ?");
//     let m = +prompt("what rating would you give out of 5 ?");
//     moviedb.movies[k] = m;
// }

// for(let i ;i<numberOfFilms;i++){
//     document.write(moviedb.movies[i]);
// }

//conditionals
// if (1>2){
//     console.log("1>2");
// }
// else if (2<3){
//     console.log("2<3");
// }
// else {
//     console.log("other one");
// }
// let num = "25";
// //ternary operator
// (num===25)? console.log("true statement goes here"):console.log("false statement goes here");
// //switch case
// switch(num){
//     //strict comparison in switch
//     case 49:
//         console.log("my 49");
//         break;
//     case 25:
//         console.log("25 yes");
//         break;
//     default:
//         console.log("default case activated");
//         break;
// }
// //loops
// let k = 0;
// while (true){
//     if(k++ == 43){
//         break;
//     }
//     console.log(k);
// }

// for(let i = 0;i<10;i++){
//     if(i==5){
//         continue;
//     }
//     if( i == 8){
//         break;
//     }
// } 

// let obj={a:1,b:2,c:3};

// for (let key in obj){
//     // for IN is used for OBJECTS
// }

// let array = [];
// for (let element of array){
// //for OF is used for arrays
// }

// array.forEach(element => {
    
// });
// //function is passed;

//FUNCTIONS 
let num =30;
function showFirstMessage(text){
    console.log(text);
    let num = 20;     
    console.log(num);
}

 showFirstMessage("my first one!");
 console.log();