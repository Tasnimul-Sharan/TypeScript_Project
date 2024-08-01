
// # 11. **Readonly and Const**
// # Problem : You want to create immutable variables and object properties.

const PI = 3.14; // Immutable variable

interface Point {
  readonly x: number;
  readonly y: number;
}

let point: Point = { x: 10, y: 20 };
// point.x = 30; // Error: Cannot assign to 'x' because it is a read-only property.

// # 12. **Tuple Types**
// # Problem You want to work with an array of fixed length and types.


let tuple: [string, number];
tuple = ["Alice", 30]; // Valid
// tuple = [30, "Alice"]; // Error: Type 'number' is not assignable to type 'string'.

let [myName, myAge] = tuple;
console.log(myName); // Alice
console.log(myAge); // 30


// # 13. **Nullable Types**
// # Problem You want to handle `null` and `undefined` values in TypeScript.


let nullableString: string | null = "Hello";
nullableString = null; // Valid

function theGreet(name: string | null): string {
  if (name) {
    return `Hello, ${name}!`;
  } else {
    return "Hello!";
  }
}

console.log(theGreet("Alice")); // Hello, Alice!
console.log(theGreet(null)); // Hello!


// # 14. **Index Signatures**
// # Problem You need to define objects with dynamic keys.

interface StringDictionary {
  [key: string]: string;
}

let translations: StringDictionary = {
  en: "Hello",
  fr: "Bonjour",
  es: "Hola",
};

console.log(translations["en"]); // Hello
console.log(translations["fr"]); // Bonjour


// # 15. **Mapped Types**
// # Problem You want to create new types by transforming existing types.


type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

interface User {
  id: number;
  name: string;
}

type ReadOnlyUser = ReadOnly<User>;

const user: ReadOnlyUser = { id: 1, name: "Alice" };
// user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.


// # 16. **Conditional Types**
// # Problem You need to create types based on a condition.


type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false

function getValue<T>(value: T): T extends string ? string : number {
  if (typeof value === "string") {
    return value as any; // TypeScript can't infer the type here, so we need a type assertion
  } else {
    return 0 as any;
  }
}

console.log(getValue("hello")); // "hello"
console.log(getValue(42)); // 0


// # 17. **Type Guards**
// # Problem You want to create functions that narrow down types.


function isString(value: any): value is string {
  return typeof value === "string";
}

function print(value: string | number) {
  if (isString(value)) {
    console.log(`String: ${value}`);
  } else {
    console.log(`Number: ${value}`);
  }
}

print("Hello"); // String: Hello
print(123); // Number: 123


// # 18. **Discriminated Unions**
// # Problem You need to work with union types that share a common property.

interface Square {
  kind: "square";
  size: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

type Shape = Square | Rectangle;

function area(shape: Shape): number {
  switch (shape.kind) {
    case "square":
      return shape.size * shape.size;
    case "rectangle":
      return shape.width * shape.height;
  }
}

const square: Square = { kind: "square", size: 10 };
const rectangle: Rectangle = { kind: "rectangle", width: 5, height: 10 };

console.log(area(square)); // 100
console.log(area(rectangle)); // 50

// # 19. **Type Assertions with DOM Elements**
// # Problem You want to interact with DOM elements in a type-safe manner.

const inputElement = document.getElementById("username") as HTMLInputElement;
inputElement.value = "Alice";

const buttonElement = <HTMLButtonElement>document.getElementById("submit");
buttonElement.addEventListener("click", () => {
  alert("Button clicked!");
});


// # 20. **Utility Types**
// # Problem You want to use built-in utility types to simplify your type definitions.


interface Person {
  name: string;
  age: number;
  address?: string;
}

// Partial makes all properties optional
type PartialPerson = Partial<Person>;

// Pick selects a subset of properties
type NameOnly = Pick<Person, "name">;

// Omit removes specified properties
type WithoutAddress = Omit<Person, "address">;

const partialPerson: PartialPerson = { name: "Alice" };
const nameOnly: NameOnly = { name: "Bob" };
const withoutAddress: WithoutAddress = { name: "Charlie", age: 25 };
