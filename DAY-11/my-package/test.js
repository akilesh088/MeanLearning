

const { myFunction, myAsyncFunction } = require('./index');

console.log(myFunction()); // Output: Hello from my package!

myAsyncFunction().then(console.log); // Output: Hello from async function!