/*const myObject = {
    property: 'Value!',
    otherProperty: 77,
    "obnoxious property": function() {
      console.log("Doing stuff!");
      this.property = 'New Value!';
    }
};

console.log(myObject.otherProperty);
myObject["obnoxious property"]();
console.log(myObject.property);*/

/*const playerTwo = "Loki";
const playerOneHealth = 100;
const playerTwoHealth = 100;


const playerOne = {
  name: "Odin",
};*/

//object constructors
// function Player(name, health){
//   this.name = name;
//   this.health = health;
//   console.log(this.name);
//   console.log(this.health);
// }

// let player1 = new Player("Mark", 100);

// return(player1.name);


let globalAge = 23; // This is a global variable

// This is a function - and hey, a curly brace indicating a block
function printAge(age) {
  var varAge = 34; // This is a function scoped variable

  // This is yet another curly brace, and thus a block
  if (age > 0) {
    // This is a block-scoped variable that exists
    // within its nearest enclosing block, the if's block
    const constAge = age * 2;
    console.log(constAge); // This will work
  }

  // Remove or comment out this line, as constAge is not accessible here
  // console.log(constAge);
}

printAge(globalAge);

// Remove or comment out this line, as varAge is not accessible here
// console.log(varAge);