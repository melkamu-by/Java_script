let numbers = [10, 20, 30, 40, 50];

console.log("First element: " + numbers[0]);
console.log("Array length: " + numbers.length);

numbers.push(60);
console.log("After push: " + numbers);

let fruits = ["Apple", "Banana", "Orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(array[0]);
console.log(array.length);
let len=array.length;
let lastindex=len-1;
console.log(array[lastindex]);
array[lastindex] = 10;
console.log(array);
array.push(11);
console.log(array);
array.pop();
console.log(array);
array[5] = 100;
console.log(array);
let newArry = array.map(function (value) {
    return value * 2;
});
console.log("New Array: " + newArry);
//if else statement
let age = 20;
if (age >= 18) {
    console.log("You are ready to vote.");
} else {
    console.log("You are not old enough to vote.");

}
//ternary operator
age>18 ? console.log("You are an adult.") : console.log("You are not an adult.");
 for(let i=0;i<10;i++){
    console.log(i);

    console.log(`${i}**${i}=${i**i}`);
    console.log(`${i}**${2}=${i**2}`);
 }
const numbers1=[1,2,3,4,5,6,7,8,9,10];
const evenNumbers=numbers1.filter(function(value){
    return value%2===0;
});
console.log("Even numbers: " + evenNumbers);


console.log("Country list:-");
     //for of loop
const countries = ["Ethiopia","USA", "Canada","Eritrea","Kenya", "Mexico", "Brazil", "Argentina"];
for (const country of countries) {
    console.log(country);
}


