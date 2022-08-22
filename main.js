const person = {
    name: 'Max'
};
const newPerson = {
    ...person,
    age: 28,
}
console.log(newPerson);