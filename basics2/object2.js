const tinderUser = new Object()      // singleton declaration
// const tinderUser = {}             //non singleton
// console.log(tinderUser);       // {}

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false
// console.log(tinderUser);            // { id: '123abc', name: 'sam', isLoggedIn: false }

const regularUser = {
    email: "rounak@gmail.com",
    fullname: {
        userfullname: {
            firstname: "rounak",
            lastname: "manjhi"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)              // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
const obj3 = {...obj1, ...obj2}                            // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj3);

console.log(Object.keys(tinderUser));    // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));     // [ '123abc', 'sam', false ]
console.log(Object.entries(tinderUser));     // [ [ 'id', '123abc' ], [ 'name', 'sam' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));     // true
