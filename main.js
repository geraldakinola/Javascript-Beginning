


const names= ['Bolas', 'Topesss', 'Sades', 'Temisss']


// for(let i = 0; i < names.length; i++){
//    console.log(names[i])
// }


names.forEach(person=>{
    console.log(`Welcome to my party ${person}`)
})

const namestoprint =names.filter(person=>{
    return person.length===4
}
    
    )

    console.log(namestoprint)