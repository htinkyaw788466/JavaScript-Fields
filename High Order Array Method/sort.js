const people=[
    {
        fullName:'john doe',
        emai:'john@gmail.com',
        isMarried:true,
        age:24
    },
    {
        fullName:'ali smith',
        emai:'ali@example.com',
        isMarried:true,
        age:23
    },
    {
        fullName:'william jackson',
        emai:'jackson@yahoo.com',
        isMarried:false,
        age:21
    },
    {
        fullName:'chucky billy',
        emai:'chucky@gmail.com',
        isMarried:false,
        age:22
    },
]

const sortedByAge=people.sort((a,b)=>(a.age-b.age));
console.log(sortedByAge);