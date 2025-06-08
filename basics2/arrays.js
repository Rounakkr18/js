//Array

const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman","spiderman"]
const myArr2 = new Array(1,2,3,4)

// console.log(myArr[0]);
// console.log(myArr2);

//Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift(9)

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))

const newArr = myArr.join()

// console.log(myArr);             // [ 0, 1, 2, 3, 4, 5 ]
// console.log(newArr);            // 0,1,2,3,4,5
// console.log(typeof(newArr));    // string


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)

console.log(myn2);
console.log("C ", myArr);


//output

/* 

A  [ 0, 1, 2, 3, 4, 5 ]
[ 1, 2 ]
B  [ 0, 1, 2, 3, 4, 5 ]
[ 1, 2, 3 ]
C  [ 0, 4, 5 ]

*/
