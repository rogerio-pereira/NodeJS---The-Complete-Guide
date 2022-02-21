//Variables
//You can create variables using let, var and let are the same thing
let age = 30;               //Number
let hasHobbies = true;      //Boolean

//Const never change, that`s why we use const in loops, because that value will never change
const name = 'Rogerio';       //String

// name = 'Rogerio Pereira';   //Will return an error "Assignment to constant variable"


// function summarizeUser(userName, userAge, userHasHobbies) {
//     return 'Name is '+userName+
//             ', age is '+userAge+
//             ', user has hobbies '+userHasHobbies
// }

//Rewriting code above assigning function to a variable
// const summarizeUser = function (userName, userAge, userHasHobbies) {
//     return 'Name is '+userName+
//             ', age is '+userAge+
//             ', user has hobbies '+userHasHobbies
// }
//this way you variable summarizeUser will contain the funcion
//This seems weird to me, i can`t imagine a use case for that

//Rewriting code above using arrow function
const summarizeUser = (userName, userAge, userHasHobbies) => {
    return 'Name is '+userName+
            ', age is '+userAge+
            ', user has hobbies '+userHasHobbies
}
//In arrow functions, when using `this` it refers to parent`s context

//If arrow functions only has one statement you can remove the braces and keywork return
const sum = (a, b) => a + b; 

//If you have only one argument you can remove the parenthesis
const sumOne = a => a + 1;

//If you have a function without arguments, you need to have a empty parenthesis
const printName = () => console.log('Rogerio Pereira'); 

console.log(summarizeUser(name, age, hasHobbies));
console.log(sum(1,3));
console.log(sumOne(6));
console.log(printName());