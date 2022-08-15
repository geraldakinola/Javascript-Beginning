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

//For
for(let gerald of todos) {
    console.log(gerald.isCompleted)
}

