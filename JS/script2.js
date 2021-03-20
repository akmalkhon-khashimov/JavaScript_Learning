// "use strict";

const arr = [1,2,3,4];

arr.pop();
console.log(arr);
arr.push(10);
console.log(arr);

// for( let i =0; i<arr.length; i++){
//     console.log(arr[i]);
// }
// arr[99]=0;
// //map,set,array,string
// for( let elem of arr){
//     console.log(arr[elem]);
// }
arr.forEach(function(item,ilen,arr){
    console.log(`${ilen}:`);
},);