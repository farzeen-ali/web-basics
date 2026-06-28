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


let marks = 67

if(marks > 85 && marks <= 100){
    console.log("A+")
}
else if(marks > 75){
    console.log('A')
}
else if(marks > 65){
    console.log('B')
}
else if(marks > 55){
    console.log('C')
}
else if (marks < 56){
    console.log("F")
}
else {
    console.log('Invalid Marks')
}