/* randomNumber1 = (Math.random()*10+9);
arrayLength = Math.round(randomNumber1);

randomNumber2 = (Math.random()*1000);
arrayNumberOld = Math.round(randomNumber2);
let arrayOld = [arrayNumberOld];

for(let k = 0; k < arrayLength; k++) {
    randomNumber3 = (Math.random()*1000);
    arrayNumberLoop = [Math.round(randomNumber3)];
    arrayOld.push(arrayNumberLoop);}  
const arr= arrayOld; */

// ABOVE IS RANDOM ARRAY GENERATO
let arr = [5,10,15,20,25];

console.log(arr)

console.log('1. While Loop')
let a = 0;
while (a < arr.length) {
    console.log(arr[a]);
    a++};

console.log('2. Do While Loop')
let b = 0;
do {console.log(arr[b]);
    b++;
} while (b < arr.length);

console.log('3. For Loop')
for (let c =0; c < arr.length; c++) {
    console.log(arr[c]);}

console.log('4. For In Loop')
for (let d in arr) {
    console.log(arr[d]);}

console.log('5. For Of Loop')
for (let e of arr) {
    console.log(e);}

console.log('6. ForEach Loop')
arr.forEach((val) => {console.log(val)});

console.log('7. Iterator')
let it = arr[Symbol.iterator]();
console.log(it.next()) 