// Write your code here
let name = "Alade Oluwatimileyin";
let age = 23;
let isMarried = false;
let guestName = prompt("Enter your name.");

if (guestName) {
  alert(`Hello ${guestName} you're welcome!`);
} else {
  alert("Ooops! You didn't enter a name!");
}

function simpleQuestion() {
  if (confirm("Would you like to know something about me?")) {
    alert(
      `My name is ${name}, I am ${age} years of age and it is ${isMarried} that I am married.`
    );
  } else {
    alert("Thank you for your time!");
  }
}

simpleQuestion();

console.log(name, age, isMarried);
