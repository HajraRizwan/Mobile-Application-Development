// Global (Before ES6)
// Global Scope: Variables declared outside of any function are global and can be accessed from anywhere in your code.
name="Hajra";
function DisplayName()
{
    console.log("Global Variable: name=",name);
}
DisplayName();




// Function Scope (Before ES6)
//  Variables declared with var inside a function are only accessible within that function.
function DisplayAge()
{
    var age=20;
    console.log("Function Scope: age=",age);
}
DisplayAge();
//  console.log(age); ............. Error will be displayed as local variable cant run outside function.




// VAR: Redeclaration allowed
var a = 10;
var a = 20;  // No error
console.log("var a:", a);  // Output: 20



// Block Scope (With ES6)
// Variables declared with let or const are block-scoped, meaning they are only accessible within the nearest enclosing block {}.

// LET: Redeclaration not allowed in the same scope
let b = 30;
// let b = 40;  // Uncommenting this line causes an error: 'b' has already been declared

if (true) {
    let b = 40;  // Allowed in a new block scope
    console.log("let b inside block:", b);  // Output: 40
}
console.log("let b outside block:", b);  // Output: 30





// CONST: No redeclaration or reassignment allowed
const c = 50;
// const c = 60;  // Uncommenting this line causes an error: 'c' has already been declared
// c = 60;  // Uncommenting this line causes an error: Assignment to constant variable

console.log("const c:", c);  // Output: 50
