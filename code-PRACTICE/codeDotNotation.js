// DOT NOTATION

const person1 = {
    firstName: 'Sarah',
    lastName: 'Davis',
    age: 27,
    job: 'Doctor',
    state: 'Texas',
    "my Favourite Foods" : ['Lasagna', 'Pizza', 'Tacos']
}

// console.log(person1);
console.log(person1.lastName);
console.log(`Hello, my name is ${person1.firstName} and I work as a ${person1.job}.`)

person1.hasDegree = true;
//console.log(person1);

person1['isMarried'] = true;

if (person1.isMarried) {
    console.log(person1.isMarried)
} else {
    person1.isMarried = 'Unknown';
    console.log(person1.isMarried);
}

// console.log(person1);

const myValue1 = "state";
console.log(person1.myValue1);
console.log(person1[myValue1]);

const myValue2 = "Name";
console.log(person1[`first${myValue2}`], person1['last' + myValue2]);

console.log(person1['my Favourite Foods'])