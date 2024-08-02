// singleton 

// object literals 
//Object.create -> the object is made by construcation method and singleton is formed here 
const jsuser= { 
    name:"devraj",// name and age and all is get tracked as an string 
    age:15,
    location : "guna" , 
    email: "devaraj",
    islogedin : false ,
    "main thing " : " u the god ",
    //[mysymbol] : "rdbms"// not geting 1.0 
}


// console.log(jsuser.age);
// console.log(jsuser["email"]);

//console.log( jsuser.main thing )// it can not be accesible with dot operator 
console.log( jsuser["main thing "]);
//console.log( jsuser[mysymbol]); // not getting 1.1

jsuser.email = "devrajsharma123"; // we can change the value also 
//Object.freeze(jsuser)  // now by writng this you cant make any change further  by next line 

jsuser.greeting = function(){
    console.log(" helo js user ");
}

jsuser.greetingtwo = function(){
    console.log(` helo js user ${this.age}`);// this is replaced by object name 
}

//console.log(jsuser.greeting);//  it will return function anomyos 
// console.log(jsuser.greeting());// it will call the function  and it will also return undefined also 
// console.log(jsuser.greetingtwo());// just same 
