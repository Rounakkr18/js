const user={
    username:"rounak",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     console.log(this);
// }
// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai = () => {
    let username = "hitesh"
    console.log(this.username);
}
// chai()


// const add=(num1, num2) => {
//     return num1+num2
// }

// const add=(num1, num2) =>  num1+num2
// const add=(num1, num2) =>  (num1+num2)
const add=(num1, num2) => ( {username : "rounak"})

console.log(add(3,4));

