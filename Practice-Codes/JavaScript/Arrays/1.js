let arr = [234,646,3,10,5556,32];
const output = arr.reduce((prev,curr) => {
    return prev > curr ? prev : curr;
});
console.log(output);