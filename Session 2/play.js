//Variables
var name = 'Rogerio';       //String
var age = 30;               //Number
var hasHobbies = true;      //Boolean

function summarizeUser(userName, userAge, userHasHobbies) {
    return 'Name is '+userName+
            ', age is '+userAge+
            ', user has hobbies '+userHasHobbies
}


console.log(summarizeUser(name, age, hasHobbies));