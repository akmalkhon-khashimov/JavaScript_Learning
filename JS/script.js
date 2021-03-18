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
// (num===25)? console.log("true statement goes here")
// :console.log("false statement goes here");
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
// let num =30;
// function showFirstMessage(text){
//     console.log(text);
//     let num = 20;     
//     console.log(num);
// }

//  showFirstMessage("my first one!");
//  console.log(num);
// //function expressions
// let abc = function(text){
//     console.log(`Halo, ${text}`);
// };
// abc("Jason");

// const sum = (a,b) => a+b;
// const exp = a => a*a;
// let b = exp(10);
// console.log(b);
// const discriminant = (a,b,c) => {
//   return b*b-4*a*c;
// };

//string and array methods
// for string you cannot change the value by []
// const str = "some Fruit" ; 
// const arr = [1,2,4];

// console.log(str[2]="d");
// console.log(arr[2]=3);
// console.log(str);
// console.log(arr);
// console.log(arr.length);

// console.log(str.indexOf("t"));
// console.log(str.slice(str.indexOf("t")));
// console.log(str.substring(1,3))
// console.log(str.substr(6,5));
// const num =12.2;
// console.log(Math.round(num));
// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));

// const moviesDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function start(){
//     do{
//         moviesDB.count = +prompt("How many movies have you watched ?");
//     }while(moviesDB.count == ''||
//     moviesDB.count ==null||isNaN(moviesDB.count)||moviesDB.count == false);
// }
// function rememberMovies() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt("Name a movie:", ""),
//             b = prompt("Rate it pls(0-10)", "");
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             moviesDB.movies[a] = b;
//             console.log('done!');
//         } else {
//             console.log('error!');
//         }
//         }
// }
// rememberMovies();

// function determineType(){
//     if(moviesDB.count < 10){
//         console.log("Amateur");
//     }
//     else if(moviesDB.count<30){
//         console.log("Classic");
//     }
//     else if (moviesDB.count > 30){
//         console.log("movie lover");
//     }
//     else{
//         console.log("Error happened");
//     }
// }

// determineType();

// function showMyDB(privacy){
//     if(!privacy){
//         console.log(moviesDB);
//     }
// }
// showMyDB(moviesDB.privat);

// function writeGenres(){
//     for(let i = 1;i<=3;i++){
//         const genre = prompt(`Your favourite genre number ${i}`,"");
//         moviesDB.genres[i-1]=genre;
//     }
// }

//callback functions
// function first(){
//     //dosmth
//     setTimeout(function(){
//         console.log(1);
//     },1);
// }
// function second(){
//     console.log(2);
// }
// first();
// second();

// function tret(lang,callback){
//     console.log(`Like a light ${lang}`);
//     callback();
// }

// tret("Ohmygod",first);
//Basically, just to make sure that the function 
// runs in the order it is supposed to
// function quatro(f1,f2){
//     f1();
//     f2();
// }
// quatro(first,second);
//so even if you do like this,it's not gonna work
//you're gonna have to do smth like this:
// function funf(f3){
//     setTimeout(function(){
//         console.log(1);
//     },500);
//     f3();
// }
// funf(second);
const car = {
    name:"",
    length: 0,
    width: 0,
    height: 0,
    producer: "",
    colors: {
        border: "",
        background:""
    }
};
// console.log(car.name);

// delete car.name;

// console.log(car);

// for(let key in car){
//     console.log(`What's that ? It's ${key}`);
//     console.log(`and it's value is ${car[key]}`);
// }
// for( let key in car){
//     if(typeof(car[key])==='object'){
//         for(let i in car[key]){
//             console.log(`The ${key} has value ${car[key][i]}`);
//         }
//     }
//     else{
//         console.log(`The ${key} has value ${car[key]}`);
//     }
// }
console.log(car[name];)