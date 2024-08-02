//const obj = new Object() // here singletion is formed and it is tthe method to make a object

const user = {
    
}
user.id = "d_evraz";
user.email = "devrajshar122"
user.age  =12;

//console.log(user);

const usertwo ={
   id:"devraj123",
   fullname:{
    firstname:"devraj",
    lastname:"sharma"
   }
}

//console.log(usertwo.fullname.firstname);// object inside the boject to access 

//const user3 ={user, usertwo}; // it will not add the element   while it will add it as an another object 

//const user3= Object.assign( user , usertwo); // user will store usertwo also 

const user3 ={ ...user , ...usertwo};// user will not store anything 
// console.log(user3)
// console.log(" herer we go ");
// console.log(user);

const users =[
    {
        id:1,
        email:'dev'
    },
     {
        id:2,
        email:"raj"
     },{
        id:3, 
        email:"sharma"
     }

]

//console.log(users[1]); // good to go 


// but all three below are being return int the form of array 
//console.log(Object.keys(users[0])); // .key is used to find all the keys int the object 
//console.log(Object.values(users[0])); // it return all the valuees 
//console.log(Object.entries(user)); // return all the key and value


// below return true or false ; true it that property exists 
//console.log(user.hasOwnProperty("age"));