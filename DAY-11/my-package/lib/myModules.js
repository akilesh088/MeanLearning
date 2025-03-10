function myFunction() {
    return "Hello from my package!";
}

module.exports = {
    myFunction,
};

function myAsyncFunction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello from async function!");
        }, 1000);
    });
}

module.exports = {
    myFunction,
    myAsyncFunction,
};