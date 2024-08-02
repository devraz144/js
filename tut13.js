// array it is the collection of the element 

// different type of elemtn can also be there in an array like there can be  number as well as string 
// it can be resizable 
// shallow copy  -> permanat change


// decleration of array ->3type
const myarr = [1,2,3,4,5,6];
const myhereo=["shakitman ", "nagaraj"];
const arr =new Array(10,30, 29) ;

// first method 
myarr.push(7);
//console.log(myarr);

// second method 
myarr.pop();
//console.log(myarr);

//shift method -> it remove the first element of the array 
myarr.shift();
//console.log(myarr);

//unshift method ->it is used to add the first elemetn of the array 
myarr.unshift(99);
//console.log(myarr);

// includes method -> it is used to find wheateher that element exist or not 
// indexof -> if there is index of that then it will return the index if not exist then it will return -1 

//.join(arr2) -> it convert the array into the string 

const newArr = myarr.join();
// console.log(newArr);
// console.log(typeof newArr);

// slice -> dont change the main array but alos the second range is not inlcude
// splice -> it change the original array and remove the elemetn from first range to second range
