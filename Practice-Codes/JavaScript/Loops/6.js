let randNum = Math.floor(Math.random() * 100) + 1;
let n;

for (let i = 1; i <= 100; i++) {
    n = prompt("Enter the number (0 - 100):");

    n = Number(n);
    if (isNaN(n) || n < 0 || n > 100) {
        console.log("Invalid input. Please enter a number between 0 and 100.");
        i--; 
        continue;
    }

    console.log(`You entered: ${n}`);

    if (n > randNum) {
        console.log("Lower no. please!");
    } else if (n < randNum) {
        console.log("Higher no. please!");
    } else {
        console.log(`You have got the number in ${i} attempts!`);
        break;
    }
}
