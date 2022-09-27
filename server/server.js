const express= require('express');

const app = express();


//Make files in the server/public folder available to anyone who wants them
app.use(express.static('./server/public'));

app.listen(3000, function(){
    console.log("We're live!");
});


//do not commit node_modules files. It's large. Can tell Git to ignore node_modules folder. gitignore in the root. 


// // function add(n1, n2){
//   return n1 + n2;
// }


// arrow function   WE WILL MOSTLY USE ARROW FUNCTIONS
// const add =(n1, n2) => {
//     return n1 + n2;
// }



//.listen() is a method that accepts two parameters

//this is similar to the onReady function in jquery

//3000 is the port we are listening to. 
//localhost:portNumber no space
//cannot GET means the server is working

//anonymous functions- have no name. can only used if being assigned to a variable
// app.listen(3000, function(){
//     console.log("We're live!");
// });


// 
// app.listen(3000, ()=>{

//     console.log("We're in a function")
// });




console.log('I am in server.js ');

// control/C to stop live server







