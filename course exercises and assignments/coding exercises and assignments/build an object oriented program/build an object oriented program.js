// Task 1: Code a Person class
class Person {
  constructor(name = "Tom", age = 20, energy = 100) {
    this.name = name;
    this.age = age;
    this.energy = energy;
  }
  // Code two methods in the Person class. Name those methods sleep() and doSomethingFun(
  sleep() {
    this.energy += 10;
  }
  // The doSomethingFun() method should take the existing energy level and decrease it by 10.
  doSomethingFun() {
    this.energy -= 10;
  }
}

// Task 2: Code a Worker class
class Worker extends Person {
  constructor(name, age, energy, xp = 0, hourlyWage = 10) {
    super(name, age, energy);
    this.xp = xp;
    this.hourlyWage = hourlyWage;
  }
  // it has the goToWork() method, which, whenever it's run, increases the value of the xp property by 10
  goToWork() {
    this.xp += 10;
  }
}

// Task 3: Code an intern object, run methods
/* instantiate the Worker class to code a new intern object.
The intern should have the following characteristics:
name: Bob, age: 21, energy: 110, xp: 0, hourlyWage: 10 */
var intern = new Worker("Bob", 21, 110, 0, 10);

// Run the goToWork() method on the intern object. Then return the intern object.
function intern() {
  goToWork(intern);
  return goToWork;
}

// Task 4: Code a manager object, methods
// Inside the manager function instantiate the Worker class to code a new manager object.
/* The manager object should have the following characteristics:
name: Alice, age: 30, energy: 120, xp: 100, hourlyWage: 30 */
var manager = new Worker("Alice", 30, 120, 100, 30);

// Run the doSomethingFun() method on the manager object. Then return the manager object.
intern.goToWork();
manager.doSomethingFun();
