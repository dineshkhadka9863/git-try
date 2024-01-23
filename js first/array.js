greetingPrefix = "hello";
greetingPrefix = "Hi";

console.log(greetingPrefix, "world");
console.log(greetingPrefix, "everyone");

count = 15;
activeStatus = true;

/* 
data type
  primitive datatypes
    text = string
    number = integer/float/double
    true/false boolean
    undefine // js specific
    null
 


  non primitive datatype / collection / reference datatype  
    -array
    -object

*/

/* declaration and initialization */
var title = "mern "; //ignore var keyword.
var title = "mern stack"; //ignore var keyword.

/* 
   es6 - 2015 js varsion
     new keywords
       let const
*/

let duration = "3.5 months";
/* let duration = "3 months"*/ // cannot reddeclare variable from let
duration = "3.5 months"; //but can reinitialize the value from from same variable
duration = "3.7 months";
duration = "3 months";

let userName; //declarition
userName = "abc"; //initialization
userName = "xyz"; //reinitialization

const PI = 3.145;
//PI = 3.14  //cannot change constant variable

const EARTH_DIRECTION = "W-E";

console.log(title);
console.log(duration);
console.log(PI);
console.log(userName);

let color;
console.log(color);

/* let class = "one"    // class is reserved datatype
console.log(class)  // class/var etc cannot be used as variable because it is used in oop based programming
 */

let name = "Dinesh";
console.log(name);

//let courses = "mern","python"  //wrong
//let courses = "mern,python"  //wrong way
// let course1 = "ai";
// let course2 = "ML";
// let course3 = "Data Science";

/* 
  Array
   -collection of different values
     -usually it is collection og similar datatype
     -always starts with index 0

   syntax:
   let <variable> = [<element1>,<element2>]
   eg:
   let fruits = ["apple","orange"]
   let fruits = ["0th index","1 index"]
   
*/
// let courses = ["mern", "python", "qa"];
// let upcommingCourses = [course1, course2, course3];

// console.log(courses);
// console.log(upcommingCourses);

let oddNumbers = [1, 3, 5, 7]; // right way
let evenNumbers = [2, 4, "six", "eignt"]; // wrong way
evenNumbers[2] = 6;
evenNumbers[3] = 8;
console.log(oddNumbers);
console.log(evenNumbers);

let friends = ["dinesh", "aashish", "gaurab"];
friends[2] = "sunil";
console.log("name of friends", friends);

let fruits = ["apple", "mango", "orange", "banana"];
fruits[4] = "kiwi";
console.log("name of fruits", fruits);


// let course1 = "mern"
// let course1Time= "3-4"
// let course1DurationTime= "3 hours"
// let course1status= true

// let course2 = "mern"
// let course2Time= "3-4"
// let course2DurationTime= "3 hours"
// let course2status= true

let courses
 courses = [["mern","qa"],["3","3"],["4","4"],["3-hours","3-hours"],[true,true]]
 

console.log(courses)