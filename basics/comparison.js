console.log(2>1);

console.log("2">1);   //js automatically convert "2" to number

console.log(null>0);   //false
console.log(null==0);  //false
console.log(null>=0);  //true  (comparison operator convert null to a number, treating it as 0 => (0>=0)-true)


console.log(undefined==0);   //false
console.log(undefined<0);    //false
console.log(undefined>0);    //false


// === (strict check) - check datatype also
console.log("2"==2);   //true
console.log("2"===2);   //false

