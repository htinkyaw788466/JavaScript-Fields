var massMark=78; //kg
var heightMark=1.69; //meters

var massJohn=92; //kg
var heightJohn=1.92; //meters

var BMIMark=massMark/(heightMark*heightMark);
var BMIJohn=massJohn/(heightJohn*heightJohn);

var MarkHigherBMI=BMIMark>BMIJohn;
console.log('Is Mark BMI higer than John BMI?',MarkHigherBMI);