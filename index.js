"use strict";
// 1. Hello Variable
let greeting = "Hello World!"; // its a simple greeting message.
console.log(greeting); // output:Hello World!
// 2. Basic Math
let num1 = 6;
let num2 = 5;
let sumValue = num1 + num2; // Sum Rule
let differenceValue = num1 - num2; // Difference or Minus Rule
let productValue = num1 * num2; // Multiplication Rule  
let quotientValue = num1 / num2; // Division Rule
console.log(sumValue); //Output 11
console.log(differenceValue); //Output 1  
console.log(productValue); //Output 30
console.log(quotientValue); //Output 1.2
// 3. Swapping Values
let a = 4;
let b = 5;
[a, b] = [b, a]; // Swapping Values
console.log(a); // output a=5 
console.log(b); // output b=4
// 4. Type Annotation (TypeScript)
let message = "2";
// message=5;           
/*I tried to assign message=5 its a number but it displayed an error,
 that "message": "Type 'number' is not assignable to type 'string'.",*/
console.log(message); // output message=2 (string) 
// 5. Modulus Operator
let num3 = 7;
let num4 = 3;
let rem = num3 % num4; // Applied Modulus operator with its output mentioned.  
console.log("The remainder value is", rem); //output rem=1
// 6. Increment Challenge
let counter = 1;
counter += 1; // First Method. Now the output will be 2.
counter++; // Second Method. Now the Total output will be 3. 
console.log(counter); // output counter=3
// 7. Logical Gates
let x = true;
let y = false;
let z = true;
let expression_AND = x && y && z; // false 
let expression_OR = x || y || z; // true
let expression_NOT = !x; // false
console.log(expression_AND); //output expression_AND=false
console.log(expression_NOT); //output expression_NOT=false
console.log(expression_OR); //output expression_NOT=true
// 8. Compound Assignment
let num = 10;
num += 5; // num = num + 5 => num = 10 + 5 => num = 15  
num -= 4; // num = num -4 => num=15-4 => num = 11
num *= 2; // num = num *2 => num=11*2 => num = 22
num /= 2; // num = num /2 => num=22/2 => num = 11
console.log(num); //output num=11
// 9. Even or Odd
let number = 10;
// if we will devide any number by two and remaining value comes in the whole number or remainder value is zero then this would be an Even Number otherwise Odd
if (number % 2 === 0) {
    console.log(number, "is Even number");
}
else {
    console.log(number, "is Odd number");
}
// 10. Voting Eligibility
let age = 19; //output: In this case else message will not print because age is above 18.
if (age >= 18) {
    console.log("You are eligible for Vote");
}
else {
    console.log("you are not eligible for Vote");
}
//  11. Grading System
let marks = 89; // Output: In this case Grade B Line will print. 
if (marks >= 90) {
    console.log("Congratulations! You scored an A Grade with", marks, "% Marks");
}
else if (marks >= 80) {
    console.log("Congratulations! You scored a B Grade with", marks, "% Marks");
}
else if (marks >= 70) {
    console.log("Congratulations! You scored a C Grade with", marks, "% Marks");
}
else if (marks >= 50) {
    console.log("You scored a D Grade with", marks, "% Marks");
}
else {
    console.log("You got F Grade with", marks, "% Marks!,", "Better Luck Next Time!!!");
}
// 12. Max of Three
let x1 = 15;
let y1 = 20;
let z1 = 11;
// Output Logic: If x1 is greater than y1 and z1 then ultimately the greater value will print, by applying this logic only greater number will print. 
if (x1 >= y1 && x1 > z1) {
    console.log(x1, "is Greater than others");
}
else if (y1 >= x1 && y1 >= z1) {
    console.log(y1, "is Greater than others");
}
else {
    console.log(z1, "is Greater than other");
}
// 13. Leap Year Checker
let year = 2026;
// Output Logic = If a year is divisible by 4 and the resultant value is in whole number then that would be a leap year.
if (year % 4 === 0) {
    console.log("This is a leap year");
}
else {
    console.log("This is not a Leap year");
}
//  14. Fahrenheit to Celsius Converter
let fohrenheit = 98;
let celsius = (fohrenheit - 32) * 5 / 9; // This formula is taken by searching from Google. 
console.log(`${fohrenheit} degree fohrenheit is equal to ${celsius} degree celsius`);
// 15. Positive, Negative, or Zero
let num5 = 5;
if (num5 > 0) {
    console.log("This is Positive Number");
}
else if (num5 < 0) {
    console.log("This is Negative number");
}
else {
    console.log("This is Zero");
}
// 16. Multiplication Table
let num6 = 11;
console.log("Table of 11 is mentioned below");
if (num6 >= 1) {
    console.log(`${num6}*1=${num6 * 1}`);
}
if (num6 >= 2) {
    console.log(`${num6}*2=${num6 * 2}`);
}
if (num6 >= 3) {
    console.log(`${num6}*3=${num6 * 3}`);
}
if (num6 >= 4) {
    console.log(`${num6}*4=${num6 * 4}`);
}
if (num6 >= 5) {
    console.log(`${num6}*5=${num6 * 5}`);
}
if (num6 >= 6) {
    console.log(`${num6}*6=${num6 * 6}`);
}
if (num6 >= 7) {
    console.log(`${num6}*7=${num6 * 7}`);
}
if (num6 >= 8) {
    console.log(`${num6}*8=${num6 * 8}`);
}
if (num6 >= 9) {
    console.log(`${num6}*9=${num6 * 9}`);
}
if (num6 >= 10) {
    console.log(`${num6}*10=${num6 * 10}`);
}
