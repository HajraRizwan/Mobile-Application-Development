// Regular functions: They are standard functions declared using the function keyword. They can have a name and can be called from anywhere in your code.
function add(a, b) {
    return a + b; 
}
console.log(add(5, 3)); 



// Anonymous functions: They are functions without a name. They are usually assigned to variables or passed directly as arguments to other functions used as callbacks.
const multiply = function(a, b) {
    return a * b;
};

console.log(multiply(4, 2)); // Output: 8

setTimeout(function() {
    console.log("This is an anonymous function!");
}, 1000);





// Arrow functions are a newer, more concise way to write functions introduced in ES6 (a version of JavaScript). They are always anonymous and have a simpler syntax.
const divide = (a, b) => {
    return a / b;
};
console.log(divide(10, 2));

const square = x => x * x;
console.log(square(5));

