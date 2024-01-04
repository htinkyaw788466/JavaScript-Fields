//object properties
const person={
    authorName:'John Doe',
    email:'john@example.com',
    city:'San Francisco',
    isMarried:true,
    hobbies:['hiking','books_collection','guitar'],
    birthYear:1999,
    yearNow:2023,
    socialLinks:[
        {
            facebook:'http://www.facebook.com/johndoe222'
        },
        {
            x:'http://www.x.com/@john234'
        }
    ],
    address:{
        street:'DA 22'
    },
    calcAge:function(){
        return this.yearNow-this.birthYear;
    }
}

console.log(person);
console.log(person.authorName);
console.log(person.hobbies[1]);
console.log(person.socialLinks[1]);
console.log(person.address.street);

const {authorName,address:{street}}=person;
console.log(authorName);
console.log(street);

person.family=['william','chucky'];
console.log(person);

const todos=[
    {
        id:1,
        text:'hello world',
        isCompleted:true
    },{
        id:2,
        text:'nice',
        isCompleted:false
    },
    {
        id:3,
        text:'goodbye world',
        isCompleted:true
    }
];

console.log(todos[0].text);

for(let i=0;i<todos.length;i++){
    console.log(todos[i].isCompleted);
}

for(let todo of todos){
    console.log(todo.text);
}

const todoJson=JSON.stringify(todos);
console.log(todoJson);

//forEach
todos.forEach((todo)=>{
    console.log(todo.text);
});

//for map
const todoText=todos.map((todo)=>{
    return todo.text;
});

console.log(todoText);

//for filter
const todoCompleted=todos.filter((todo)=>{
    return todo.isCompleted==true;
}).map((todo)=>{
    return todo.text;
});
console.log(todoCompleted);