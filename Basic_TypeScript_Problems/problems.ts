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

