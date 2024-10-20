//  A callback is a function passed as an argument to another function. It allows a function to be executed after another function has finished.
function myDisplayer(some) {
    console.log(some);
  }
  
  function myFirst() {
    myDisplayer("Hello");
  }
  
  function mySecond() {
    myDisplayer("Goodbye");
  }
  
  myFirst(); // Output: Hello
  mySecond(); // Output: Goodbye

  



// Asynchronous functions run in parallel with other functions. They are useful for tasks that take time, like network requests or file operations.
setTimeout(() => {
    console.log("This message is shown after 2 seconds.");
  }, 2000);
  


  
  // This function takes two numbers and a callback function
function addNumbers(num1, num2, callback) {
    let sum = num1 + num2;
    callback(sum); // Call the callback function with the result (sum)
  }
  
  // This is the callback function that will display the result
  function displayResult(result) {
    console.log("The sum is: " + result);
  }
  
  // Call addNumbers and pass displayResult as the callback
  addNumbers(5, 3, displayResult); // Output: The sum is: 8
  