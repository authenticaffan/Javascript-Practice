/*const accountId = 144533
let accountEmail = "mohamedaffan@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

/*My first javascript code*/
/*
 console.log(accountId);
 console.log(accountEmail);
 console.table([accountEmail,accountId,accountPassword]) 
 */

//  "use strict";

 //alert(3+3) we are using nodejs not browser
 //console.log(3+3);

//number - 2 to power 53
//bigint
//string - ""
//null - standalone value
//undefined - 
//symbol - unique
/*
console.log(typeof "Affan") 
console.log(typeof 18)
console.log(typeof null)
*/
/*
let isLoggedIn = true
console.log(typeof isLoggedIn);
let isNotLogged = Number(isLoggedIn)
console.log(typeof isNotLogged);
console.log(isNotLogged);

let stringValue = "Affan"
console.log(typeof stringValue);
let NumberOf = Number(stringValue)
console.log(typeof NumberOf)
console.log(NumberOf);
*/

// let stringVal = "Affan"
// console.log(typeof stringVal)
// let NumberOf = Number(stringVal)
// console.log(typeof NumberOf)
// console.log(NumberOf);

// let a = 10
// let b = 20
// let c = 30 
// console.log(a+b+c);

// console.log(a*b);
// console.log(a%b);
// console.log(b**c);
// console.log(a/b);
// console.log(b-c);

// console.log(10 <= 15);
// console.log(5 == 5);
// console.log("10" <= 12);
// console.log("10"=="10");
// console.log(10==="10");

// let bigValue = 26473254736786947367461874n

// console.log(typeof bigValue);

// let array = ["Affan","Adnan"]
// console.log(typeof array);

// let newFunction = function(){
//     console.log("This is the first funcion created by me in javascript");
// }

// // newFunction();
// console.log(typeof newFunction);

// let firstObject = {
//     name: "Affan",
//     age: 20,
//     qualification: "BE CSE",
// }

// console.log(firstObject);
// console.log(typeof firstObject);

// Stack
// let first = "Affan"
// let second = first
// second = "Adnan"

// console.log(first);
// console.log(second);

// Heap
// let first ={
//     name:"Affan"
// }
// let second = first

// second.name = "Irbaz"

// console.log(first.name);
// console.log(second.name);

// let string = "Affan"
// console.log(string.length);

// console.log(string.toUpperCase());
// console.log(string.toLowerCase());
// console.log(string.charAt(4));

// let stringName = new String("Myself-Affan")
// console.log(stringName);
// console.log(stringName.substring(0,4));
// console.log(stringName.split('-'));

// let name = "Affan"
// console.log(`My name is ${name}`);

// Number

// const num = 1000
// const num1 = new Number(1000)
// console.log(num);
// console.log(num1);
// console.log(num.toString());
// console.log(typeof num);
// console.log(num.toLocaleString('en-IN'));
// console.log(num1.valueOf());

//math

// console.log((Math.random()*10)+1);

// const min = 10
// const max = 20
// console.log(Math.round((Math.random()*(min-max)+1)+min));

// const num = -50
// console.log(Math.abs(num));

//Dates

// let date = new Date()
// console.log(date);
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toLocaleString());

// console.log(date.getDate());
// console.log(date.getFullYear());
// console.log(date.toLocaleString("default",{
//     // weekday: "long",
//     dateStyle: "long"
// }))

// Array

// let firstArray = [10,20,30]
// console.log(firstArray);

// let secondArray = new Array("Affan","Adnan")
// console.log(secondArray)

// console.log(firstArray.concat(secondArray));
// console.log(firstArray.includes(10));
// console.log(secondArray.indexOf("Adnan"));
// console.log(firstArray.push(40,50,60));
// console.log(firstArray);
// console.log(firstArray.join(secondArray));
 
//slice and splice

// let affan = [10,20,30,40,50]

// console.log("A",affan);
// console.log(affan.slice(1,4));
// console.log("B",affan);
// console.log(affan.splice(1,3));
// console.log("C",affan);

// Array Continution

// const name2 = ["Affan","Adnan","irbaz"]
// const name1 = ["Anas","yousuf"]

// console.log(name.concat(name1));

// const name3 = [...name1,...name2]
// console.log(name3);

// const arr  = [1,2,3,4,5,[6,7,8,[9,10,11,[12,13]]]]
// console.log(arr.flat(Infinity));

// const arr1 = ["cow","cat","dog"]
// const arr2 = ["rat","goat"]
// // console.log(Array.isArray(arr1));
// // console.log(Array.from("Affan"));
// console.log(Array.of(arr1,arr2));

//objects

// const key = Symbol("001")

// const obj = {
//     name: "Affan", "full_name": "Mohamed Affan",
//     dept: "CSE",
//     year: 3,
//     clg: "CAHCET",
//     [key]: 100,
// }

// console.log(obj);
// console.log(obj["full_name"]);
// console.log(obj["name"]);
// console.log(obj.dept);

// obj.greetings = function(){
//     console.log("Hello Mohamed Affan");
// }
// obj.greetings2 = function(){
//     console.log(`Hello Mohamed Affan of ${this.dept} dept`);
// }

// obj.greetings2()

//  const obj1 = {
//     1: "a",
//     2: "b",
//  }

//  const obj2 = {
//     3: "c",
//     4: "d",
//  }

//  console.log(Object.assign({},obj1,obj2));
//  const obj3 = {...obj1,...obj2}
//  console.log(obj3);

// const userDetails = [
//     {
//         id: 10,
//     },
//     {
//         id: 20,
//     }
// ]
// console.log(userDetails[1].id);

// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));
// console.log(Object.entries(obj1));

// console.log(obj1.hasOwnProperty(2));

// object de-structure

// const userDetails = {
//     userName: "Affan",
//     dept: "CSE",
// }

// console.log(userDetails.userName);

// const {userName: name1} = userDetails

// console.log(name1);

