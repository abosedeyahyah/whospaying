
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



 
