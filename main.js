//Arrays of Object

const todos = [{
  id: 1,
    text: 'take out trash',
    isCompleted: true
},
{
  id: 2,
    text: 'meeting with boss',
    isCompleted: true
},
{
  id: 3,
    text: 'dentist appt',
    isCompleted: false
},
];

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
