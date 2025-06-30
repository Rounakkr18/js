function myName(){
    console.log("rounaks")
}
// myName()

// function addTwoNumbers(num1, num2){
//     console.log(num1+num2);
// }
// const result = addTwoNumbers(3,4)     // 7
// console.log("result: ",result);       // undefined


function addTwoNumbers(num1, num2){
    let result=num1+num2
    return result
}
// const result = addTwoNumbers(3,4)     
// console.log("result: ",result);       // 7


function loginUserMessage(username){
    if(username===undefined){
        console.log("please  enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())
