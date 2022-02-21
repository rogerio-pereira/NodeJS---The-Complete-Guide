const person = {
    name: 'Rogerio Pereira',
    age: 30,
    greet() {
        console.log('Hi I am '+this.name)
    }
}

//When have a braces inside function parameters, we ignore all data in element, except those inside the braces
const printName = ({ name }) => {
    console.log(name)
} 

printName(person);

const {name, age} = person;
console.log(name, age)


//You can also destructuring arrays
const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1)
console.log(hobby2)