// A Promise is like a "promise" that something will happen in the future. It can either succeed or fail. You use Promises to handle operations that take time, like loading data from a server.

// Create a new Promise
const myPromise = new Promise((resolve, reject) => {
    let success = true; // This can be true or false
  
    // Check if the operation was successful
    if (success) {
      // If successful, call resolve
      resolve("The operation was successful!");
    } else {
      // If there was an error, call reject
      reject("There was an error.");
    }
  });
  
  // Use the Promise
  myPromise
    .then(result => console.log(result)) // This runs if the promise is successful
    .catch(error => console.log(error)); // This runs if there was an error

    



    //  Another Example
    // Simulating a pizza order
const pizzaOrder = new Promise((resolve, reject) => {
    let isPizzaDelivered = true; // Change this to false to simulate a failed order
  
    if (isPizzaDelivered) {
      resolve("Yay! Your pizza is delivered!");
    } else {
      reject("Oops! There was a problem with your pizza order.");
    }
  });
  
  // Handling the pizza order
  pizzaOrder
    .then(result => console.log(result)) // Runs if the pizza is delivered
    .catch(error => console.log(error)); // Runs if there was a problem
  