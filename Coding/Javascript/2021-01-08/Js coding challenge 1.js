var markMass,markHeight;
var johnMass,johnHeight;

markMass = prompt("Enter the weight of Mark in Kgs");
markHeight = prompt("Enter the height of Mark in meter");
johnMass = prompt("Enter the weight of John in Kgs");
johnHeight = prompt("Enter the height of Mark meter");

var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);


var check = markBMI > johnBMI
console.log("Is Mark's BMI higher than John's?? " + check);
