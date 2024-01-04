//constructor function
function Person(firstName,lastName,email,city,dob){
    this.firstName=firstName;
    this.lastName=lastName;
    this.email=email;
    this.city=city;
    //this.dob=dob;
    this.dob=new Date(dob);

    // this.getBirthYear=()=>{
    //     return this.dob.getFullYear();
    // }
    // this.getFullName=()=>{
    //     return `${this.firstName} ${this.lastName}`;
    // }
    Person.prototype.getBirthYear=()=>{
        return this.dob.getFullYear();
    }
    Person.prototype.getFullName=()=>{
        return `${this.firstName} ${this.lastName}`;
    }
}

//init object
const person1=new Person('john','doe','john@gmail.com','boston','3-12-1999');
const person2=new Person('william','smith','william@gmail.com','berlin','4-12-2000');

// console.log(person1);
// console.log(person2);

// console.log(person1.email);
// console.log(person2.email);

// console.log(person1.dob);
// console.log(person2.dob);

// console.log(person1.dob.getFullYear());
// console.log(person2.dob.getFullYear());

console.log(person1.getFullName());
console.log(person2.getFullName());

// console.log(person1.getBirthYear());
// console.log(person2.getBirthYear());