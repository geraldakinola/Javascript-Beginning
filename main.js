//Class
class Person {
  constructor (firstName, lastName, dob) { this.firstName = firstName; 
  this.lastName = lastName; 
  this.dob = new Date(dob);}
}

getBirthYear() 
    return this.dob.getFullYear();
  

getFullName() 
    return `${this.firstName}` `${this.lastName}`;





//Instantiate Object
const person1 = new Person('Gerald', 'Akinola', '04-11-1995'); 
const person2 = new Person('Mary', 'Dele', '5-11-1993');

console.log(person1.getBirthYear());
console.log(person1.getFullName());