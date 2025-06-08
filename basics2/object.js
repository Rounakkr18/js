// singleton
// Object.create

// Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Rounak",
    "full name" : "rkm",
    [mySym]: "mykey1",
    age: 18,
    location: "Ranchi",
    email: "rounak@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser.mySym);   
// console.log(typeof JsUser[mySym]);   

JsUser.email = "rounak@gmail.com"
// Object.freeze(JsUser)                // values dosn't change after this
JsUser.email = "rounak@chat.com"      //not change
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`hello Js User, ${this.name}`);
}

// console.log(JsUser.greeting);        // [Function (anonymous)]
console.log(JsUser.greeting());        // hello Js User
console.log(JsUser.greetingTwo());  

