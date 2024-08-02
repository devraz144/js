const marvel =["thor" , "ironman", "spider"];
const dc = ["superman", "flash ", "batman"];

// it will think that dc is the new elemnt of type array 
// marvel.push(dc);
// console.log(marvel);


//.concat(arr2) = it is used to add the two array and it retutn the new array 
 const x = marvel.concat(dc);
// console.log(x);

// to add another array we also do spreadation [...arr1, ...arr2,...arr3];

const all_new = [...marvel , ...dc];
//console.log(all_new);

// .flat() to make it one d array or to remove confusion  in the parenthesis we also have to give the depath

const arr = [1,2,3,4,5,6,6,[2,3,4,[4,45,[34,34,]]]];
const original_arr= arr.flat(Infinity);
// console.log(original_arr);
// console.log(arr.length);//8
// console.log(original_arr.length);// 14

// Array.isArray(arr) -> to know that it is the array or something else
console.log(Array.isArray(dc));

// Array.from("hitesh") -> it is used to convert the given thing to the array 

// Array.of( var1, var2, var3 ) // it is used to convert the existing elemetn into the new arrray 



