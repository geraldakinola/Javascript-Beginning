const person = {
    firstname: 'John',
    lastname: 'akinola',
    age: 30, 
    hobbies: ['sky diving', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}


const {firstname, lastname, address: {city}} = person

console.log(city)