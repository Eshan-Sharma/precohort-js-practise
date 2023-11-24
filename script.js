//https://gist.github.com/9520prashant/55f05f84ecf33c1edccaaf2eccfe256c

//Question-1 : Input the distance in Kilometer and Convert into Meter and Centimeter.
function toMeter(km){
    return km*1000;
};

function toCentimeter(km){
    return toMeter(km)*100;
};

function toFeet(km){
    return km*3280.84;
};

function toInches(km){
    return km*39370.1;
};

function convert(){
    let km = parseInt(prompt("Enter km"));
    alert(`${km} Kilometer to meter is: ${toMeter(km)} meters. \n
    ${km} Kilometer to centimeter is: ${toCentimeter(km)} centimeters.`); 
};

//Question-2: WAP to input radius of a circle and log the area of circle.
function circle() {
    let radius = parseFloat(prompt("Enter radius"));
    alert(`Area of circle is: `+(radius*radius*Math.PI));
};

//Question-3: WAP to input two numbers and perform arithmetic operations on those numbers.
function sum() {
    let one = parseFloat(prompt("Enter first number"));
    let two = parseFloat(prompt("Enter second number"));
    alert(`Sum of two numbers is: ` + (one+two));
};

//Question-4: WAP to calculate total marks in two subject and then calculate percentage.
function marks(){
    let one = parseFloat(prompt("Enter first marks out of 50"));
    let two = parseFloat(prompt("Enter second marks out of 50"));
    let percentOne = one*2;
    let percentTwo = two*2;
    alert(`First marks percentage is: ${percentOne}% 
    \n Second marks percentage is: ${percentTwo}%`);
};

// Question-5: WAP to input the length and breath of rectangle and calculate the area and parameter of rectangle.
function rectangle() {
    let length = parseFloat(prompt("Enter the length of rectangle"));
    let width = parseFloat(prompt("Enter the width of rectangle"));
    let area = length*width;
    alert(`Area of rectangle is: ${area}`);
};

// Question-6: WAP to input n numbers and log the average of those number.
function average() {
    let sum = 0;
    let times = parseInt(prompt("Enter the number of numbers you want to enter"));
    for(let index = 0; index < times; index++){
        sum += parseFloat(prompt("Enter the number"));
    }
    let avg = sum/times;
    alert(`The average of numbers is: ${avg}`);
};
// Question-7: WAP to input the distance between two cities (in km) , convert and print this distance in meter, feet, inches, and centimeter.
function distance() {
    let km = parseFloat(prompt("Enter the distance between cities in km"));
    document.writeln(`Distance in meters is: ${toMeter(km)} meters`);
    document.write("<br>");
    document.writeln(`Distance in feet is: ${toFeet(km)} feet`);
    document.write("<br>");
    document.writeln(`Distance in inches is: ${toInches(km)} inches`);
    document.write("<br>");
    document.writeln(`Distance in centimeters is: ${toCentimeter(km)} centimeters`);
};
// Question-8: WAP to input the temperature in Fahrenheit and convert this temperature in Centigrade.
function toCentigrade(fahrenheit){
    return (fahrenheit-32)*5/9;
};

function temperature(){
    let fahrenheit = parseFloat(prompt("Enter temperature in fahrenheit"));
    alert(`Temperature in celsius is: ${toCentigrade(fahrenheit)}`);
};

// Question-9: Input the quantity and rate of a product then calculate the amount. A discount of 10 % after then calculate discount amount and amount after discount.
function product(){
    let quantity = parseInt(prompt("Enter the quantity"));
    let price = parseFloat(prompt("Enter the price of product"));
    let amount = quantity*price;
    let discount = amount*0.1;
    alert(`Amount to be paid is: ${amount-discount} 
    \n Discount is: ${discount}`);
};

// Question-10: Input principal amount, input rate of interest, input number of years, Then Calculate simple interest.
function interest() {
  let principal = parseFloat(prompt("Enter the principal"));
  let rate = parseFloat(prompt("Enter the interest"));
  let years = parseInt(prompt("Enter the number of years"));
  alert(`Amount after simple interest is: ${principal*(1+rate*years)}`);
};


// https://gist.github.com/9520prashant/adb2364bcdbcc290a746a864387659b0
// Question-1 : WAP that checks if a variable x is greater than 10. If it is, log "x is greater than 10," otherwise, log "x is not greater than 10."
function check10() {
  let num = parseFloat(prompt("Enter the number"));  
  if(num>10){
    alert(`${num} is greater than 10`);
  }else{
    alert(`${num} is not greater than 10`)
  }
};
// Question-2 : WAP that check that if an user is illegible for drive a car or not ( take user age as input).
function drive() {
    let age = parseInt(prompt("Enter your age"));
    if(age>=18){
        alert("You are allowed to drive");
    }else{
        alert("You are not allowed to drive");
    }
};
// Question-3: WAP to assign grade for a student For example, if the score is between 90 and 100, assign the grade "A.", (take score of every subject as input).
function grade() {
    let marks = parseFloat(prompt("Enter the marks obtained"));
    let grade = "";
    if(marks>=90 || marks<=100){
        grade = 'A';
    }else if(marks<90 || marks>=80){
        grade ='B';
    }else if(marks < 80 || marks>=70){
        grade = 'C';
    }else if(marks<70 || marks>=60){
        grade = 'D';
    }else if(marks<60 || marks>=0){
        grade = 'E';
    }
    alert(`Your marks are ${marks} and grade is ${grade}.`);
};
// Question-4: WAP to check  time of day based on the current hour. For example, if it's before noon, log "Good morning.". (take time as an input).
function greet() {
      const date = new Date();
      if(date.getHours()<12){
        alert("Good morning!");
      }else if(date.getHours()>12 && date.getHours()<18){
        alert("Good afternoon!");
      }else{
        alert("Good evening!");
      }
};
// Question-5: WAP using Switch-case to display day name according to number, for eg: 1 => Sunday. (take a number as input).
function dayName() {
    let dayNum = parseInt(prompt("Enter a number for getting day name from 1 to 7"));
    let name = "";
    switch (dayNum) {
        case 1:
            name = 'Sunday';
            break;
        case 2:
            name = 'Monday';
            break;
        case 3:
            name = 'Tuesday';
            break;
        case 4:
            name = 'Wednesday';
            break;
        case 5:
            name = 'Thursday';
            break;
        case 6:
            name = 'Friday';
            break;
        case 7:
            name = 'Saturday';
            break;
        default:
            name = "Enter only 1 to 7";
            break;
    }
    alert(`You entered ${dayNum}, and the day name is ${name}`);
};
// Question-6: WAP using Switch-case to display month name according to number, for eg: 1 => January. (take a number as input).
function monthName() {
    let month = parseInt(prompt("Enter a number for getting month name from 1 to 12"));
    let name = '';
    switch (month) {
        case 1:
            name = "January"
            break;
        case 2:
            name = "February"
            break;
        case 3:
            name = "March"
            break;
        case 4:
            name = "April"
            break;
        case 5:
            name = "May"
            break;
        case 6:
            name = "June"
            break;
        case 7:
            name = "July"
            break;
        case 8:
            name = "August"
            break;
        case 9:
            name = "September"
            break;
        case 10:
            name = "October"
            break;
        case 11:
            name = "November"
            break;
        case 12:
            name = "December"
            break;      
        default:
            name = "Please Enter between 1 to 12"
            break;
    }  
    alert(`You entered ${month}, and the month name is ${name}`);  
};
// Question-7: Implement a switch case statement to determine the type of fruit based on a variable. Handle at least three different fruit options.
function fruit() {
    let key = parseInt(prompt("Enter a number between 0 to 2 for fruit."));
    let name = '';
    switch (key) {
        case 0:
            name = 'Banana';
            break;
        case 1:
            name = 'Apple';
            break;
        case 2:
            name = 'Mango';
            break;
        default:
            name = "Not a valid entry"
            break;
    }
    alert(`You entered ${key}, and the fruit is ${name}`);
};
// Question-8: WAP to categorize a given temperature into "low," "medium," or "high" ranges.
function tempRange() {
    let key = parseFloat(prompt("Enter the temperature in celsius"));
    let temp = '';
    if(key > 50){
        temp = 'high';
    }else if(key < 50 && key > 12){
        temp = 'medium';
    }else{
        temp = 'low';
    }
    alert(`Your temperature is ${key} celsius. It is ${temp} temperature`);
};
// Question-9: WAP that classifies a number as positive, negative, even, or odd.
function classification(){
    let num = parseInt(prompt("Enter the number for classification"));
    let pos = num>0 ? 'positive' : 'negative';
    let eveOdd = num%2==0 ? 'even' : 'odd';
    alert(`The number is ${num} and it is ${pos} and ${eveOdd}`);
};
// Question-10: WAP to validate a username. If the username is less than 6 characters, log "Username too short"; if it's more than 15 characters, log "Username too long"; otherwise, log "Username accepted."
function user() {
    let username = prompt("Enter the username");
    if(username.length<6){
        alert("Username is too short");
    }else if(username.length>15){
        alert("Username too long");
    }else{
        alert("Username accepted");
    }
};


// https://gist.github.com/9520prashant/a6c209e7a9727fc60a990677f73dcd27
// Problem 1: Write a JavaScript program to perform arithmetic operations on two numbers (addition, subtraction, multiplication, division).
function add() {
    let num1 = parseFloat(prompt("Enter first number"));
    let num2 = parseFloat(prompt("Enter second number"));
    alert(`Sum is ${num1+num2}`);
};
function subs() {
    let num1 = parseFloat(prompt("Enter first number"));
    let num2 = parseFloat(prompt("Enter second number"));
    alert(`Difference is ${num1-num2}`);
};
function mul() {
    let num1 = parseFloat(prompt("Enter first number"));
    let num2 = parseFloat(prompt("Enter second number"));
    alert(`Product is ${num1*num2}`);
};
function division() {
    let num1 = parseFloat(prompt("Enter first number"));
    let num2 = parseFloat(prompt("Enter second number"));
    if(num2!=0){
        alert(`Division is ${num1/num2}`);
    }else{
        alert("Cannot divide by 0")
    }
};
// Problem 2: Write a JavaScript program to demonstrate the use of assignment operators on variables.
function vari(){
    let name = "";
    name = prompt("Enter name");
    alert(name);
};
// Problem 3: Write a JavaScript program to compare two numbers and log whether they are equal, greater, or lesser.
function compare(){
    let num1 = parseFloat(prompt("Enter the first number"));
    let num2 = parseFloat(prompt("Enter the second number"));
    if(num1>num2){
        alert(`${num1} is greater than ${num2}`);
    }else if( num1 < num2){
        alert(`${num1} is less than ${num2}`);
    }else if(num1==num2){
        alert(`${num1} is equals to ${num2}`);
    }else{
        alert('Not valid');
    }
};
// Problem 4: Write a JavaScript program to demonstrate logical operators in a conditional statement.
function logicalOper() {
    let bool1 = true;
    let bool2 = false;
    alert(`${bool1} == ${bool2} is: ${bool1==bool2}
    \n ${bool1} != ${bool2} is: ${bool1!=bool2}
    \n ${bool1} === ${bool2} is: ${bool1===bool2}
    \n ${bool1} !== ${bool2} is: ${bool1!==bool2}
    \n ${bool1} > ${bool2} is: ${bool1>bool2}
    \n ${bool1} < ${bool2} is: ${bool1<bool2}
    \n ${bool1} >= ${bool2} is: ${bool1>=bool2}
    \n ${bool1} <= ${bool2} is: ${bool1<=bool2}`);
};

// Problem 5: Write a JavaScript program to perform bitwise operations on two numbers.
function bitwise() {
    let num1 = parseInt(prompt("Enter the first number"));
    let num2 = parseInt(prompt("Enter the second number"));
    alert(`${num1} & ${num2} = ${num1&num2} 
    \n ${num1} | ${num2} = ${num1|num2} 
    \n ~${num1} = ${~num1} 
    \n ${num1} << ${num2} = ${num1<<num2}
    \n ${num1} ^ ${num2} = ${num1^num2}
    \n ${num1} >> ${num2} = ${num1>>num2}
    \n ${num1} >>> ${num2} = ${num1>>>num2}`)
};
// Problem 6: Write a JavaScript program to use the ternary operator to determine the larger of two numbers.
function ternary() {
    let num1 = parseFloat(prompt("Enter the first number"));
    let num2 = parseFloat(prompt("Enter the Second number"));
    alert(num1>num2 ? `${num1} is greater than ${num2}`:`${num2} is greater than ${num1}`);
};
// Problem 7: Write a JavaScript program to demonstrate type operators on different data types.
function typeOperate() {
    alert(`type of string-"Eshan" is: ${typeof "Eshan"}
    \n type of number-3 is: ${typeof 3}
    \n type of boolean-true is: ${typeof true}
    \n type of object-{name: "ABC", age: 30} is: ${typeof {name:"ABC",age:30}}
    \n type of function is: ${typeof function(){}}
    \n type of date is also object-new Date() is: ${typeof new Date()}`); 
};
// Problem 8: Write a JavaScript program to use string operators to concatenate two strings.
function concatenation(){
    let str1 = prompt("Enter string to be concatenated");
    let str2 = prompt("Enter second string");
    alert(`${str1} and ${str2} will be: ${str1.concat(str2)}`)
};
// Problem 9: Write a JavaScript program to demonstrate the use of the typeof operator on different variables.
function varType() {
    let str = prompt("Enter the value");
    alert(typeof str + " - Prompt value will always be string");
};
// Problem 10: Write a JavaScript program to use the in operator to check if a property exists in an object.
function checkingOperator(){
    let item = {name: "HP", os: "Linux"};
    alert(`Apple in object: ${item.name=='Apple'}`);
};

// https://gist.github.com/9520prashant/d651fb39c45eb060409285ed306fe111
// Question-1:  Write a function that takes a name as an argument and logs a greeting message to the console, like "Hello, [Name]!".
function getName(){
    let name = prompt("Enter name");
    greetName(name);
};
function greetName(name) {
    alert(`Hello, ${name}!`);
};
// Question-2:  Write a function that takes two parameters, adds them together, and returns the result.
// Calls function add.
// Question-3:  Write a function that takes the current hour as a parameter and logs a different greeting message based on whether it's morning, afternoon, or evening.
// Calls function greet
// Question-4:  Write a function that calculates and returns the area of a rectangle. The function should take the length and width as parameters.
// Calls function rectangle
// Question-5:  Write a function that takes a base and an exponent as parameters and returns the result of raising the base to the exponent.
function exponent() {
    let base = parseFloat(prompt("Enter the base number"));
    let exponent = parseFloat(prompt("Enter the exponent value"));
    alert(`Base is ${base}, Exponent is ${exponent}. Answer is ${base**exponent}`);
};
// Question-6:  Write a function that takes a number as a parameter and returns true if it's a prime number and false otherwise.
function checkPrime() {
    let isPrime = true;
    let num = parseInt(prompt("Enter number"));
    if(num===1){
        alert("1 is neither prime nor composite number");
    }else if(num > 1){
        for(let i = 2; i < num; i++){
            if(num%i==0){
                isPrime=false;
                break;
            }
        }
        if(isPrime){
            alert(`${num} is Prime number`);
        }else{
            alert(`${num} is not Prime number`);
        }
    }else{
        alert("Not a prime number");
    }
};
// Question-7:  Write a function that has a local variable and another function that has a global variable. Demonstrate the difference between global and local scope.
let nameGlobal = "John Wick";
function localGlobalScope() {
    let age = 40;
    alert(`${nameGlobal} is ${age} years old.`)
};
// Question-8:  Write a function that returns another function. The inner function should have access to a variable from the outer function.
function outer() {
    let name = prompt("Enter your name");
    function inner() {
        alert(`Your name is ${name}`);
    }
    return inner()
}
// Question-9:  Write a recursive function to calculate the factorial of a given number.
function factorial() {
    let num = parseInt(prompt("Enter the number"));
    if(num<0){
        alert('Invalid entry');
    }else if(num == 0){
        alert('Factorial is 1');
    }else{
        let fact = 1;
        for(let i = 1; i <= num; i++){
            fact *=i;
        }
        alert(`Factorial of ${num} is ${fact}`);
    }
}
// Question-10: Write two functions, and then compose them into a third function. For example, if f(x) = x + 2 and g(x) = 2x, then the composed function should be h(x) = f(g(x)).
function f(x){return x+2;};
function g(x){return 2*x;};
function h(){
    let x = parseFloat(prompt("Enter the number"));
    alert(`Ans of g(x) is ${g(x)} and f(g(x)) is ${f(g(x))}`);
};

// https://gist.github.com/9520prashant/09496bedd39ad5c295cfca8930eed900
// Question-1: WAP that logs numbers from 1 to 10 to the console.
function logOneToTen() {
    for(let i = 1; i <=10; i++){
        console.log(i);
    }
};
// Question-2: WAP that log all even numbers from 2 to 20.
function logEvens(){
    for(let i = 2; i <= 20; i++){
        if(i%2==0){
            console.log(i);
        }
    }
};
// Question-3: WAP that counts backward from 10 to 1 and logs the values.
function logTenToOne() {
    for(let i = 10; i >= 1;i--){
        console.log(i);
    }
}
// Question-4: WAP to calculate the sum of numbers from 1 to 5.
function sumOneToFive() {
    let sum = 0;
    for (let i = 1; i <= 5; i++) {
        console.log(`Sum till ${i} is ${sum+i}`);
    }
};
// Question-5: WAP that prints powers of 2 (2^n) up to 64.
function powerTill64() {
    for (let index = 1; index <= 6; index++) {
        console.log(`Power of 2^n where n is ${index} is ${2**index}`);   
    }
};
// Question-6:  WAP to Develop a do-while loop for a simple number guessing game. Ask the user to guess a number between 1 and 10, and keep prompting until they guess correctly.
function guessOneToTen() {
    let rand = Math.floor(Math.random() * 10)+1;
    // alert(rand);
    do{
        userInput = parseInt(prompt("Guess the number 1 to 10"));
    }while(rand!=userInput)
    alert(`Guessed correct random number: ${rand} == user Input: ${userInput}`)
};
// Question-7: WAP to display the multiplication table (1 to 10) in the console.
function multiplicationTable() {
    for (let i = 1; i <= 10; i++) {
        console.log(`Table of ${i}`);
        for(let j = 1; j<=10; j++){
            console.log(`${i}X${j}=${i*j}`);
        }
    }  
};
// Question-8: WAP that use the break statement to exit the loop when the counter reaches 5. Also, use continue to skip printing the value 3 ( Note : Loop Starts from 0).
function exitOnThree() {
    for(let i = 0; i < 10; i++){
        if(i==3){
            continue;
        }
        if(i==5){
            break;
        }
        console.log(i);
    }
};
// Question-9: WAP that logs numbers from 1 to 30. For multiples of 3, log "Fizz" instead of the number, and for multiples of 5, log "Buzz." For numbers which are multiples of both 3 and 5, log "FizzBuzz."
function fizzbuzz(){
    for(let i = 1; i<=30;i++){
        if(i%3==0 && i%5==0){
            console.log(`${i} - FizzBuzz`);
        }else if(i%3==0){
            console.log(`${i} - Fizz`);
        }else if(i%5==0){
            console.log(`${i} - Buzz`);
        }else{
            console.log(i);
        }
    }  
};
// Question-10: WAP to identify and log prime numbers within a given range.
function primeInRange() {
    let num1 = parseInt(prompt("Enter minimum number of range"));
    let num2 = parseInt(prompt("Enter maximum number of range"));
    let flag = 1;
    for(let i = num1; i<=num2; i++){
        flag=1;
        if(i==1||i==0){
            continue;
        }
        for(let j = 2; j<i;j++){
            if(i%j==0){
                flag = 0;
            }
        }
        if(flag==1){
            console.log(i);
        }
    }
    
};

// Question-1: 
// WAP to print this
// *
// **
// ***
// ****
// *****    
function leftStar() {
    let ans = ""
    for(let i = 1; i <=5; i++){
        for(let j = 1; j<=i;j++){
            ans += "*";
        }
        ans += '\n';
    }
    console.log(ans);
};


// Question-2: 
// WAP to print this 
//    *
//   ***
//  *****
// *******
function pyramid(){};

// Question-3:
// WAP to print this
// *****
// *   *
// *   *
// *****
function starWindow() {  
};

// Question-4:
// WAP to print this
// 1
// 12
// 123
// 1234
// 12345
function leftStarNumber() {
    let ans = "";
    for(let i = 1; i <=5; i++){
        for(let j = 1; j <=i; j++){
            ans+=(j+'');
        }
        ans += '\n';
    }
    console.log(ans);
};

// Question-5
// WAP to print this
//     A
//    BBB
//   CCCCC
//  DDDDDDD
// EEEEEEEEE
function alphabetPyramid(){};


// https://gist.github.com/9520prashant/1a047c6c850266d2e6dddb92bbc2d6cd
// Question-1:  Create a function to perform a deep clone of an object, handling nested objects and arrays.
let originalObj = {name: "Eshan", age: 23};
function deepClone(){

};

// Question-2:  Write a function that takes two objects and returns an object containing the common key-value pairs.
function commonKeyPair(){};

// Question-3:  Create a function that transforms an object by renaming its keys based on a provided mapping. The function should handle nested objects. For example:
// input: { firstName: 'John', address: { city: 'New York' } }
// mapping: { firstName: 'name', address: { city: 'location.city' } }
// output: { name: 'John', location: { city: 'New York' } }
function keyMapping(){};

// Question-4:  Write a function that validates an object against a provided schema. The schema should define the expected structure, data types, and optional/required fields. For example:
// object: { name: 'John', age: 25, email: 'john@example.com' }
// schema: { name: 'string', age: 'number', email: 'string', address: 'string?' }
// valid output: true
function validateSchema(){};

// Question-5:  Create a function that merges two objects. If there are conflicts in values, allow for custom logic to determine the merged result. For example:
// object1: { a: 1, b: 2 }
// object2: { b: 3, c: 4 }
// customMerge: (key, val1, val2) => key === 'b' ? val1 * val2 : val2
// output: { a: 1, b: 6, c: 4 }
function mergeObjects(){};