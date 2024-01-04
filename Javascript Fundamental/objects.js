//object properties

const user={
    fullName:'John Admin',
    email:'john@example.com',
    job:'lawer',
    hobbies:['hiking','books_collection','guitar'],
    isMarried:false,
    yearNow:2023,
    birthYear:1999,
    socialLinks:[
        {
            facebook:'http://www.facebook.com/johnadmin3333/'
        },
        {
            x:'http://www.x.com/@john11'
        }
    ],
    address:{
        street:'DA 22'
    },
    calcAge:function(){
        return this.yearNow-this.birthYear;
    }
}

console.log(user);
console.log(user.fullName);
console.log(user.isMarried);
console.log(user.hobbies[1]);
console.log(user.socialLinks[1]);
console.log(user.address.street);

var {fullName,address:{street}}=user;
console.log(fullName);
console.log(street);

user.phone=['oppo','google pixel','apple'];
console.log(user.phone[1]);

console.log(user.calcAge());