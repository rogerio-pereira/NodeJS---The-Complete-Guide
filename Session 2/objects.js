const person = {
    name: 'Rogerio Pereira',
    age: 30,
    //Will return name as undefined
    // greet: () => {
    //     console.log('Hi I am '+this.name)
    // }

    //Solution 1
    // greet: function() {
    //     console.log('Hi I am '+this.name)
    // }

    // Better Solution, it seems like Vue approach
    greet() {
        console.log('Hi I am '+this.name)
    }
}

console.log(person.greet())

//Array can have multiple types
// hoobies = ['Sports', 'Cooking', 1, false, {}];
hobbies = ['Sports', 'Cooking'];
for(let hobby of hobbies) { //You cna use let in loops, i thought it only could be constants
    console.log(hobby)
}

//MAP will transform the original array and return a new array. It will run the function on each array element
console.log(hobbies.map(hobby =>  hobby+' (Hobby)' )); //Will add ' (Hobby)' to all array elements
console.log(hobbies); //print original array (it wasn`t changed because map will return a new array)

//Hobbies is a const
hobbies.push('Programming')
console.log(hobbies);
//You can change the constant because arrays are reference type, and the only store a pointer to the element in memory
//The structure of array changed, but not it`s reference


//==================
// SPREAD OPERATOR
//==================
//Slice just copy the array
// const copiedArray = hobbies.slice();
const copiedArray = [...hobbies];   //Spread operator will return all array elements with their properties
//The copied is not a copy of the original array, it will create a new array in memory
console.log(copiedArray)

const copiedPerson = {...person};
console.log(copiedPerson);


//==================
// REST OPERATOR
//==================
//Rest operator is the opposite of spread
// const toArray = (arg1, arg2, arg3) => {
//     return [arg1, arg2, arg3];
// };
// console.log(toArray(1, 2, 3))
// console.log(toArray(1, 2, 3, 4))    //Will return an error, because function only allows 3 arguments


const toArray = (...args) => {
    return args;
};
console.log(toArray(1, 2, 3))
console.log(toArray(1, 2, 3, 4))    //Will return an error, because function only allows 3 arguments
//The syntax is the same as spread... JS will understand if you are pulling elements out of an array or 
//merging multiple elements into an array
//**REST operator should be used only as arguments in the function**