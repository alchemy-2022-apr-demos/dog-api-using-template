class Dog {
  id;
  name;
  age;

  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`my name is ${this.name} i hate UPS drivers woof woof!`);
  }

  static describeClass() {
    console.log('This is the Dog class.');
  }
}

const benny = new Dog(1, 'Benny', 7);
benny.speak();

// const benny = {
//   id: 1,
//   name: 'Benny',
//   age: 7,
//   speak: () => {
//     console.log('i hate UPS drivers woof woof!');
//   },
// };
// benny.speak();

const finley = new Dog(2, 'Finley', 4);
finley.speak();

Dog.describeClass();
