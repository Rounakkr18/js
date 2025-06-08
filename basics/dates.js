let myDate = new Date()
// console.log(myDate);                      //2025-06-08T15:53:10.613Z
// console.log(myDate.toString());           //Sun Jun 08 2025 15:53:10 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());       //Sun Jun 08 2025
// console.log(myDate.toLocaleString());     //6/8/2025, 3:53:10 PM
// console.log(typeof(myDate));              //object

// let myCreatedDate = new Date(2025,0,23)
// console.log(myCreatedDate.toDateString());   // Thu Jan 23 2025

// let myCreatedDate = new Date(2025,0,23,2,4,3)
// console.log(myCreatedDate.toLocaleString());   // 1/23/2025, 2:04:03 AM

let myCreatedDate = new Date("2025-01-14")
// console.log(myCreatedDate.toLocaleString());     // 1/14/2025, 12:00:00 AM

let myTimeStamp = Date.now()
// console.log(myTimeStamp);                    // 1749398755593
// console.log(myCreatedDate.getTime());        // 1736812800000

// console.log(Math.floor(Date.now()/1000));       // in second - 1749398896


let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getMonth());
 

newDate.toLocaleString('default',{
    weekday: "long",
})