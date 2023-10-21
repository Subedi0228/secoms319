/*
Chiran Subedi
Sep 18, 2023
Activity07 - Variables
*/

console.log("---- I am in V A R I A B L E S ----")

// Q1 : Is it permited the next ?
console.log("Q1 ---------------")
var var1 = "Iowa";
console.log(var1);
var var1 = 124;
console.log(var1);
// Is it permited ?
console.log("Yes or Not? Yes this is permitted.");

// Q2 : Is it valid ?
console.log("Q2 ----------------");
let var2 = "Ames";
console.log(var2);
let var2 = 124;
// Is it valid ?
console.log("Yes or Not? No, this is not valid.");

// Q3 : Is it valid ?
console.log("Q3 ----------------");
let var3 = "ISU";
console.log(var3);
var3 = 2023;
console.log(var3);
console.log("Valid ? Yes, this is valid")

// Q4 : Explain the Error.
console.log("Q4 ----------------");
let var4;
const var5;
console.log("What's the error : Const needs to have a value assigned to it")

// Q5 : Explain the Error.
console.log("Q5 ----------------");
const var6 = 3.1415;
var6 = 2.8;
console.log("What's the error : You can not reassign a value to a const variable.")

// Q6 : Explain the Error.
let first name = "Abraham";
console.log("You have a space between 'first' and 'name'");
let 2numbers = [1,2];
console.log("Variable names can not start with a number");
let city-state = "Ames Iowa";
console.log("Variable names can not have a dash '-' character");

// Q7 : What !! ??
let mainCity = "DesMoines";
console.log("This is the Capital :", MainCity)
console.log("The variable is named 'mainCity' whereas in console.log, there is 'MainCity', variables are capital sensitive")

// Q8 : "let" and "const" scope vs "var" scope
if (5 === 5) {
    var var7 = 100;
    }
    console.log(var7);
    if (5 === 5) {
    let var8 = 100;
    }
    console.log(var8);
    console.log("Let and const are block scoped, they can only be accessed within the block they're created in, whereas var can be accessed from anywhere within the function that they are declared in.")