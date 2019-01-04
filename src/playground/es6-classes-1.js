class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi. I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }
}

//super runs the parent constructor function
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    //using !! double flips something, so it will return true or false if it is truthy or falsy.
    return !!this.major;
  }
  //modify parent class, super is the parent. You can overide the parent method
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }
    return description;
  }
}

class Traveller extends Person {
  constructor(name, age, home) {
    super(name, age);
    this.home = home;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.home) {
      greeting += ` I am visiting from ${this.home}.`;
    }
    return greeting;
  }
}

const me = new Traveller("Tawnie Bavaro", 33, "UK");
console.log(me.getGreeting());

const other = new Traveller();
console.log(other.getGreeting());
