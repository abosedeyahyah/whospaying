
/**var firstname = prompt("what is your name")
var secondname = prompt("what is the other name")
let lovescore =(Math.round(Math.random() * 100) + 1);

if (lovescore > 70) {
  alert("your lovescore is "  +  lovescore  + "%. your love is excellet");
}else if (lovescore < 70 && lovescore > 50) {
  alert("your lovescore is " + lovescore + "% your love is average");
}
 else {
 alert("your lovescore is " + lovescore + "%. your love poor"); 
}**/

// program to check leap year
/**function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// take input

const year = prompt('Enter a year:');

checkLeapYear(year);**/

//  to check leap year
/**const year = prompt('Enter a year:');
checkLeapYear(year);

function checkLeapYear(year) {
 const leap = new Date(year, 1, 29).getDate() === 29;
 if (leap) {
 alert(year + ' is a leap year');
} else {
 alert(year + ' is not a leap year');
 }

}**/


/**const countries = ["Nigeria", "Ghana", "Rwanda"];

countries.push("Kenya");

console.log(countries);**/




var names = ["aminat", "David", "smith", "Ola"];


function whosPaying(names){

    var names_length = names.length;
    var personnames = Math.floor(Math.random() * names_length );
    var randomperson = names[personnames];
    var output = randomperson + " is going to pay for the lunch today!";

    return output
    
}

whosPaying(names);
console.log( whosPaying(names) );

/**var number = prompt ("enter a  number")
let prime = true;
if(number === 1){
  console.log(" number is a prime  number ")
}else if(number > 1){
  console.log("number is not a prime number")
}else {
  console("the number is a prime number ")
}**/

var output = [];
var counter = 1;
function fizzbuzz[] {}


 
