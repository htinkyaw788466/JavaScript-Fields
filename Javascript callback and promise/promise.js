const posts=[
    {title:'post one',body:'This is post one'},
    {title:'post two',body:'This is post two'}
];

function getPosts(){
   setTimeout(() => {
    let output='';
    posts.forEach((post,index)=>{
        output+=`<li>${post.title}</li>`
    });
    document.body.innerHTML=output;
   }, 1000);
}

function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            posts.push(post);
            
            const error=false;

            //const error=true;

            if(!error){
                resolve();
            }else{
                reject('Error:something went wrong');
            }
        }, 2000);
    });
}

// createPost({title:'post three',body:'This is body three'})
// .then(getPosts)
// .catch(err=>console.log(err));

//Async/Await
// async function init(){
//     await createPost({title:'post three',body:'This is body three'});
//     getPosts();
// }
// init();



//Async/Await/Fetch
async function fetchUser(){
    const res=await fetch
           ('https://jsonplaceholder.typicode.com/users');
    
    const data=await res.json();
    console.log(data);       
}
fetchUser();

//promiese all
// const promise1=Promise.resolve('hello world');
// const promise2=10;
// const promise3=new Promise((resolve,reject)=>
//     setTimeout(resolve,2000,'goodbye'));
// const promise4=fetch('https://jsonplaceholder.typicode.com/users')
//                .then(res=>res.json());

// Promise.all([promise1,promise2,promise3,promise4]).then(values=>console.log(values));
