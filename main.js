const todos = [
    {
        id: 1,
        text: 'Take out Trash',
        isCompleted: true
    },


 
    {
        id: 2,
        text: 'Meeting with Boss',
        isCompleted: true
    },


 
    {
        id: 3,
        text: `Dentist appt`,
        isCompleted: false
    }
];


const myname = 'bola'



// for 

const todoJSON = JSON.stringify(todos);
console.log(todos);

console.log('My name is ' + myname + ' and i am 6 years old')

//console.log(`My name is ${myname} and i am 6 years old` ${todos[0].text})

console.log(console)

const person = {}
person.name= 'Tope'
person.age= 21

console.log(person)

console.log(todos[0].text)

const callmyname = function(name){
    console.log(`Welcome ${name}`)
}

callmname('Tope')