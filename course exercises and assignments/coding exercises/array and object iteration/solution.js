// Task 1
var dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];

function logDairy() {
  for (product of Object.keys(dairy)) {
    console.log(dairy[product]);
  }
}
logDairy();

// Task 2
const animal = {
  canJump: true,
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
  for (properties of Object.keys(bird)) {
    console.log(properties + ": " + bird[properties]);
  }
}
birdCan();

// Task 3
function animalCan() {
  for (animals in bird) {
    console.log(animals + ": " + bird[animals]);
  }
}
animalCan();
