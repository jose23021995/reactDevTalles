const myArray:(number|string)[]=[1,2,3,4,5,6,7,"8"];
// const myArray2=myArray;
//const myArray2=[...myArray];
const myArray2= structuredClone(myArray)

myArray2.push(9)
console.log({myArray,myArray2});

// for(const myNumber of myArray){
//     console.log(myNumber+10);
// }

// push ==> empujar