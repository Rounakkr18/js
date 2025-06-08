const marvel = ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

marvel.push(dc)
// console.log(marvel);     // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

const all = marvel.concat(dc)
// console.log(all);               // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new = [...marvel, ...dc]
// console.log(all_new);                // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_arr = [1,2,3, [4,5,6], 7, [6,7, [4,5]]]
const new_another = another_arr.flat(Infinity)             // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4,5]
// const new_another = another_arr.flat(0)                 // [ 1, 2, 3, [ 4, 5, 6 ], 7, [ 6, 7, [ 4, 5 ] ] ]
// const new_another = another_arr.flat(1)                 // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]
// const new_another = another_arr.flat(2)                 // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4,5]
// console.log(new_another);


console.log(Array.isArray("rounak"))         // false
console.log(Array.from("rounak"))            // [ 'r', 'o', 'u', 'n', 'a', 'k' ]
console.log(Array.from({name: "rounak"}))    // []

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1, score2, score3))    // [ 100, 200, 300 ]