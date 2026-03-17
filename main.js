for (let i = 0; i < 5; i++){
    console.log(i);
}

for (let i = 0; i<=10; i++) {
    if (i % 2){
    } else {
        console.log(i)
    }
}

let count = 0;
while (count < 3) {
    console.log("Count:",count);
    count++;
}

let number = 5;
while (number != -1){
    console.log(number)
    number--;
}

let doValue = 0;
do {
    console.log("Value:", doValue);
    doValue++;
} while (doValue < 3);

for (let i = 0; i < 10; i++){
    if (i === 5){
        break;
    }
    console.log(i);
}

for ( let i = 0; i < 10; i++){
    if (i === 5){
        continue;
    }
    if (i === 9){
        break;
    }
    console.log(i)
}

for (let i = 1; i <= 3; i++){
    for (let j = 1; j <= 3; j++){
        console.log(`i = ${i}, j = ${j}`);
    }
}

for (let i = 1; i <= 4; i++){
    let symbol = ""
    for (let j = 1; j <= i; j++){
        symbol+="*";
    }
    console.log(symbol)
}

function sum(a,b){
    return a + b;
}
console.log(sum(3,5));

function multiply(a, b){
    return a * b;
}
console.log(multiply(2,10));

function sayHello(name) {
    console.log(`Hello, ${name}`);
}
sayHello("Тимофей");

function printInfo(name, age){
    console.log(`Hello, ${name}.\nYour age: ${age}.`)
}
printInfo("Олег",25)

function greet(name = "Гость") {
    console.log("Привет, " + name);
}
greet();
greet("Анастасия");

function calculateDiscount(count, procent){
    if (procent == 0){
        procent = 10
    }
    console.log(`Итоговая цена: ${(count * procent) / 100}.`);
}
calculateDiscount(100,0);

const add = function (a,b) {
    return a + b;
};
console.log(add(2, 3));

function makeCounter() {
    let count = 0;
    return function (){
        count++;
        return count;
    };
}

const counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());

function sumFunc(a, b){
    return a + b;
}
const sumFunc2 = (a, b) => a + b;
const sayGreeting = () => console.log("Hello");
const square = x => x * x;
const calculate = (a,b) => {
    let result = a + b;
    return result * 2;
}

let numbersArr = [1, 2, 3, 4, 5];
console.log(numbersArr);
console.log(numbersArr[0]);
console.log(numbersArr[1]);

let colors = ["Red", "Green", "Blue"];
console.log(colors[0],colors[2])
console.log(colors)

console.log(numbersArr.length)
numbersArr.push(10);
console.log(numbersArr);
numbersArr.pop();
console.log(numbersArr);

let numbers2 = [10, 20, 30];
for (let i = 0; i < numbers2.length; i++) {
    console.log(numbers2[i]);
}

for (let value of numbers2){
    console.log(value);
}

let mixedArray = [1, "text", true, 3.14];
console.log(mixedArray);

console.log(numbersArr.includes(1));
console.log(numbersArr.indexOf(2));

//console.log(fruits.includes("яблоко"));
//console.log(fruits.includes("манго"));

let cityArr = ["Moscow", "Volgograd", "Vena", "Bejing", "New-York"];
if(cityArr.includes("Volgograd") == true){
    console.log(cityArr.indexOf("Volgograd"))
}