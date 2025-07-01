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

// console.log(loginUserMessage())


function calculateCarPrice(...num){
    return num;
}

// console.log(calculateCarPrice(200,300,400))


const user = {
    username:"rounak",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
handleObject({
    username:"sam",
    price:399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));