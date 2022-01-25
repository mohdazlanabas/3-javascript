/*

function sum(a,b) {
    return a+b;
}

let sum2 = (a,b) => a+b;

// +++++++++

function isPositive(number) {
    return number >= 0
}

let iPositive1 = (number) => number >=0;

// +++++++++++

function randomNumber () {
    return Math.random
}

let randomNumber2 = () => Math.random; 

// +++++++++

document.addEventListener('click', function() {
    console.log('Click')
})

document.addEventListener('click', () => console.log('Click'))

*/

class Person {
    constructor(name) {
        this.name = name
    }

    printNameFunction() {
        setTimeout ( function() {
            console.log ('Function: ' + this.name)
        }, 100)
    }

    printNameArrow () {
        setTimeout( () => {
            console.log ('Arrow: ' + this.name)
        }, 100)
   }
}

let person = new Person ('Bob')
person.printNameFunction()
person.printNameArrow()
console.log(this.name)
