// 1. Type Inference and Annotations
// Problem : You want to declare variables with type annotations and let TypeScript infer types where possible.

// Explicit type annotation
let age: number = 30;

// TypeScript infers the type as string
let userName = "Alice";  // you can't use name dirrectly...


// 2. Interfaces and Type Aliases
// Problem : You need to define the shape of an object using interfaces and type aliases.

interface Person {
    name: string;
    age: number;
  }
  
  type Vehicle = {
    make: string;
    model: string;
    year: number;
  };
  
  const person: Person = {
    name: "Alice",
    age: 30,
  };
  
  const car: Vehicle = {
    make: "Toyota",
    model: "Camry",
    year: 2021,
  };
  
// 3. Function Annotations
// Problem : You want to ensure that functions have properly annotated parameters and return types.

function add(a: number, b: number): number {
    return a + b;
  }
  
  const greet = (name: string): string => `Hello, ${name}!`;
  
  console.log(add(5, 3)); // 8
  console.log(greet("Alice")); // Hello, Alice!
  

// 4. Union and Intersection Types
// Problem : You need to handle variables that can have multiple types.

type ID = number | string;

let userID: ID;

userID = 123; // valid
userID = "abc123"; // valid

interface ErrorResponse {
  error: string;
}

interface SuccessResponse {
  data: string;
}

type ApiResponse = ErrorResponse & SuccessResponse;

const response: ApiResponse = {
  error: "Not found",
  data: "Some data",
};

// 5. Generics
// Problem You need to create reusable components or functions that work with different types.

function identity<T>(arg: T): T {
  return arg;
}

console.log(identity<number>(42)); // 42
console.log(identity<string>("Hello")); // Hello

class Box<T> {
  content: T;

  constructor(content: T) {
    this.content = content;
  }

  getContent(): T {
    return this.content;
  }
}

const numberBox = new Box<number>(100);
console.log(numberBox.getContent()); // 100



// 6. Enums
// Problem : You want to define a set of named constants.

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let move: Direction = Direction.Up;
console.log(move); // 0

enum Status {
  Success = "SUCCESS",
  Failure = "FAILURE",
}

let myStatus: Status = Status.Success;
console.log(myStatus); // SUCCESS


// 7. Type Assertion
// Problem : You need to override TypeScript's inferred type for a variable.

let someValue: unknown = "Hello, world!";
let strLength: number = (someValue as string).length;

console.log(strLength); // 13

// Alternatively
let strLength2: number = (<string>someValue).length;
console.log(strLength2); // 13


// 8. Classes and Inheritance
// Problem : You need to create classes with properties and methods, and use inheritance.

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distance: number): void {
    console.log(`${this.name} moved ${distance} meters.`);
  }
}

class Dog extends Animal {
  bark(): void {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog("Rex");
dog.bark(); // Woof! Woof!
dog.move(10); // Rex moved 10 meters.


// 9. Modules and Namespaces
// Problem You want to organize your code using modules and namespaces.


// export function add(a: number, b: number): number {
//   return a + b;
// }


// import { add } from './mathUtils';

// console.log(add(3, 4)); // 7

// // Using namespaces
// namespace MathUtils {
//   export function subtract(a: number, b: number): number {
//     return a - b;
//   }
// }

// console.log(MathUtils.subtract(10, 4)); // 6


// 10. Optional and Default Parameters
// Problem You want to define functions with optional and default parameters.

function anotherGreet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}

function printName(firstName: string, lastName?: string): string {
  return lastName ? `${firstName} ${lastName}` : firstName;
}

console.log(anotherGreet("Alice")); // Hello, Alice!
console.log(anotherGreet("Bob", "Hi")); // Hi, Bob!
console.log(printName("Alice")); // Alice
console.log(printName("Alice", "Smith")); // Alice Smith
