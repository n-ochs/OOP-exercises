// Given this code:

class Person {
  constructor(name, email, phone) {
      this.name = name;
      this.email = email;
      this.phone = phone;
  };
  greet(otherPerson) {
    console.log('Hello ' + otherPerson.name + ', I am ' + this.name + '!');
  };
};

// Write code to

// 1) Instantiate an instance object of Person with name of 'Sonny', email of 'sonny@hotmail.com', and phone of '483-485-4948', store it in the variable sonny.
// 2) Instantiate another person with the name of 'Jordan', email of 'jordan@aol.com', and phone of '495-586-3456', store it in the variable 'jordan'.
// 3) Have sonny greet jordan using the greet method.
// 4) Have jordan greet sonny using the greet method.
// 5) Write a statement to print the contact info (email and phone) of Sonny.
// 6) Write another statement to print the contact info of Jordan.

//1
const sonny = new Person('Sonny', 'sonny@hotmail.com', '483-485-4948');

//2
const jordan = new Person('Jordan', 'jordan@aol.com', '495-586-3456');

//3
sonny.greet(jordan);

//4
jordan.greet(sonny);

//5
console.log(`${sonny.email}, ${sonny.phone}`);

//6
console.log(jordan);