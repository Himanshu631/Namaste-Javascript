const myArr = [0,1,2,3,4];

const geNnewArr = new Array(1,2,3,4);

//myArr.forEach((item, index) => {
//    console.log(item, index);
//});

myArr.push(5);

//console.log(myArr);
const newArr = myArr.join();

//console.log(myArr);
//console.log(typeof newArr);

// slice and splice

console.log("A ",myArr);
console.log("B ",myArr.slice(1,3))
console.log("C ",myArr.splice(1,3))
console.log("D ",myArr)
