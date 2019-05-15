// var a = 4; //global variable

// if (a < 5) {
//     var a = 24;
// }

// console.log(a)//24

 //*********************** */

// var a = 4; //global variable

// if (a < 5) {
//     let a = 24 //once the block is executed it will release that value like a temporary variable
// }

// console.log(a); //4

// var a = 4;
// function fun(){
//     var a = 24
//     return a
// }

// console.log(a); //4
// console.log(fun(a)); //24 because function returns a
// console.log(a); //4 since it does not change a

//*************************** */
// var a = 3;

// console.log(`a in the global ${a}`); //a is 3 

// for(var a = 0; a < 10; a++){
//     console.log(a);
// }

// console.log(`a in the global ${a}`); //a is 9 after using var in a for loop



// var a = 3;

// console.log(`a in the global ${a}`); //a is 3 

// for(let a = 0; a < 10; a++){ //let basically releases the variable
//     console.log(a);
// }

// console.log(`a in the global ${a}`); //a is 3 after using let in a for loop

/******************************* */

// var snack = 'meow mix';

// function getFood(food){
//     if (food) {
//         //local block
//         var snack = 'friskies';
//         //if block return
//         return snack;
//     }
//     //function return
//     return snack;
// }

// console.log(getFood(false));//var returns undefined but let returns the global variable
// console.log(snack)


//******************************* */

// let a = 4;
// let b = 45;

// //let test = "a: " + a + " b: " + b;

// let test = `a: ${a} b: ${b}`;

// console.log(test);

//********************************* */

// let what = 'they\'re'

// let text = `They're here but she said "jajajaja"`

// console.log(what);
// console.log(text);

// var name = 'tiger';
// var age = 13;

// console.log(`My ${name} is at the age of ${age}`);

// var random = [
//     'cat',
//     'dog',
//     'nickelodeon'
// ].join('\n')

// console.log(random);

// let random1 = (`cat 
// dog 
// nickelodeon`);
// //how you write things is going to show up the way it is. back slash quote
// console.log(random1);

//********************************* */
//template literals can accept expressions as well:

// let today = new Date();
// let text = `the time and date is ${today.toLocaleString()}`;
// console.log(text);

// var arr = [1, 2, 3, 4];
// var a = arr[0]; //1
// var b = arr[1]; //2
// var c = arr[2]; //3
// var d = arr[3]; //4

// let [a, b, c, d] = [1, 2, 3, 4];
// console.log(a);
// console.log(b);


//deconstructuring **********************/
// var luke = {occupation: 'jedi', father: 'anakin'};
// // var occupation = luke.occupation; //'jedi
// // var father = luke.father; //'anakin

// let {occupation, father} = luke;
// console.log(occupation); //'jedi'
// console.log(father); //'anakin'

//********************************** */
// function fun(){
//     return "hello world"
// }

// console.log(fun());

// //in ES6:

// var fun1 = () => "hello world"
//the return is understood if it's used in one line

// var materials = [
//     'hydrogen',
//     'helium',
//     'lithium',
//     'beryllium'
// ]

// console.log(materials.map(material => `${material}s`));

//************************************ */
//THIS

// function getType(){
//     console.log(`Type is: ${this}`)
// }

// getType();

//********************************* */
//DEFAULT PARAMETERS

// function addTwoNumbers(x, y){
//     x = x || 0;
//     y = y || 0;
//     return x + y;
// }
// //default is 0 if there's no value
// var result1 = addTwoNumbers();
// console.log(result1);

// function addTwoNumbers1(x=0, y=0){
//     return x + y;
// }

// var result2 = addTwoNumbers1();
// console.log(result2);

//basically just another default value if nothing was passed in

//REST PARAMETERS
// var argument = [1, 5, 7, 3, 8, 2];

// function logArguments(){
//     for(let i = 0; i < argument.length; i++){
//         console.log(argument[i]);
//     }
// }

// console.log(logArguments());

//*************************************** */
//CLASSES

// function Person(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;

//     function incrementAge(){
//         return this.age++;
//     }
// }

// let michael = new Person('michael', 26, 'male');
// let chris = new Person('chris', 28, 'male');
// let alfie = new Person('alfie', 28, 'male');

// console.log(alfie.name);
// console.log(michael.age);

// class Person {
//     constructor(name, age, gender){
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }

//     incrementAge() {
//         this.age += 1;
//     }
// }

// let michael = new Person('Michael', 21, 'male')
// console.log(michael.incrementAge());
// console.log(michael);

// function sum(){
//     for(let i = 0; i < Arr.length; i++){
//         let sum = 0;
//         sum += arr[i]
//         return sum
//     }
// }

// function sum(...args){
//     for(let arg of args){
//         var sum = 0;
//         sum = sum + arg;
//         return sum
//     }
// }

// console.log(sum(2, 4, 6, 1));


// var a = 5;
// var b = 10;

// if(a > b){
//     c = a + b + c;
//     let c = 2;
//     console.log(c);
// }

// let isNumber = (a) => {
//     if(typeof a === "number"){
//         return 'this is a number'
//     } else {
//         return 'this is not a number'
//     }
// }

// console.log(isNumber(10));

//turning this into turnerary operator
//ALSO PRACTICES

// condition ? result1 : result2

// let isNumber = (a) => {
//     typeof a === "number" ? "number" : "not a number"
// }

// console.log(isNumber(10));


// function mult(a, b){
//     return a*b
// }

// let multi = (a, b) => a*b;

// console.log(multi(2, 4))

// let obj = {
//     x: 5,
//     y: 20,
//     z: 3
// }

// let multi = (o) => {
//     let{x, y, z} = o;

//     return x * y * z;
// }


//************************************* */
//USE SPREAD OPERATOR
//makes a new copy
// let a, b, c, d, arr;

// a = [1, 2]
// b = [4, 5]
// c = [8, 9, 10]
// d = 11

// arr = [0, ...a, 3, ...b, 6, 7, ...c, d]
// console.log(arr);

// let vowelCount = 0;
// let vowels = ['a', 'e', 'i' , 'o', 'u'];

// let str = "Today is a sleepy day";

// for (let i = 0; i < str.length; i++){
//     if(vowels.includes(str[i])){
//         vowelCount++;
//     }
// }
// console.log(vowelCount);


// for(let s of str) {
//     if(vowels.includes(s)){
//         vowelCount++;
//     }
// }
// console.log(vowelCount);

var a = 'first';
var b = 'second';

console.log(a, b);
//to reverse this in ES6

[b, a] = [a, b]
console.log(a, b);