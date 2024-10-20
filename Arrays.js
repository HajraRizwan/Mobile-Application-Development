// Ternary Operator: A shorthand for if...else. It takes three parts: a condition, the result if the condition is true, and the result if it's false.
let name="Hajra";
let age=20;
// let variable = condition ?(if) Yes :(else) NO ;
let Display= age>10 ? name : "no name can be displayed";
console.log(Display);




// Objects: Objects store data as key-value pairs and can be accessed using dot notation or bracket notation.
const cars={name:"Hajra", age:20};
console.log(cars.name);
console.log(cars["age"]);
console.log(cars);



// Destructuring: A way to unpack values from arrays or objects into distinct variables.
const destructing_array={names:"Hajra", ages:20};
const {names,ages} =destructing_array ;
console.log(ages);




// Arrays can store multiple values in a single variable. JavaScript arrays can contain different data types.
const arr=[1,2,3,4,5];
console.log(arr);

// Mixed array
const array=[1,2,{name:"Hajra", age:20}];
console.log(array[1]); 
console.log(array[2].age);
console.log(array[3]);




// Array types:
//  1- .map()
// Purpose: Transforms each element in an array and returns a new array with the transformed elements.
// Daily Life Example: Imagine you have a list of prices in dollars, and you want to apply a 10% discount to each price.
const a=[1,2,3,4,5];
// new_variable=array_declared_variable.map(element_iterate=>{return element_iterate *2}); console.log(new_variable)
const A=a.map(elements=>{
    return elements*2;
});
console.log(A);




// 2- .filter()
// Purpose: Filters out elements from an array that don't meet a condition and returns a new array with only the elements that do.
// Daily Life Example: Suppose you have a list of ages, and you want to find all ages that are 18 or older.
const b=[1,2,3,4,5];
// new_variable=array_declared_variable.filter(element_iterate=>{return element_iterate >3}); console.log(new_variable)
const B=b.filter(elements=>{
    return elements>3;
});
console.log(B);




// 3- .reduce()
// Purpose: Reduces an array to a single value by applying a function that combines elements.
// Daily Life Example: If you have a list of numbers and want to find the total sum.
// new_variable=array_declared_variable.reduce((basket,element_iterate)=>{return basket + element_iterate },initial value from where we start); console.log(new_variable)
const numbers = [1, 2, 3, 4];
const total = numbers.reduce((sum, current) => {
    return sum + current; // sum is like a basket where we keep total
}, 0); 
console.log(total); 




