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
