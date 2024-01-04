const people=[
    {fullName:'john doe',age:14},
    {fullName:'william smith',age:23},
    {fullName:'chucky billy',age:25},
];

//console.log(typeof people);
const overedAgePeople=people.filter(person=>person.age>=18);
console.log(overedAgePeople);

const words=['hello','excellent','goodbye','nice','good'];
const longWords=words.filter(word=>word.length>=5);
console.log(longWords);