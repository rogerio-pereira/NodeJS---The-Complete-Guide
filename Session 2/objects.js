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