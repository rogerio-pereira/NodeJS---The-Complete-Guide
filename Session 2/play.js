//Variables
//You can create variables using let, var and let are the same thing
let age = 30;               //Number
let hasHobbies = true;      //Boolean

//Const never change, that`s why we use const in loops, because that value will never change
const name = 'Rogerio';       //String

// name = 'Rogerio Pereira';   //Will return an error "Assignment to constant variable"


function summarizeUser(userName, userAge, userHasHobbies) {
    return 'Name is '+userName+
            ', age is '+userAge+
            ', user has hobbies '+userHasHobbies
}


console.log(summarizeUser(name, age, hasHobbies));
