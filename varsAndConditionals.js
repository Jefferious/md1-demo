/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let pikachuAttack = 25
let onixAttack = 35

if(pikachuAttack > onixAttack){
    console.log('Pikachu is stronger than Onix.')
} else if(onixAttack > pikachuAttack) {
    console.log('Onix is stronger than Pikachu.')
} else {
    console.log('It appears they are evenly matched.')
}

let pikachuHealth = 100
let pikachuDefense = 0

if(pikachuHealth <= onixAttack){
    console.log('Pikachu has fainted.')
} else {
    //pikachuHealth = pikachuAttack - onix
    pikachuHealth -= onixAttack
    console.log(`Pikachu's health is down to ${pikachuHealth}.`)
}

pikachuDefense += 25

if(pikachuHealth <= onixAttack - pikachuDefense){
    console.log('Pikachu has fainted!')
} else {
    pikachuHealth -= (onixAttack - pikachuDefense)
    console.log(`Pikachu's health is down to ${pikachuHealth}.`)
}

if((pikachuHealth + 50) >= 100){
    pikachuHealth = 100
} else{
    pikachuHealth += 50
}

console.log(`Pikachu was healed, his health is now ${pikachuHealth}.`)

let ironTailHits = false

if(ironTailHits === true){
    console.log('The battle continues')
} else {
    console.log('Onix fled the battle!')
}

for(let i = 0; i < 5; i++){
    if(pikachuHealth <= onixAttack - pikachuDefense){
        console.log('Pikachu has fainted!')
    } else{
        pikachuHealth -= (onixAttack - pikachuDefense)
        console.log(`Pikachu's health is down to ${pikachuHealth}.`)
    }
}

while(pikachuHealth > 0){
    pikachuHealth -= (onixAttack - pikachuDefense)
    console.log(`Pikachu's health is down to ${pikachuHealth}.`)
    if(pikachuHealth <= 0){
        console.log('Pikachu has fainted.')
    }
}