function tipCalculator(bill){
    var percentage;
    if(bill<50){
        percentage=.2;
    }else if(bill>50&&bill<200){
        percentage=.15;
    }else{
        percentage=.1;
    }
    return bill*percentage;
}

var bills=[124,48,268];
var tips=[
    tipCalculator(bills[0]),
    tipCalculator(bills[1]),
    tipCalculator(bills[2])
];

var finalValues=[
    bills[0]+bills[0],
    bills[1]+bills[1],
    bills[2]+bills[2]
];

console.log(tips,finalValues);