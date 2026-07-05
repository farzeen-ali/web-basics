// // console.log("Farzeen")
// // Variables
// // var, let, const
// // var username = 'Farzeen'
// // var username = 23

// // let (redeclaration allow nhi krta, reassign krskte)

// let username = 'Farzeen'
// // let username = 23 error => redeclare
// username = 23

// console.log(username)

// // const pi = 3.142
// // const pi = 123
// // pi = 123
// console.log(pi)

// Operator Operands Expressions
// Arithmetic Operators
// +, -, *, /, %
// let a = 4;
// let b = 2;

// console.log(a+b)
// console.log(a-b)
// console.log(a/b)
// console.log(a*b)
// console.log(a%b)

// let name = "Ali"
// console.log("Welcome ", name)
// console.log("Welcome " + name)
// // Template Literals
// console.log(`Welcome ${name} Thank You`)

// let name = "Ali"
// let age = 23
// let status = "Inter"

// console.log(`My name is ${name} and my age is ${age} and my status is ${status}`)

// Increment Decrement
// Pre, Post
// let a = 10
// console.log(++a) // 11
// console.log(a++) //11
// console.log(a) //12
// let a = 10
// console.log(--a) // 9
// console.log(a--) //9
// console.log(a) //8

// a++ => a = a + 1
// ++a => plus print
// a-- => print minus

// Pre post Pre Post
// let b = 10;
// console.log(++b) // 11
// console.log(b--) // 11
// console.log(b++) //10
// console.log(--b) //10

// Logical Operators
// AND OR NOT
// let a = true
// let b = false
// console.log("AND: ", a && b)
// console.log("OR: ", a || b)
// console.log("Not: ", !a)

// Comparison Operators
// <, >, <=, >= !=, ==, ===
// let a  = 2, b = '2';
// // console.log(a>b); // false
// // console.log(a>=b); // false
// // console.log(a<=b); // true
// // console.log(a<b); // true
// console.log(a==b) // true
// console.log(a===b) // false

// Condtional Statements
// if, else, if else, if else if, switch case

// let age = 18;

// if(age >= 18){
//     console.log("Age is Greater than 18")
// } else{
//     console.log("Age is less than 18")
// }

// let marks = 67

// if(marks > 85 && marks <= 100){
//     console.log("A+")
// }
// else if(marks > 75){
//     console.log('A')
// }
// else if(marks > 65){
//     console.log('B')
// }
// else if(marks > 55){
//     console.log('C')
// }
// else if (marks < 56){
//     console.log("F")
// }
// else {
//     console.log('Invalid Marks')
// }
// DOM
// Switch case

// let days = 5;

// switch(days){
//     case 1:
//         console.log('Monday')
//         break
//     case 2:
//         console.log("Tuesday")
//         break
//     case 3:
//         console.log('Wednesday')
//         break
//     case 4:
//         console.log("Thursday")
//         break
//     case 5:
//         console.log('Friday')
//         break
//     case 6:
//         console.log("Saturday")
//         break
//     case 7:
//         console.log("Sunday")
//         break
//     default:
//         console.log("Invalid")
// }

// Functions => reusability => DRY Principle
// user defined
// pre defined

// User Defined
// 1) no argument, no return
// 2) with argument but no return
// 3) no argument but with return
// 4) argument return

// 1)
// Function definiton
// function sayHello(){
//     console.log('Welcome User')
// }

// sayHello()

// (2

// let name = "Ali"

// function greetingUser(username){
//     console.log(`Welcome ${username}`)
//     console.log(name)
//     let age = 21;
//     console.log(age)
// }

// greetingUser(name)
// console.log(age)

// 3)

// function getPiValue(){
//     return 3.142
// }

// // console.log(getPiValue())
// let value = getPiValue()
// console.log(value*2)

// 4)
// function multiply(num1, num2){
//     console.log('Function Started')
//     return num1*num2
//     // console.log('Function Ended')
// }

// let result = multiply(2,3)
// console.log(result)

// Arrow Functions

// Problem
// displayMessage();

// function displayMessage() {
//   console.log("Welcome");
// }

// Hoisting

// Solve => Arrow Functions
// console.log(valueDouble(2)) 

// const valueDouble = a => a*2;

// console.log(valueDouble(2))

// Loops
// for, while, do-while

// start, ending point condition, updation

// for(let i = 0; i < 10; i++){
//     console.log(`Value of i ${i}`)
// }

// while

// let num = 2;

// while(num < 5){
//     console.log(num)
//     num++
// }

// do while

// num = 4
// do{
//     console.log(num)
// } while(num < 2)

// Object
// let obj = {
//     name: 'Farzeen',
//     age: 23,
//     email: 'farzeen@gmail.com'
// }

// console.log(obj.name)

// Arrays (single variable => multi values)
// let fruits = ["Apple", 'Mango', 'Orange', 'Pineapple']
// console.log(fruits)
// console.log(fruits[1])
// fruits.pop()
// console.log(fruits)
// fruits.push('Pineapple')
// console.log(fruits)

// console.log(fruits)
// console.log(fruits.slice(0,2))


// React Important
// Array Destructuring
// Object Destructing

let info = ["Farzeen", 'CS', true]

// let [name, subject, status] = info

// console.log(name)
// console.log(subject)
// console.log(status)

// for (let index = 0; index < info.length; index++) {
//    console.log("Index Value is: ", index+1, " " ,info[index])
// }

// info.forEach(fName => {
//     console.log(fName)
// });

// map, filter, reduce

// let numbers = [1,2,3,4,5]

// let double = numbers.map(function(num){
//     return num * 2
// })

// console.log(numbers)
// console.log(double)

// Filter

// let ages = [12,18,24,30,40,50,2, 4, 7]

// let adults = ages.filter(age => {
//     return age>=18
// })

// console.log(ages)
// console.log(adults)

// Reduce
// let arr = [10,20,40,50]

// let max = arr.reduce((next, current) => {
//     return current>next ? current : next
// })
// console.log(max)

// REST Operators

// let sub = ["CS", "IT", "Net", "Cyber", "SE"]

// let [sub1, sub2, ...remaining] = sub;

// console.log(sub1)
// console.log(sub2)
// console.log(remaining)