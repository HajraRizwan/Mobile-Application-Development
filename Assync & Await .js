// Use async to create a function that works with promises.
// Use await inside that function to pause and wait for a promise to finish before continuing.


// Example: Think of it like waiting for a friend to bring you a drink:
// async function: You tell your friend, “Hey, I’m going to ask you for a drink.” (You set up the situation.)
// await: You wait patiently for them to come back with the drink. (You pause your action until they return.)



// This is an async function to get data
async function getData() {
    // Create a promise that will finish in 2 seconds
    const myPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data received");
      }, 2000); 
    });
  
    // Wait for the promise to finish and get the result
    const result = await myPromise;
  
    // Print the result
    console.log(result); // Output: Data received
  }
  
  // Call the function to run it
  getData();
  






//   Another Example
async function fetchData() {
    const myPromise = new Promise((resolve) => {
      setTimeout(() => resolve("Data received"), 2000);
    });
    const result = await myPromise;
    console.log(result); // Output: Data received
  }
  
  fetchData();
  