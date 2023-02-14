/**
 * * to print on console ->
 */

// console.log('Omkar');

/**
 * * using template literal ->
 */
// var myName = 'Omkar';
// console.log(`My first name is ${myName}`);


/**
 * * Define variable and assign value ->
 */
// var myName = 'Omkar';
// console.log(myName);

/**
 * *null v/s undefined
 */

// var name = null;
// var myName;
// console.log(name); // if you pass null then it will print null
// console.log(myName); // if declare it but not initialize then it will print undefined

// console.log(typeof(name)); // type of null is object
// console.log(typeof(myName)); //type of undefined is undefined only


// Operators -> same as java

/**
 ** Control Statements :
 */

// if - else  ->

// var isCorrect = true;
// if(isCorrect){
//     console.log("Correct Choice");
// }
// else{
//     console.log('Wrong Choice');
// }

// switch ->

// var a=10, b=5;
// var ch = "+";

// switch(ch){

//     case '+':
//         console.log(a+b);
//         break;
//     case '-':
//         console.log(a-b);
//         break;
//     case '*':
//         console.log(a*b);
//         break;
//     case '/':
//         console.log(a/b);
//         break;
//     default:
//         console.log("Wrong input");
// }

// ternary operator ->

// var age = 20;
// var isEligible = age >= 18 ? true : false;
// console.log(isEligible);


/**
 ** loops ->
 */

// while loop -> it will first check condition then excute the code

// var i = 0;
// while(i < 5){
//     console.log(i);
//     i++;
// }

// do-while loop -> it will excute the code first time then check condition

// var i = 0;
// do{
//     console.log(i);
//     i++;
// }while(i<5);

// for loop ->

// for(var i=0; i<5; i++){
//     console.log(i);
// }

// for in loop for arrays -> (returns index of each element in array)

// var myFriends = ['Samir', 'Ruhi', 'Swarali', 'Yadnit', 'Raj', 'Atharva'];

// for(var index in myFriends){
//     console.log(index);
// }

// for of loop for arrays -> (retruns element at each idnex in array)

// var myFriends = ['Samir', 'Ruhi', 'Swarali', 'Yadnit', 'Raj', 'Atharva'];

// for(var element of myFriends){
//     console.log(element);
// }

// for each loop for arrays -> 
// it supprots callback function which gives 4 params 
// element in array, index of each elememt, arrat itself, this -> will be object

// var myFriends = ['Samir', 'Ruhi', 'Swarali', 'Yadnit', 'Raj', 'Atharva'];

// myFriends.forEach((element, index, array) => console.log(`The element at ${index} is ${element}`));



/**
 ** functions ->
 */

// 1. Normal funtion ->

// function sum(a, b){
//     return a + b;
// }

// var result = sum(5, 6);
// console.log(result);

// 2. Anonymous funtion ->

// var result = function(a, b){
//     return a + b;
// }
// console.log(result(5, 6));

// 3. Arrow function ->

// var result = (a,b) => a + b;
// console.log(result(5,6));


/**
 ** let and const :
 */

// if we define var then it will be global scope so we can access variable from anywhere
// where let and cost are block scope. they are only limited to inside block

// using var we can access inside block variable outside as well
// if(true){
//     var myName = 'Omkar';
// }
// console.log(myName);

// but using let or const we can't access inside block variable oustide
// belwo code will give error
// if(true){
//     let myName = 'Omkar';
// }
// console.log(myName);

// const is same as let but once its initialized we can update its value
// below code will give error
// const myName = "Omkar";
// myName = "Omkar2";
// console.log(myName);


/**
 * *Array and it's method ->
 */

// var myFriends = ['Samir', 'Yadnit', 'Ruhi', 'Swarali', 'Yadnit', 'Raj', 'Atharva'];

// it will return object
// console.log(typeof(myFriends)); 

// it will return length of array
// console.log(myFriends.length); 

// indexOF -> it accepts 2 params : value , startFrom and returns index of value
// console.log(myFriends.indexOf('Yadnit'));
// console.log(myFriends.indexOf('Yadnit', 2)); // now it will start from index 2 and return index of value after 2

// lastIndexOf ->it accepts 2 params : value , startFrom and returns index of value
// console.log(myFriends.lastIndexOf('Yadnit'));
// console.log(myFriends.lastIndexOf('Yadnit', 3)); // now it will start from index 3 in reverse direction as need to find last index and return index of value before 3

// includes -> check if given value present. if yes returs true else false
// console.log(myFriends.includes('Yadnit'));
// console.log(myFriends.includes('Yadnit', 5)); // it will start from 5th index

// sort -> (only supports for string values)
// myFriends.sort();
// console.log(myFriends);

// var price = [100, 600, 55, 90, 400, 500, 900];

// find -> it returns single first result if found else retruns undefined
// it will start iterating values in array and if any value satisfies condition then it will return in varibale and stops iterating as its return single first value
// var ans = price.find((value, index, array) => value > 200);
// console.log(ans);

// filter -> same as find but its returns multiple values in array format if conditon satifies else returns empty array
// var ans = price.filter((value, index, array) => value > 200);
// console.log(ans);

// map -> returns new array instead of modifying orginial array
// var priceDouble = price.map((element, index, array) => {
//     return element * 2;
// })
// console.log(priceDouble);

// forEach v/s map -> map retruns list whereas forEach retrns undefined.
// also map is chaiable as its retruns something and forEach is not chainable as its doesnt not return anything

// reduce -> it returns single value mainly use to calculate sum, avg, mul, sub for elememt in array
// it has one extra field which accoumlator which stores previous value 
// intially it is 0 if we want we can define as per our need

// var total = price.reduce((accoumlator, element, index, array) => {
//     return accoumlator += element;
// })
// console.log(total);
// var total = price.reduce((accoumlator, element, index, array) => {
//     return accoumlator += element;
// }, 10) // passing intial value as 10 instead of default 0
// console.log(total);


// push -> to add element from back and it returns length of an array
// price.push(70);
// console.log(price.push(120));
// console.log(price);

// unshift -> to add element from front and it returns length of an array
// price.unshift(1);
// console.log(price);
// console.log(price.unshift(0));

// pop -> to remove element from back and it returns remved element
// price.pop();
// console.log(price.pop());
// console.log(price);

// shift -> to remove element from front and it returns remved element
// price.shift();
// console.log(price.shift());
// console.log(price);


// splice -> to pefrom CRUD operations
// it takes three arguments -> (index, deleteCount, element or elements)
// index -> from what index need to start
// deleteCount -> how many element need to delete form index
// add element or list of element at index

// var myFriends = ['Samir','Ruhi', 'Swarali', 'Yadnit', 'Raj', 'Atharva'];
// myFriends.splice(0, 1, 'samir'); // deleting 1 element at index 0 and add 'samir' at index 0 (update)
// console.log(myFriends);
// myFriends.splice(1, 0, 'Omkar'); // adding omkar at 1st index
// console.log(myFriends);
// myFriends.splice(0, 2); // it will delete 2 elements from give index
// console.log(myFriends);

// flat method -> to flat multidimentionsal array into single array(1D array)
// let array = ['zone1', 
//              'zone2', 
//              'zone3', 
//              ['zone4', 'zone5'], 
//              [
//                 ['zone6', 'zone7']
//              ],
//              [
//                 [
//                    ['zone8', 'zone9', 'zone10']
//                 ]
//              ]
//      ];

// if we dont specify any value then it will set to limit -> 2D into 1D (it will ignore 3D, 4D,....)
// console.log(array.flat());
// now it will set to convert 3D to 1D 
// console.log(array.flat(2));
// if we want convert array into 1D irresepctive of D's 
// console.log(array.flat(Infinity));

/**
 * *String and it's method ->
 */

// create string 
// var myStr = 'String creation';
// var myStr2 = new String('String creation');

// length -> same as array
// var myStr = "My name is Omkar Pedamkar";
// console.log(myStr.length);

// indexOf -> same as array
// var myStr = "My name is Omkar Pedamkar";
// console.log(myStr.indexOf('is'));
// console.log(myStr.indexOf('ar', 17));

// lastIndexOf -> same as array
// var myStr = "My name is Omkar Pedamkar";
// console.log(myStr.lastIndexOf('ar'));
// console.log(myStr.lastIndexOf('ar', 22));

// search -> same as previous two methods but it doesn't accept startfrom param
// var myStr = "My name is Omkar Pedamkar";
// console.log(myStr.search('is'));

// slice -> returns start to end(exclusive) index string. does support neg index
// also not gives out of index error if end value > length
// var myStr = "My name is Omkar Pedamkar";
// console.log(myStr.slice(3, 200));

// substring -> same as slice but doesnt support neg indexing
// var myStr = "My name is Omkar Pedamkar";
// console.log(myStr.substring(3, 200));

// replace -> to replace specifc word/string. accepts (cuurentword, newword)
// it returns new string and only replace first match 
// var myStr = "My name is Omkar Pedamkar";
// console.log(myStr.replace('Omkar', 'OMKAR'));

// charAt -> retruns char at index. accepts index as param
// var myStr = "My name is Omkar Pedamkar";
// console.log(myStr.charAt(23));

// charCodeAt -> returns char ASCII code at index. accepts index as param
// var myStr = "My name is Omkar Pedamkar";
// console.log(myStr.charCodeAt(23));

// property access -> same as we access element in array
// var myStr = "My name is Omkar Pedamkar";
// console.log(myStr[0]);

// toUpperCase -> it returns new string with all upper case letter
// var myStr = "My name is Omkar Pedamkar";
// console.log(myStr.toUpperCase());

// toLowerCase -> it returns new string with all lower case letter
// var myStr = "My name is Omkar Pedamkar";
// console.log(myStr.toLowerCase());

// trim -> to remove whitespace from start and end of string and returns new string
// var myStr = "          My name is Omkar Pedamkar            ";
// console.log(myStr.trim());

// split -> to convert string into array on basis of condition. here ','
// var myStr = "a,b,c,d,e,f,g,h,j"
// var myArray = myStr.split(",");
// console.log(myArray);

/**
 ** Date and Time->
 */

 // it takes 7 params ->
 // Date(year, monthIndex, date, hours, minutes, seconds, milliseconds)
 // month index -> 0 to 11 (jan to dec)
 // year and month param mandatory if we specify at least one param

 // if we dont specify 7 params then it will return current date & time
//  var cuurentDate = new Date();
//  console.log(cuurentDate.toString()); // to get in IST format
//  console.log(cuurentDate.toLocaleString()); // to get date and time both
//  console.log(cuurentDate.toLocaleDateString()); // ti get only date
//  console.log(cuurentDate.toLocaleTimeString()); // to get only time

// if we specify 7 params then it will pass mentioned date to object
//  var customDate = new Date(2020,3,17,15,30,30,30);
//  console.log(customDate.toString()); // to get in IST format
//  console.log(customDate.toLocaleString()); // to get date and time both
//  console.log(customDate.toLocaleDateString()); // ti get only date
//  console.log(customDate.toLocaleTimeString()); // to get only time;

// some get set methods
// var cuurentDate = new Date();

// get methods ->
// console.log(`Year : ${cuurentDate.getFullYear()}`); // returns year of object
// console.log(`Month : ${cuurentDate.getMonth()}`); // returns month of object
// console.log(`Date : ${cuurentDate.getDate()}`); // returns date of object
// console.log(`Hours : ${cuurentDate.getHours()}`); // returns hours of object
// console.log(`Minutes : ${cuurentDate.getMinutes()}`); // returns minutes of object
// console.log(`Seconds : ${cuurentDate.getSeconds()}`); // returns seconds of object
// console.log(`Milliseconds : ${cuurentDate.getMilliseconds()}`); // returns ms of object

// set methods -> (after creating object if we want to update date & time then we can use set methods)
// cuurentDate.setFullYear(2020); // to set year
// cuurentDate.setMonth(0); // to set month
// cuurentDate.setDate(23); // to set date
// cuurentDate.setHours(13); // to set horus
// cuurentDate.setMinutes(45); // to set mins
// cuurentDate.setSeconds(34); // to set seconds
// cuurentDate.setMilliseconds(43); // to set ms

// console.log(cuurentDate.toLocaleString()); // date and time will be updated because of set methods


/**
 ** Math methods->
 */

 // it returns constant PI value
//  console.log(Math.PI);

// it returns power of number(n, x) where n is number and x is power 
// console.log(Math.pow(2, 3));

// it returns squre root of number
// console.log(Math.sqrt(36));

// it returns positive value whether its positive or negative
// console.log(Math.abs(-67));

// it returns min among all the numbers (takes n number of params)
// console.log(Math.min(12,45,7,0, -2));

// it returns max among all the numbers (takes n number of params)
// console.log(Math.max(12,45,555,1,3));

// it returns any decimal number randomly between 0 to 1
// console.log(Math.random());

// it returns round up value if .5 or greater then will return next int or if .4 or lesser then it will retrun same int
// console.log(Math.round(5.566));
// console.log(Math.round(5.466));

// it retruns only int part even if there is any decimal
// console.log(Math.trunc(98.434534));

// it returns upper int value for given decimal number
// console.log(Math.ceil(4.342455));

// it returns lower(same) int value for given decimal number
// console.log(Math.floor(4.342455));


/**
 ** DOM, BOM, Window ->
 */

//  window -> contains DOM, BOM, JS (whatever you see in browser its called window)
// DOM -> related to HTML tags. need to write document in every step while accessing inner elements
// JS -> related to objects, arrays, fucntions
// BOM -> except DOM and JS everything is BOM. navigation, screen, location, history

// DOM ->

// structure : document -> html -> head, body -> elements under body or head

// we can access elments here like json format using . operator and to access anything inside dom we need to mention document

// document -> it will return all element
// document.documentElement -> it will return element from HTML to HTML tag
// document.body.childNodes -> it will give all html elememt under body tag(including text element for space, tab, enter etc..)
// document.body.children -> it will give all html elemet under body which are visible in code(except text element)
// document.body.children.length -> it will return length of children(how many childrens are present)
// document.body.hasChildNodes -> it will return true if it has child else false
// document.body.firstChild -> it will return first child under body tag includes text(space, tab, enter etc..)
// document.body.firstElementChild -> it will return first child under body excludes text(space, tab, enter etc..)
// document.body.parentElement OR document.body.parentNode -> it will return parent of body tag 
// document.body.previousSibling -> it will return previous (elder) sibling includes text(space, tab, enter etc..)
// document.body.previousElementSibling -> it will return previous (elder) sibling excludes text(space, tab, enter etc..)
// document.body.nextSibling -> it will retrun next (younger) sibling includes text(space, tab, enter etc..)
// document.body.nextElementSibling -> it will retrun next (younger) sibling excludes text(space, tab, enter etc..)


// refer dom.html to know how we can access tag using id, class, tag, name and queryselector


/**
 ** Events->
 */

 // when we try to access any webpage or do anything on webpage its consider as event. 
 // whenever we click on any button we are actually peforming events in background
 // in JS we have event who store every value of events.

 // four ways of writing events
 // 1. Using inline alert
 // 2. By calling function(Common way) 
 // 3. By using DOM and event(onclick)
 // 4. By using DOM and addEventListener

 // we can get multiple values from event object -> event.key, event.type, event.target

 // mouse event -> onmousedown, onmouseup, onmouseenter, onmouseleave
 // keyboard event -> onkeypress, onkeydown, onkeyup
 // input event -> onchange


 // timing based event ->

 // 1. setTimeout(function, seconds) -> it will start executing defined function in param after defined seconds only once.
 // 2. clearTimeout(reference of setTimeout) -> to stop setTimeout we need to create referece of it as below and pass it to clearTimeout.
        // const obj = setTimeout(function, seconds);
        // clearTimeout(obj);


// 3. setInterval(function, seconds) -> it will start executing defined function in param after defined seconds for infinte time.
// 2. clearInterval(reference of setInterval) -> to stop setInterval we need to create referece of it as below and pass it to clearInterval.
        // const obj = setInterval(function, seconds);
        // clearInterval(obj);

 // refer event.html for practical demo

 /**
 * * Objects -> 
 */

 // it is used to store key, value pair just like map in Java
// let bioData = {
//         // to store object inside object
//         Name : {
//                 firstName : "Omkar",
//                 lastName : "Pedamkar",
//         },
//         Age : 23,
//         Field : "Computer Engineer",
//         // to store function inside object
//         myfunction : function(){
//                 console.log(`Hello ! My name is Omkar Pedamkar`);
//         }
// }
// console.log(bioData.Age); // to access value from key in object
// bioData.myfunction(); // to access function from object
// console.log(bioData.Name.firstName); // to access value from nested objcet

// to use dynamic key in object -> if we want to use dynamic key then we need warp key under []
// let myKey = 'Name';
// let MyData = {
//         [myKey] : "Omkar Pedamkar", // [myKey] it represents 'Name' here
// }
// console.log(MyData);

// to get all keys of object ->
// console.log(Object.keys(bioData));

// to get all values of object ->
// console.log(Object.values(bioData));

// to convert object into array ->
// console.log(Object.entries(bioData));

// suppose we want to convert it back into object again ->
// let objToArray = Object.entries(bioData);
// console.log(objToArray);
// let arraytoObj = Object.fromEntries(objToArray);
// console.log(arraytoObj);


/**
 * * this keyword -> 
 */
 
// this keyword always tries to find object if it get then it belong to that object else it will belong to default window object.

// example 1:

// try on browser and it wont find any object so it will belong to window and now we can access window values
// console.log(this); 

// example 2:

// still it will belong to window only as it wont find any object in function
// let myfun = function(){
//         console.log(this);
// }
// myfun();

// example 3:

// here it will belong to bioData object and we can access any value, methods or itself biodata using this
// let bioData = {
//         Name : "Omkar Pedamkar",
//         Age : 23,
//         myfun : function(){
//                 console.log(this);
//                 console.log(`Hello ! My name is ${this.Name} and I'm ${this.Age} yrs old`);
//         }
// }
// bioData.myfun();

// example 4:

// here this will belong to name object as its always belongs to nearest object
// let bioData = {
//         // to store object inside object
//         Name : {
//                 firstName : "Omkar",
//                 lastName : "Pedamkar",
//                 myfun : function(){
//                         console.log(this);
//                 }
//         },
//         Age : 23,
//         Field : "Computer Engineer",
//         // to store function inside object
//         myfunction : function(){
//                 console.log(`Hello ! My name is Omkar Pedamkar`);
//         }
// }
// bioData.Name.myfun();

// NOTE : Arrow function doesnt support this keyweord it will return window object even if its inside object


/**
 * * Array and Object destructuring  -> 
 */

// instead of accessing values using index we can use array destructing as follow ->

// let myBioArray = ['Omkar', 'Pedamkar', 23]
// let [firstName, lastName, age] = myBioArray;
// console.log(myBioArray[0]); // old way using index
// console.log(firstName); // using array destructuring 

// to add new value in destructuring 
// let [firstName, lastName, age, degree='BTech'] = myBioArray;
// console.log(degree);


// instead of accessing values using . operator we can use object destructuring as follow ->
// same as array instead of [ ] need to use { }

// myBioObject = {
//         firstName : "Omkar",
//         LastName : "Pedamkar",
//         Age : 23
// }

// let {firstName, LastName, Age} = myBioObject;
// console.log(myBioObject.firstName); // old way using . operator
// console.log(firstName); // using object destructuring 

// to add new value in destructuring 
// let {firstName, LastName, Age, degree="BTech"} = myBioObject;
// console.log(degree);


/**
 * * rest operator  -> 
 */

// this function will return sum of only 2 number
// function sum(a, b){
//     let sum = a + b;
//     return sum;
// }
// console.log(sum(2,3));

// but using rest operator -> ...input we can pass multiple value and now input will act as array
// function sumAll(...input){
//      let sum = 0;
//      for(let element of input){
//         sum = sum + element;
//      }
//      return sum;
// }
// console.log(sumAll(2,3,5,6,7,325,6,10));


/**
 * * spread operator  -> 
 */

// let color = ["Red", "Green", "Blue"];
// suppose we want to add add new colors in new array + old above color 

// using old way we can add all values of color and then we can add new colors 
// let newColor = ["Red", "Green", "Blue", "Black", "White", "Yellow", "Brown"];
// but we can use spread operatior -> ...color | it will fetch all values in it and we can add new colors
// let newColor2 = [...color, "Black", "White", "Yellow", "Brown"]
// console.log(newColor);
// console.log(newColor2);

// NOTE : we can use it in object as well

/**
 * * BigInt -> 
 */

// if big number occurs then JS cant handle it so we can add 'n' after that big number 

// max number value -> 9007199254740991
// let maxNumber = Number.MAX_SAFE_INTEGER;
// console.log(maxNumber);
// add 'n' so we can work with big numbers 
// console.log(9007199254740991n + 100000n);


/**
 * * use strict -> 
 */

// it asks to write code in strict manner ->
// "use strict";
// x = 3.14;  // This will cause an error (x is not defined).
// let x = 3.14 // strict manner


/**
 * * Event Propagation -> 
 */

// what if ? we use event on nested tag then if we click anyone then both even will fire. we have two modes to propagate event(travel of event).
// 1. bubbling phase -> bottom to up travel -> first inner event will fire then outer event
// 2. capture phase -> top to down travel -> first outer event will fire then inner event
// by default JS uses bubbling phase.
// refer event_propagation.html file for more

/**
 * * Higher order function and Call back function -> 
 */

// Higher order function -> a function which accepts another funtion inside its parameter
// call back function -> a function which we can pass as paratmeter in another function 


// simple calculator using Higher order function and Call back function

// These are four functions to handle basic operation 
// let add = (num1, num2) => num1 + num2; 
// let sub = (num1, num2) => num1 - num2;
// let mul = (num1, num2) => num1 * num2;
// let div = (num1, num2) => num1 / num2;

// calculator to call any one method out of above four
// let calculator = (num1, num2, operation) => {
//      // here operation is method -> add/sub/mul/div
//      return operation(num1, num2);
// }

// now here add acts as call back function whereas calculator acts as higher order function.
// console.log(calculator(2,3,add));

/**
 * * Lexical scoping -> 
 */

// Inner function or block of code can access outer function or variable but outer function cannot access inner function or variable.

// let a = "I'm global variable ";
// const first = () => {
//         let b = "I'm inside first function ";
//         const second = () => {
//                 let c = "I'm inside second function ";
//                 console.log(a+b+c);
//         }
//         second();
//         // now here we can access a and b but not c
//         console.log(a+b+c);
// }       

// first();

/**
 * * Synchronous v/s Asynchronous -> 
 */

// Synchronous -> do it step by step. if step 1 completed then only we can go for step2
// Asynchronous -> it may or may not be squential. if step 1 is taking time then it will ask step2 to execute

// Synchronous ->

// let first = () => {
//         console.log("inside function first!");
// }

// let second = () => {
//         console.log("inside function second!");
//         first();
//         console.log('inside function second again!')
// }
// second();

// here it goes step by step: first execute log statement then it will call first function then inside of it log get printed and then remaining part of second


// Asynchronous ->
// let first = () => {
//         setTimeout(() => {
//                 console.log('Inside function first!');
//         }, 4000);
// }

// let second = () => {
//         console.log("inside function second!");
//         first();
//         console.log('inside function second again!');
// }
// second();
// here it will first execute the log statement then it wil go for first function. Inside that it will find setTimeout method which is asynchrous which means it will execute when its schedulle if any steps are remaining then those can excute so here it will run second log statement then if 4 secs complete then it will run setTimeout.


/**
 * * Event loop -> 
 */
// if there is 3 functions(synchronous) which nested then fun1 will go into stack. then fun2 will go. after than fun3 will go.once fun3 gets executed completely it will pop out from stack. now same with fun2 then fun1. Simple auxiliary stack 
// but if there is any async method then flow will be different.
// let first = () => {
//         setTimeout(() => {
//                 console.log('Inside function first!')
//         }, 4000);
// }

// let second = () => {
//         console.log("inside function second!");
//         first();
//         console.log('inside function second again!')
// }
// second();

// here second() will get added in stack. then it will add c.log() into stack. once it is done then it gets pop out from stack. now it will add first function in stack.and then it will add setTimeOut since this is async it will move to web API untill its done(here 4 secs) meanwhile first will try to complete its execution to complete first. then first will pop out from stack. then c.log function will gets add in stack then it will get pop out. then there is no step so second will get pop out. suppose in between async method is ready to execute then it will pass from web API to message queue. once message ready it will go back to stack and it will execute.


/**
 * * Function currying -> 
 */
//Currying is a technique of evaluating function with multiple arguments, into sequence of function with single argument.in short instead of calling function with multiple arguments we can call same function with multiple times in sequence with single argument


// Normal way to calculate sum of three numbers ->
// let sum = (num1, num2, num3) => console.log(num1+num2+num3);
// sum(4,5,6);

// using function currying ->
// In other words, when a function, instead of taking all arguments at one time, takes the first one and return a new function that takes the second one and returns a new function which takes the third one, and so forth, until all arguments have been fulfilled.
// let sum = (num1) => {
//         return (num2) => {
//                 return (num3) => {
//                         console.log(num1+num2+num3);
//                 }
//         }
// }

// simplified version ->
// let sum = (num1) => (num2) => (num3) => console.log(num1+num2+num3);
// sum(4)(5)(6);

/**
 * * Callback hell -> (Nested callback function)
 */

// setTimeout(() =>{
//         console.log("Work1 is done");
//         setTimeout(() => {
//                 console.log("Work2 is done");
//                 setTimeout(() => {
//                         console.log("Work3 is done");
//                         setTimeout(() => {
//                                 console.log("Work4 is done");
//                         }, 1000);
//                 }, 1000);
//         }, 1000);
// }, 1000);


/**
 * * Work with API using XMLHttpRequest, Promises and async-await -> 
 */

// To convert JS object into JSON and JSON to JS object->
// let obj = {
//         name : 'Omkar',
//         age : 23,
//         phone : '7875871590'
// };

// let JSONobj = JSON.stringify(obj); // using JSON.stringify() we can convert JS object into JSON
// console.log(JSONobj);

// let JSobj = JSON.parse(JSONobj); // using JSON.parse() we can convert JSON into JS object
// console.log(JSobj);

//  if we get HTML data from API then we can convert HTML data into JSON as follow ->
// let JSONdata = res.json(); // here res is HTML data


// 1. XMLHttpRequest -> to work with this we need to create its object first then we can open that object with method type and url. after that we can send request and get the API data. for more refer 'Project1' folder.

// 2. Promises -> basically it either give you yes or no. it uses two method to catch yes or no ans.
//.then() -> it will get response if promise is fullfilled 
//.catch() -> it will catch any error if promise rejected.
// we can use fetch method to get data using promises. for more refer 'Project2' folder.

// 3. async-await -> to avoid use promises we can use async await feature ->
// basically await hold the code to execute until its line done
// and await only works with async function. for more refer 'Project3' folder.



