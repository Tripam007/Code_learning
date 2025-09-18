let gameNum = 45;

let user = prompt("Guess the no. :");
while(user != gameNum){
   user = prompt("You've guessed the wrong number. Try again!");
}
console.log("You have guessed the correct no.")