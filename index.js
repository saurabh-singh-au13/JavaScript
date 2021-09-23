
// -------------------------------spread operator and destructuring----------------------------

// arr = [ 1, 2, 3]

// function average(a, b, c) {
//     return a+b+c/3

// }

// let a = [ 45, ...arr, 12, 1]
// console.log(a);


// let a = [1,2,3,4,5]
// let b = [5,6,7,8,9]
// let c = [...a, ...b, 4]
// console.log(c);

// let obj1 = {
//     name: "saurabh",
//     class: " 11B ",
//     age: 21,
//     colour: "Blue"
// }
// let obj2 = {}
// obj2.name = obj1.name;
// obj2.class = obj1.class;
// obj2.age = 18;
// obj2.colour = "Red";

// console.log(obj2);




// ---------------------------------async await ------------------------------------------------


// console.log("Saurabh will go first");
// setTimeout(() => {
//     console.log("Saurabh will go in Between")
// }, 5000);
// console.log("Saurabh will go Last");


// -----------------------------------promises and call back ------------------------------

// let fs = require("fs");
// fs.readFile("file.txt","utf-8", (err, data)=> {
//     console.log(err, data);
// })

// console.log("Saurabh Kumar Singh ")


// let fs = require("fs/promises");

// const threeFile = async (file1, file2, file3) => {
//     let a1 = fs.readFile(file1, "utf-8");
//     let a2 = fs.readFile(file2, "utf-8");
//     let a3 = fs.readFile(file3, "utf-8");
//     let c1 = await a1;
//     console.log(c1)
//     let c2 = await a2;
//     console.log(c2);
//     let c3 = await a3;
//     console.log(c3);

// }
// let a = fs.readFile("file.txt", "utf-8");
// a.then((data) => {
//     console.log(data);
    
// })

// threeFile("file1.txt", "file2.txt", "file3.txt");

// let fs = require("fs/promises");
// const twoFile = async( file1, file2) => {
//     let b1 = fs.readFile( "file1", "utf-8")
//     let b2 = fs.readFile( "file2", "utf-8")
//     let d1 = await b1;
//     console.log(d1);
//     let d2 = await b2;
//     console.log(d2);


// }

// let x = fs.readFile( "file.txt", "utf-8");
// x.then(( data ) => {
//     console.log(data);
// })

// twoFile("file1.txt", "file2.txt");



// -------------------------------------MAP------------------------------


// let a = [1,2,3,4,5,6,7];

// let a2 = a.map((value) => {
//     return value*5
// })

// console.log(a, a2)

// -------------------------------------filter---------------------------

// let b = [23, 12, 1, 4, 56, 7, 0];
// let c = b.filter((value) => {
//     return value> 12
// })

// console.log( b, c)


// ----------------------------------    ==   ,   ===    ------------------------

// if ( 1 === "1"){
//     console.log("True")

// }else{
//     console.log("False")


// }

// ---------------------------------------------Array ------------------------------------

// let colour = [ 'Red', 'Green']

// colour[2] = 1;

// console.log(colour);

// console.log(typeof(colour));


// ------------------------------------------Function -------------------------------------

// function are the fundamental building blocks of the javaScript


// function welcome () {}
//    |         |    |  |
//    |         |    | CurlyBrases
//    |         | Paranthesis
//    |    Function Name  
// Function Keyword

// function welcomeStudent ()  {
//     console.log("Hello World ");

// }

// welcomeStudent();

// function welcomeStudent (name, lastname) {
//     console.log(" Hello " + name+ " " + lastname)
// }

// welcomeStudent("Saurabh", "Kumar")
// welcomeStudent("Gaurav" , "Kumar")


// here name in paranthesis is an parametir
// and "Saurabh " is an arguement
// we are passing an arguement to a parameter 
//default value of variables in javascripts is undefined 

// console.log(" Hello " + name+ " " + lastname)
//to use this code this is soo ugly 
// we will use template letirals to make this beautifule
// function square (number) {
//     return number*number

// }

// let number = square(3);
// console.log(number)

// function cube (num) {
//     return num*num*num

// }
// console.log(cube(4));


//function is a set of statement which perform a task or calculate a value 

// ----------------------------------Operators in ja -------------------------

// 1 Arithmetic operators
// 2 Assignment Operators
// 3 Comparision Operator
// 4 Logical Operators
// 5 Bitwise Operators


// --------------------------------------Arithmetic operators-----------------------
// let x = 10;
// let y = 4;
// console.log( x + y );
// console.log( x - y );
// console.log( x * y );
// console.log( x % y );
// console.log( x ** y );
// console.log( x / y );

// console.log(-x + ++y);
// let x = 10;
// let y = 3;
// console.log( x++ + y++);
// console.log(x++);
// console.log(y++);
// console.log(x++);
// console.log(++x);



// -------------------------------------------Assignment Operators------------------------


// let x = 10;/
// x++;

// x++;
// x = x + 1;

// x = x + 5;
// x += 5;


// -----------------------------------Ternary Operator -----------------------------------

// let points = 101;

// let type = points >= 100 ? " Gold Membership " : " Silver Membership ";

// console.log(type);


// let run = 10;

// let batting = run >= 100 ? "Centuary" : " Not a Centuary "

// console.log(batting);

// -----------------------------Logical Operators ---------------------------------------
// console.log( false && false );
// true && true = true
// true && false = false
// false && false = false  


// -------------------------AND && operator-----------------------------

// let Highincome = true;
// let goodCreditScore = true;
// let loanEligible = Highincome && goodCreditScore;
// console.log(loanEligible);

// --------------------------------OR || operator----------------------------
//  console.log( false || false);
//  console.log( true || false);
//  console.log( true || true);


// let a = "red";
// let b = "blue";

// let c = a;
// a = b;
// b = c;




// console.log(a);
// console.log(b);

// --------------------------------------conditional operator if - else ----------------------------------------
// let hour = 21;

// if ( hour >= 6 && hour < 12) 
//     console.log(" Good Morning ")
// else if( hour >= 12 && hour < 18) 
//     console.log( " Good afternoon ")
// else if ( hour >= 18 && hour < 24) 
//     console.log( " Goog evening")
// else
//     console.log( "Good Night ")



// ----------------------------------------------switch operator----------------------------------------------

// let user = int(input("Enter Name"));



// switch (user) {
//     case "Admin":
//         console.log("welcome Admin ")
//         break;

//     case "User":
//         console.log("Welcome User")
//         break;
//     default:
//         console.log("Hello Unknown ")

//     }


// ----------------------------------------loop--------------------------------------
//suppose we want to display name 5 times how we do
// console.log("Say Name");
// console.log("Say Name");
// console.log("Say Name");
// console.log("Say Name");
// console.log("Say Name");

// this is so ugly so we use loop how lets check out;
// they repeat action for number of times we want
//types of loops
// 1 for loop
// 2 while loop
// 3 Do While loop
// 4 for in loop
// 5 for of loop


// for ( let i = 0; i <= 5; i++ ) {
//     console.log("Hello World ", i);

// }
// for ( let i = 10; i >= 1; i--) {
//     if ( i % 2 !== 0) {
//         console.log(i);
//     }
// }


// ---------------------------------------while loop-------------------------------------------

// let i = 0;
// while ( i < 5 ){
//     if( i % 2 !== 0)
//         console.log("Hello World", i);
//         i++;
    
// }
// -----------------------------------------------do while---------------------------------------
// let i = 9;
// do {
//     if( i % 2 !== 0) console.log(i);
//     i++;
// } while( i < 5 );


// while loop vs do while loop  difference is that
// do while loop will always be executed at least once while while loop not.
// talking about practicallyu we will be using mostely the while loop and for loop

// let i = 0;
// while( i < 5) {
//     console.log(i);
//     i++;            

// }

// ----------------------------------LOOOPS -------------------------------
/*
1st for loop
2nd while loop
3rd do-while loop
.
.
.
.
.4th for-in loop

*/
//---------------------------------- for in loop--------------------------------


// const colour = ['red', 'green', 'blue']
// for ( let index in colour ){
//     console.log(index, colour[index])
// }

// -------------------------------CONTROL FLOW ----------------------------------
/*
1st if else
2nd Switch case
3rd for 
4th While
5th Do-While
6th Infinite Loop
modern javascript came in es-6
7th for-in 
8th for-of
9th Break and Continue.

*/
// let i = 0;
// while( i <= 10){
    // if ( i === 5) break;
//     if ( i % 2 === 0){
//         i++;
//         continue
//     }
//     console.log(i)
//     i++;
// }


// ---------------------------------EXERCISE MAX OF 2-------------------------------
// function max( a, b){
//     if ( a > b){
//         return a;
//     }else{
//         return b;
//     }
// }
// console.log(max(12, 4));


// function max(a, b){
//     if( a > b){
//         console.log(a);
//     }else{
//         console.log(b);
//     }
// }
// max(22,144);
// let number = max(1, 21);
// console.log(number);

// function max(a, b){
//     return (a > b) ? a : b;

// }
// width > height = landscape = true
// function isLandscape( width, height){
//     if ( width > height){
//         console.log(true);

//     }else{
//         console.log(false);
//     }
// }
// isLandscape(21, 12)


// function isLandscape( width, height){
//     return (width > height) ? console.log(true) : console.log(false);

// }
// isLandscape(1, 12);
// console.log(isLandscape(200, 300));

// function isLandscape(width, height){
//     return( width> height);
// }

// function fizzBuzz(number){
//     if( typeof number != 'number')
//         return NaN;

        
//     if ( number % 3 === 0 && number % 5 === 0)
//         return 'fizzBuzz'
    
//     if( number % 3 != 0 && number % 5 != 0)
//         return number;


//     if( number % 3 === 0)
//         return 'Fizz' ;

//     if( number % 5 === 0);
//         return 'Buzz';

//     return number;

// }
// console.log(fizzBuzz(1234456678990));

// function checkSpeed( speed ){
//     const speedLimit = 70;
//     const kmPerPoints = 5;

//     if ( speed < speedLimit + kmPerPoints )
//         console.log("OK");
//     else{
//         const points = Math.floor((speed - speedLimit) / kmPerPoints);
//         if (points >= 12 )
//             console.log("points = ",points,"License Suspended")
//         else{
//             console.log('points', points);
//         }
//     }
// }
// checkSpeed(100130);

// -----------------By saurabh Kumar singh























































