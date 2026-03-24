//lect 1,2,3,4;





// --- 3.1 String ---
// Used to store text values.
// Strings are written inside single quotes, double quotes, or backticks.

let firstName: string = "John";
let lastName: string = 'Doe';
let greeting: string = `Hello, ${firstName} ${lastName}`;

console.log(greeting); // Output: Hello, John Doe


// --- 3.2 Number ---
// Used to store numeric values.
// TypeScript does not differentiate between integers and decimals.

let age: number = 25;
let price: number = 99.99;
let negative: number = -10;
let hex: number = 0xff;       // hexadecimal
let binary: number = 0b1010;  // binary
let octal: number = 0o744;    // octal

console.log(age);   // Output: 25
console.log(price); // Output: 99.99


// --- 3.3 Boolean ---
// Used to store true or false values.

let isLoggedIn: boolean = true;
let isAdmin: boolean = false;

console.log(isLoggedIn); // Output: true


// --- 3.4 Undefined ---
// A variable that has been declared but not assigned a value.

let notAssigned: undefined = undefined;
console.log(notAssigned); // Output: undefined


// --- 3.5 Null ---
// Represents an intentional absence of any value.

let emptyValue: null = null;
console.log(emptyValue); // Output: null


// --- 3.6 Any ---
// Allows a variable to hold any type of value.
// Using "any" defeats the purpose of TypeScript.
// Avoid using it unless absolutely necessary.

let randomValue: any = 10;
randomValue = "hello";
randomValue = true;
// No error because "any" allows all types.


// --- 3.7 Unknown ---
// Similar to "any" but safer.
// You must check the type before using it.

let unknownValue: unknown = 42;

// You cannot directly use unknownValue as a number.
// You must first check its type:
if (typeof unknownValue === "number") {
    let result: number = unknownValue + 10;
    console.log(result); // Output: 52
}


// --- 3.8 Void ---
// Used for functions that do not return any value.

function sayHello(): void {
    console.log("Hello!");
}

sayHello(); // Output: Hello!


// --- 3.9 Never ---
// Represents values that never occur.
// Used for functions that always throw errors or run forever.

function throwError(message: string): never {
    throw new Error(message);
}

// This function never returns anything because it always throws.


// --- 3.10 BigInt ---
// Used for very large integers.

let bigNumber: bigint = 9007199254740991n;
console.log(bigNumber);


// --- 3.11 Symbol ---
// Used to create unique identifiers.

let uniqueId: symbol = Symbol("id");
let anotherId: symbol = Symbol("id");
console.log(uniqueId === anotherId); // Output: false (each symbol is unique)


// ============================================================
// SECTION 4: TYPE INFERENCE
// ============================================================

// TypeScript can automatically detect the type of a variable
// based on the value assigned to it. This is called type inference.

let city = "New York"; // TypeScript infers this as string
let count = 100;       // TypeScript infers this as number
let active = true;     // TypeScript infers this as boolean

// You do NOT always need to write the type explicitly.
// TypeScript will figure it out.
// But writing types explicitly makes code more readable.


// ============================================================
// SECTION 5: ARRAYS
// ============================================================

// --- 5.1 Basic Arrays ---

let fruits: string[] = ["apple", "banana", "cherry"];
let scores: number[] = [90, 85, 78, 92];
let flags: boolean[] = [true, false, true];

console.log(fruits[0]); // Output: apple
console.log(scores[2]); // Output: 78


// --- 5.2 Alternative Array Syntax (Generic) ---

let colors: Array<string> = ["red", "green", "blue"];
let numbers: Array<number> = [1, 2, 3, 4, 5];


// --- 5.3 Mixed Arrays (Union Types) ---

let mixed: (string | number)[] = ["hello", 42, "world", 100];


// --- 5.4 Multidimensional Arrays ---

let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[1][2]); // Output: 6


// --- 5.5 Readonly Arrays ---
// Once created, you cannot modify them.

let readonlyColors: readonly string[] = ["red", "green", "blue"];
// readonlyColors.push("yellow"); // ERROR: Cannot push to readonly array
// readonlyColors[0] = "pink";    // ERROR: Cannot modify readonly array


// ============================================================
// SECTION 6: TUPLES
// ============================================================

// A tuple is an array with a fixed number of elements
// where each element has a specific type.

let person: [string, number] = ["Alice", 30];

console.log(person[0]); // Output: Alice
console.log(person[1]); // Output: 30

// person = [30, "Alice"]; // ERROR: Types are in wrong order

// --- Named Tuples (for better readability) ---

let student: [name: string, age: number, grade: string] = ["Bob", 20, "A"];


// --- Readonly Tuples ---

let readonlyTuple: readonly [string, number] = ["Hello", 42];
// readonlyTuple[0] = "World"; // ERROR: Cannot modify readonly tuple


// ============================================================
// SECTION 7: OBJECTS
// ============================================================

// --- 7.1 Basic Object ---

let user: { name: string; age: number; email: string } = {
    name: "John",
    age: 25,
    email: "john@example.com"
};

console.log(user.name);  // Output: John
console.log(user.email); // Output: john@example.com


// --- 7.2 Optional Properties ---
// Use ? to mark a property as optional.

let employee: { name: string; age: number; phone?: string } = {
    name: "Jane",
    age: 30
    // phone is optional, so we can skip it
};


// --- 7.3 Readonly Properties ---

let car: { readonly brand: string; model: string } = {
    brand: "Toyota",
    model: "Camry"
};

// car.brand = "Honda"; // ERROR: Cannot modify readonly property
car.model = "Corolla"; // This is fine


// ============================================================
// SECTION 8: UNION TYPES
// ============================================================

// A union type allows a variable to hold values of multiple types.
// Use the pipe symbol | to define union types.

let id: string | number;

id = "ABC123";
console.log(id); // Output: ABC123

id = 456;
console.log(id); // Output: 456

// id = true; // ERROR: boolean is not allowed


// --- Union Types in Functions ---

function printId(id: string | number): void {
    if (typeof id === "string") {
        console.log("String ID: " + id.toUpperCase());
    } else {
        console.log("Number ID: " + id);
    }
}

printId("abc"); // Output: String ID: ABC
printId(123);   // Output: Number ID: 123


// ============================================================
// SECTION 9: LITERAL TYPES
// ============================================================

// Literal types allow you to specify the exact value a variable can hold.

let direction: "up" | "down" | "left" | "right";

direction = "up";    // Valid
direction = "down";  // Valid
// direction = "forward"; // ERROR: Not one of the allowed values

let statusCode: 200 | 404 | 500;

statusCode = 200; // Valid
statusCode = 404; // Valid
// statusCode = 302; // ERROR: Not one of the allowed values


// ============================================================
// SECTION 10: TYPE ALIASES
// ============================================================

// A type alias creates a custom name for a type.
// This makes code cleaner and reusable.

type StringOrNumber = string | number;

let value1: StringOrNumber = "hello";
let value2: StringOrNumber = 42;


// --- Type Alias for Objects ---

type UserType = {
    name: string;
    age: number;
    email: string;
    isActive: boolean;
};

let newUser: UserType = {
    name: "Alice",
    age: 28,
    email: "alice@example.com",
    isActive: true
};

let anotherUser: UserType = {
    name: "Bob",
    age: 35,
    email: "bob@example.com",
    isActive: false
};


// --- Type Alias for Functions ---

type MathOperation = (a: number, b: number) => number;

let add: MathOperation = (a, b) => a + b;
let multiply: MathOperation = (a, b) => a * b;

console.log(add(5, 3));      // Output: 8
console.log(multiply(5, 3)); // Output: 15


// ============================================================
// SECTION 11: INTERFACES
// ============================================================

// An interface defines the structure (shape) of an object.
// It is similar to a type alias but designed specifically for objects.

interface Animal {
    name: string;
    age: number;
    sound: string;
}

let dog: Animal = {
    name: "Buddy",
    age: 3,
    sound: "Woof"
};

console.log(dog.name);  // Output: Buddy
console.log(dog.sound); // Output: Woof


// --- Optional Properties in Interfaces ---

interface Book {
    title: string;
    author: string;
    pages: number;
    isbn?: string; // optional
}

let myBook: Book = {
    title: "TypeScript Basics",
    author: "John Doe",
    pages: 250
};


// --- Readonly Properties in Interfaces ---

interface Point {
    readonly x: number;
    readonly y: number;
}

let point: Point = { x: 10, y: 20 };
// point.x = 30; // ERROR: Cannot modify readonly property


// --- Extending Interfaces ---
// One interface can inherit from another.

interface Shape {
    color: string;
}

interface Circle extends Shape {
    radius: number;
}

let myCircle: Circle = {
    color: "red",
    radius: 5
};


// --- Extending Multiple Interfaces ---

interface Printable {
    print(): void;
}

interface Loggable {
    log(): void;
}

interface Document extends Printable, Loggable {
    title: string;
}

// A Document must have title, print(), and log()


// --- Difference Between Type and Interface ---
//
// 1. Interfaces can be extended using "extends" keyword.
//    Types use intersection (&) to combine.
//
// 2. Interfaces can be "reopened" and merged.
//    Types cannot be reopened.
//
// 3. Interfaces are mainly for objects.
//    Types can represent any type (objects, unions, primitives, etc.)
//
// 4. Use interfaces for objects and classes.
//    Use types for everything else.

// Example of interface merging (declaration merging):

interface Car {
    brand: string;
}

interface Car {
    model: string;
}

// Now Car has both brand and model
let myCar: Car = {
    brand: "Toyota",
    model: "Corolla"
};


// ============================================================
// SECTION 12: FUNCTIONS
// ============================================================

// --- 12.1 Basic Function with Types ---

function addNumbers(a: number, b: number): number {
    return a + b;
}

console.log(addNumbers(5, 10)); // Output: 15


// --- 12.2 Function with No Return Value ---

function logMessage(message: string): void {
    console.log(message);
}

logMessage("Hello, TypeScript!"); // Output: Hello, TypeScript!


// --- 12.3 Optional Parameters ---
// Use ? to make a parameter optional.

function greetUser(name: string, title?: string): string {
    if (title) {
        return `Hello, ${title} ${name}`;
    }
    return `Hello, ${name}`;
}

console.log(greetUser("Alice"));          // Output: Hello, Alice
console.log(greetUser("Alice", "Dr."));   // Output: Hello, Dr. Alice


// --- 12.4 Default Parameters ---

function createUser(name: string, role: string = "user"): string {
    return `${name} is a ${role}`;
}

console.log(createUser("John"));          // Output: John is a user
console.log(createUser("Jane", "admin")); // Output: Jane is a admin


// --- 12.5 Rest Parameters ---
// Allows a function to accept any number of arguments.

function sumAll(...numbers: number[]): number {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log(sumAll(1, 2, 3));       // Output: 6
console.log(sumAll(10, 20, 30, 40)); // Output: 100


// --- 12.6 Arrow Functions ---

const subtract = (a: number, b: number): number => {
    return a - b;
};

// Short form (when function body is a single expression):
const divide = (a: number, b: number): number => a / b;

console.log(subtract(10, 3)); // Output: 7
console.log(divide(20, 4));   // Output: 5


// --- 12.7 Function Overloading ---
// Allows a function to have multiple signatures.

function processInput(input: string): string;
function processInput(input: number): number;
function processInput(input: string | number): string | number {
    if (typeof input === "string") {
        return input.toUpperCase();
    } else {
        return input * 2;
    }
}

console.log(processInput("hello")); // Output: HELLO
console.log(processInput(5));       // Output: 10


// ============================================================
// SECTION 13: ENUMS
// ============================================================

// Enums define a set of named constants.
// They make code more readable and organized.

// --- 13.1 Numeric Enums ---
// By default, enum values start at 0 and increment by 1.

enum Direction {
    Up,      // 0
    Down,    // 1
    Left,    // 2
    Right    // 3
}

let move: Direction = Direction.Up;
console.log(move);             // Output: 0
console.log(Direction.Right);  // Output: 3


// --- Custom Starting Value ---

enum StatusCode {
    OK = 200,
    NotFound = 404,
    ServerError = 500
}

console.log(StatusCode.OK);         // Output: 200
console.log(StatusCode.NotFound);   // Output: 404


// --- 13.2 String Enums ---

enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}

let favoriteColor: Color = Color.Green;
console.log(favoriteColor); // Output: GREEN


// --- 13.3 Const Enums ---
// More optimized. Removed during compilation.

const enum Size {
    Small = "S",
    Medium = "M",
    Large = "L"
}

let shirtSize: Size = Size.Medium;
console.log(shirtSize); // Output: M


// ============================================================
// SECTION 14: TYPE ASSERTIONS (TYPE CASTING)
// ============================================================

// Type assertion tells TypeScript to treat a value as a specific type.
// It does not change the actual value at runtime.
// It is only used to help the compiler understand your intent.

// --- Method 1: Using "as" keyword ---

let someValue: unknown = "Hello, World!";
let stringLength: number = (someValue as string).length;

console.log(stringLength); // Output: 13


// --- Method 2: Using angle brackets (not usable in JSX/React) ---

let anotherValue: unknown = "TypeScript";
let anotherLength: number = (<string>anotherValue).length;

console.log(anotherLength); // Output: 10


// ============================================================
// SECTION 15: CLASSES
// ============================================================

// Classes are blueprints for creating objects.
// TypeScript adds type safety and access modifiers to classes.

// --- 15.1 Basic Class ---

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    introduce(): string {
        return `Hi, I am ${this.name} and I am ${this.age} years old.`;
    }
}

let person1 = new Person("Alice", 25);
console.log(person1.introduce()); // Output: Hi, I am Alice and I am 25 years old.


// --- 15.2 Access Modifiers ---
//
// public    - Accessible from anywhere (default)
// private   - Accessible only inside the class
// protected - Accessible inside the class and its subclasses
// readonly  - Can only be set once (in constructor)

class BankAccount {
    public owner: string;
    private balance: number;
    protected accountType: string;
    readonly accountNumber: string;

    constructor(owner: string, balance: number, accountNumber: string) {
        this.owner = owner;
        this.balance = balance;
        this.accountType = "Savings";
        this.accountNumber = accountNumber;
    }

    public deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    }

    public getBalance(): number {
        return this.balance;
    }

    private calculateInterest(): number {
        return this.balance * 0.05;
    }
}

let account = new BankAccount("John", 1000, "ACC001");
account.deposit(500);                // Output: Deposited 500. New balance: 1500
console.log(account.getBalance());   // Output: 1500
console.log(account.owner);         // Output: John
// console.log(account.balance);     // ERROR: balance is private
// console.log(account.accountType); // ERROR: accountType is protected
// account.accountNumber = "ACC002"; // ERROR: accountNumber is readonly


// --- 15.3 Shorthand Constructor ---
// TypeScript allows declaring and initializing properties in the constructor.

class Product {
    constructor(
        public name: string,
        public price: number,
        private stock: number
    ) {}

    getInfo(): string {
        return `${this.name} costs $${this.price}. Stock: ${this.stock}`;
    }
}

let laptop = new Product("Laptop", 999, 50);
console.log(laptop.getInfo()); // Output: Laptop costs $999. Stock: 50


// --- 15.4 Inheritance ---
// A class can extend another class to inherit its properties and methods.

class AnimalClass {
    constructor(public name: string, public legs: number) {}

    move(): string {
        return `${this.name} is moving on ${this.legs} legs.`;
    }
}

class Dog extends AnimalClass {
    constructor(name: string) {
        super(name, 4); // Call the parent constructor
    }

    bark(): string {
        return `${this.name} says Woof!`;
    }
}

let myDog = new Dog("Rex");
console.log(myDog.move()); // Output: Rex is moving on 4 legs.
console.log(myDog.bark()); // Output: Rex says Woof!


// --- 15.5 Method Overriding ---
// A child class can override a parent class method.

class Bird extends AnimalClass {
    constructor(name: string) {
        super(name, 2);
    }

    // Override the move method
    move(): string {
        return `${this.name} is flying!`;
    }
}

let eagle = new Bird("Eagle");
console.log(eagle.move()); // Output: Eagle is flying!


// --- 15.6 Abstract Classes ---
// Abstract classes cannot be instantiated directly.
// They serve as base classes that other classes must extend.

abstract class Vehicle {
    constructor(public brand: string) {}

    // Abstract method: must be implemented by child classes
    abstract start(): string;

    // Regular method: inherited by child classes
    stop(): string {
        return `${this.brand} has stopped.`;
    }
}

class Bike extends Vehicle {
    start(): string {
        return `${this.brand} bike is starting with a kick.`;
    }
}

class ElectricCar extends Vehicle {
    start(): string {
        return `${this.brand} car is starting silently.`;
    }
}

// let v = new Vehicle("Generic"); // ERROR: Cannot instantiate abstract class

let bike = new Bike("Honda");
console.log(bike.start()); // Output: Honda bike is starting with a kick.
console.log(bike.stop());  // Output: Honda has stopped.

let tesla = new ElectricCar("Tesla");
console.log(tesla.start()); // Output: Tesla car is starting silently.


// --- 15.7 Static Members ---
// Static properties and methods belong to the class itself, not to instances.

class MathHelper {
    static PI: number = 3.14159;

    static circleArea(radius: number): number {
        return MathHelper.PI * radius * radius;
    }
}

console.log(MathHelper.PI);              // Output: 3.14159
console.log(MathHelper.circleArea(5));   // Output: 78.53975

// You access static members using the class name, not an instance.
// let m = new MathHelper();
// m.PI; // ERROR: Cannot access static member through instance


// --- 15.8 Getters and Setters ---

class Temperature {
    private _celsius: number;

    constructor(celsius: number) {
        this._celsius = celsius;
    }

    // Getter
    get fahrenheit(): number {
        return this._celsius * 9 / 5 + 32;
    }

    // Setter
    set celsius(value: number) {
        if (value < -273.15) {
            throw new Error("Temperature below absolute zero is not possible.");
        }
        this._celsius = value;
    }

    get celsius(): number {
        return this._celsius;
    }
}

let temp = new Temperature(100);
console.log(temp.fahrenheit); // Output: 212
console.log(temp.celsius);    // Output: 100

temp.celsius = 0;
console.log(temp.fahrenheit); // Output: 32


// ============================================================
// SECTION 16: GENERICS
// ============================================================

// Generics allow you to create reusable components that work
// with multiple types instead of a single one.

// --- 16.1 Generic Functions ---

// Without generics, you would need separate functions for each type:
// function identityString(value: string): string { return value; }
// function identityNumber(value: number): number { return value; }

// With generics, one function works for all types:

function identity<T>(value: T): T {
    return value;
}

console.log(identity<string>("Hello")); // Output: Hello
console.log(identity<number>(42));      // Output: 42
console.log(identity<boolean>(true));   // Output: true

// TypeScript can also infer the type:
console.log(identity("World")); // T is inferred as string


// --- 16.2 Generic with Arrays ---

function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

console.log(getFirstElement([10, 20, 30]));       // Output: 10
console.log(getFirstElement(["a", "b", "c"]));    // Output: a


// --- 16.3 Multiple Generic Types ---

function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

let result = pair("hello", 42);
console.log(result); // Output: ["hello", 42]


// --- 16.4 Generic Interfaces ---

interface Box<T> {
    content: T;
    label: string;
}

let stringBox: Box<string> = {
    content: "Books",
    label: "Library Box"
};

let numberBox: Box<number> = {
    content: 42,
    label: "Number Box"
};


// --- 16.5 Generic Classes ---

class DataStore<T> {
    private data: T[] = [];

    addItem(item: T): void {
        this.data.push(item);
    }

    getItems(): T[] {
        return this.data;
    }

    getItemByIndex(index: number): T {
        return this.data[index];
    }
}

let stringStore = new DataStore<string>();
stringStore.addItem("Apple");
stringStore.addItem("Banana");
console.log(stringStore.getItems()); // Output: ["Apple", "Banana"]

let numberStore = new DataStore<number>();
numberStore.addItem(100);
numberStore.addItem(200);
console.log(numberStore.getItems()); // Output: [100, 200]


// --- 16.6 Generic Constraints ---
// You can restrict what types can be used with a generic.

interface HasLength {
    length: number;
}

function logLength<T extends HasLength>(item: T): void {
    console.log(`Length: ${item.length}`);
}

logLength("Hello");       // Output: Length: 5 (strings have length)
logLength([1, 2, 3]);     // Output: Length: 3 (arrays have length)
// logLength(42);          // ERROR: number does not have a length property


// --- 16.7 keyof Constraint ---

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

let personObj = { name: "Alice", age: 30, city: "NYC" };

console.log(getProperty(personObj, "name")); // Output: Alice
console.log(getProperty(personObj, "age"));  // Output: 30
// console.log(getProperty(personObj, "salary")); // ERROR: "salary" is not a key


// ============================================================
// SECTION 17: UTILITY TYPES
// ============================================================

// TypeScript provides built-in utility types to transform types easily.

interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

// --- 17.1 Partial<T> ---
// Makes all properties optional.

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
    return { ...todo, ...fieldsToUpdate };
}

let myTodo: Todo = {
    title: "Learn TypeScript",
    description: "Study generics and interfaces",
    completed: false
};

let updatedTodo = updateTodo(myTodo, { completed: true });
console.log(updatedTodo);


// --- 17.2 Required<T> ---
// Makes all properties required.

interface OptionalUser {
    name?: string;
    email?: string;
}

let requiredUser: Required<OptionalUser> = {
    name: "John",   // Must provide
    email: "j@e.com" // Must provide
};


// --- 17.3 Readonly<T> ---
// Makes all properties readonly.

let readonlyTodo: Readonly<Todo> = {
    title: "Learn",
    description: "Study",
    completed: false
};

// readonlyTodo.completed = true; // ERROR: Cannot modify readonly


// --- 17.4 Pick<T, Keys> ---
// Creates a type by picking specific properties.

type TodoPreview = Pick<Todo, "title" | "completed">;

let preview: TodoPreview = {
    title: "Clean room",
    completed: false
};


// --- 17.5 Omit<T, Keys> ---
// Creates a type by removing specific properties.

type TodoWithoutDescription = Omit<Todo, "description">;

let simpleTodo: TodoWithoutDescription = {
    title: "Buy groceries",
    completed: true
};


// --- 17.6 Record<Keys, Type> ---
// Creates a type with specified keys and value types.

type Fruit = "apple" | "banana" | "cherry";

let fruitPrices: Record<Fruit, number> = {
    apple: 1.5,
    banana: 0.75,
    cherry: 3.0
};

console.log(fruitPrices.apple); // Output: 1.5


// --- 17.7 Exclude<T, U> ---
// Removes types from a union.

type AllColors = "red" | "green" | "blue" | "yellow";
type WarmColors = Exclude<AllColors, "blue" | "green">;
// WarmColors = "red" | "yellow"


// --- 17.8 Extract<T, U> ---
// Extracts types from a union.

type CoolColors = Extract<AllColors, "blue" | "green">;
// CoolColors = "blue" | "green"


// --- 17.9 NonNullable<T> ---
// Removes null and undefined from a type.

type MaybeString = string | null | undefined;
type DefiniteString = NonNullable<MaybeString>;
// DefiniteString = string


// --- 17.10 ReturnType<T> ---
// Gets the return type of a function.

function getUser() {
    return { name: "Alice", age: 30 };
}

type UserReturnType = ReturnType<typeof getUser>;
// UserReturnType = { name: string; age: number }


// ============================================================
// SECTION 18: TYPE NARROWING
// ============================================================

// Type narrowing is the process of refining a variable's type
// within a conditional block.

// --- 18.1 typeof Narrowing ---

function processValue(value: string | number): void {
    if (typeof value === "string") {
        // TypeScript knows value is a string here
        console.log(value.toUpperCase());
    } else {
        // TypeScript knows value is a number here
        console.log(value.toFixed(2));
    }
}

processValue("hello"); // Output: HELLO
processValue(3.14159); // Output: 3.14


// --- 18.2 instanceof Narrowing ---

class Cat {
    meow(): void {
        console.log("Meow!");
    }
}

class DogClass {
    bark(): void {
        console.log("Woof!");
    }
}

function makeSound(animal: Cat | DogClass): void {
    if (animal instanceof Cat) {
        animal.meow();
    } else {
        animal.bark();
    }
}

makeSound(new Cat());      // Output: Meow!
makeSound(new DogClass());  // Output: Woof!


// --- 18.3 in Narrowing ---
// Checks if a property exists in an object.

interface Fish {
    swim(): void;
}

interface BirdInterface {
    fly(): void;
}

function moveAnimal(animal: Fish | BirdInterface): void {
    if ("swim" in animal) {
        animal.swim();
    } else {
        animal.fly();
    }
}


// --- 18.4 Discriminated Unions ---
// Uses a common property to distinguish between types.

interface SuccessResponse {
    status: "success";
    data: string;
}

interface ErrorResponse {
    status: "error";
    errorMessage: string;
}

type ApiResponse = SuccessResponse | ErrorResponse;

function handleResponse(response: ApiResponse): void {
    switch (response.status) {
        case "success":
            console.log("Data: " + response.data);
            break;
        case "error":
            console.log("Error: " + response.errorMessage);
            break;
    }
}

handleResponse({ status: "success", data: "User found" });
// Output: Data: User found

handleResponse({ status: "error", errorMessage: "Not found" });
// Output: Error: Not found


// ============================================================
// SECTION 19: INTERSECTION TYPES
// ============================================================

// Intersection types combine multiple types into one.
// The resulting type has ALL properties from ALL combined types.
// Use the & symbol.

type Nameable = {
    name: string;
};

type Ageable = {
    age: number;
};

type PersonType = Nameable & Ageable;

let personIntersection: PersonType = {
    name: "Alice",
    age: 30
};

// Both name AND age are required.


// --- Intersection with Interfaces ---

interface Serializable {
    serialize(): string;
}

interface Validatable {
    validate(): boolean;
}

type FormData = Serializable & Validatable & {
    fieldName: string;
};

// FormData must have serialize(), validate(), and fieldName


// ============================================================
// SECTION 20: TYPE GUARDS
// ============================================================

// Type guards are techniques to check the type at runtime
// and help TypeScript narrow the type.

// --- Custom Type Guard Function ---
// Uses the "is" keyword in the return type.

interface AdminUser {
    name: string;
    role: "admin";
    permissions: string[];
}

interface RegularUser {
    name: string;
    role: "user";
    email: string;
}

// Custom type guard
function isAdmin(user: AdminUser | RegularUser): user is AdminUser {
    return user.role === "admin";
}

function displayUser(user: AdminUser | RegularUser): void {
    if (isAdmin(user)) {
        console.log(`Admin: ${user.name}, Permissions: ${user.permissions}`);
    } else {
        console.log(`User: ${user.name}, Email: ${user.email}`);
    }
}

displayUser({ name: "Alice", role: "admin", permissions: ["read", "write"] });
// Output: Admin: Alice, Permissions: read,write

displayUser({ name: "Bob", role: "user", email: "bob@email.com" });
// Output: User: Bob, Email: bob@email.com


// ============================================================
// SECTION 21: MODULES
// ============================================================

// TypeScript supports ES Modules (import/export).
// Modules help organize code into separate files.

// --- Exporting ---
// In a file called mathUtils.ts:
//
// export function add(a: number, b: number): number {
//     return a + b;
// }
//
// export function subtract(a: number, b: number): number {
//     return a - b;
// }
//
// export const PI = 3.14159;

// --- Importing ---
// In another file:
//
// import { add, subtract, PI } from "./mathUtils";
// console.log(add(5, 3));    // Output: 8
// console.log(PI);           // Output: 3.14159

// --- Default Export ---
// A file can have one default export.
//
// export default class Calculator {
//     add(a: number, b: number): number {
//         return a + b;
//     }
// }
//
// import Calculator from "./Calculator";
// let calc = new Calculator();

// --- Renaming Imports ---
//
// import { add as addition } from "./mathUtils";
// console.log(addition(5, 3));

// --- Import Everything ---
//
// import * as MathUtils from "./mathUtils";
// console.log(MathUtils.add(5, 3));
// console.log(MathUtils.PI);


// ============================================================
// SECTION 22: NAMESPACES
// ============================================================

// Namespaces are a way to organize code and avoid name collisions.
// They were more common before ES Modules became standard.

namespace Geometry {
    export function areaOfCircle(radius: number): number {
        return Math.PI * radius * radius;
    }

    export function areaOfRectangle(width: number, height: number): number {
        return width * height;
    }
}

console.log(Geometry.areaOfCircle(5));         // Output: 78.5398...
console.log(Geometry.areaOfRectangle(4, 6));   // Output: 24


// ============================================================
// SECTION 23: DECORATORS (EXPERIMENTAL)
// ============================================================

// Decorators are special functions that modify classes, methods, or properties.
// They are currently an experimental feature.
// To use decorators, enable them in tsconfig.json:
//   "experimentalDecorators": true

// --- Class Decorator Example ---

function Logger(constructor: Function) {
    console.log("Logging class: " + constructor.name);
}

@Logger
class MyService {
    constructor() {
        console.log("MyService created");
    }
}

// When MyService class is defined, "Logging class: MyService" is printed.


// --- Decorator Factory (Decorator that accepts parameters) ---

function Component(config: { selector: string }) {
    return function (constructor: Function) {
        console.log(`Component registered with selector: ${config.selector}`);
    };
}

@Component({ selector: "app-root" })
class AppComponent {
    // This class is registered as a component
}


// ============================================================
// SECTION 24: TSCONFIG.JSON
// ============================================================

// tsconfig.json is the configuration file for the TypeScript compiler.
// It tells TypeScript how to compile your code.
//
// To create a tsconfig.json file, run:
//   tsc --init
//
// Important options:
//
// {
//   "compilerOptions": {
//     "target": "ES6",           // JavaScript version to compile to
//     "module": "commonjs",      // Module system to use
//     "strict": true,            // Enable all strict type checks
//     "outDir": "./dist",        // Output directory for compiled files
//     "rootDir": "./src",        // Root directory of source files
//     "declaration": true,       // Generate .d.ts declaration files
//     "sourceMap": true,         // Generate source map files
//     "noImplicitAny": true,     // Error on implicit any type
//     "strictNullChecks": true,  // Strict null and undefined checks
//     "esModuleInterop": true,   // Better CommonJS/ES Module compatibility
//     "resolveJsonModule": true, // Allow importing JSON files
//     "experimentalDecorators": true  // Enable decorators
//   },
//   "include": ["src/**/*"],     // Files to include
//   "exclude": ["node_modules"]  // Files to exclude
// }


// ============================================================
// SECTION 25: MAPPED TYPES
// ============================================================

// Mapped types create new types by transforming properties
// of an existing type.

type OriginalType = {
    name: string;
    age: number;
    email: string;
};

// Make all properties optional (similar to Partial)
type AllOptional = {
    [K in keyof OriginalType]?: OriginalType[K];
};

// Make all properties readonly (similar to Readonly)
type AllReadonly = {
    readonly [K in keyof OriginalType]: OriginalType[K];
};

// Make all properties nullable
type AllNullable = {
    [K in keyof OriginalType]: OriginalType[K] | null;
};


// ============================================================
// SECTION 26: CONDITIONAL TYPES
// ============================================================

// Conditional types choose one of two types based on a condition.
// Syntax: T extends U ? X : Y
// If T extends U (T is assignable to U), the type is X. Otherwise, it is Y.

type IsString<T> = T extends string ? "Yes" : "No";

type Test1 = IsString<string>;  // "Yes"
type Test2 = IsString<number>;  // "No"
type Test3 = IsString<"hello">; // "Yes" (literal string extends string)


// --- Practical Example ---

type FlattenArray<T> = T extends (infer U)[] ? U : T;

type Flattened1 = FlattenArray<string[]>;   // string
type Flattened2 = FlattenArray<number[]>;   // number
type Flattened3 = FlattenArray<boolean>;    // boolean (not an array, returns as-is)


// ============================================================
// SECTION 27: TEMPLATE LITERAL TYPES
// ============================================================

// TypeScript allows creating types using template literal syntax.

type EventName = "click" | "scroll" | "mousemove";
type HandlerName = `on${Capitalize<EventName>}`;
// HandlerName = "onClick" | "onScroll" | "onMousemove"

type CSSProperty = "margin" | "padding";
type CSSDirection = "top" | "bottom" | "left" | "right";
type CSSRule = `${CSSProperty}-${CSSDirection}`;
// CSSRule = "margin-top" | "margin-bottom" | "margin-left" | "margin-right"
//         | "padding-top" | "padding-bottom" | "padding-left" | "padding-right"


// ============================================================
// SECTION 28: INDEX SIGNATURES
// ============================================================

// Index signatures allow you to define objects with dynamic keys.

interface StringDictionary {
    [key: string]: string;
}

let translations: StringDictionary = {
    hello: "hola",
    goodbye: "adios",
    thanks: "gracias"
};

console.log(translations["hello"]); // Output: hola

// You can add new properties dynamically
translations["please"] = "por favor";


interface NumberDictionary {
    [key: string]: number;
}

let wordCount: NumberDictionary = {
    hello: 5,
    world: 3
};


// ============================================================
// SECTION 29: DECLARATION FILES (.d.ts)
// ============================================================

// Declaration files provide type information for JavaScript libraries
// that do not have built-in TypeScript types.
//
// They have the .d.ts extension.
//
// Example: If you have a JavaScript library called "mylib.js",
// you can create "mylib.d.ts" to describe its types.
//
// --- mylib.d.ts ---
// declare function greet(name: string): string;
// declare const version: string;
// declare interface Config {
//     debug: boolean;
//     logLevel: "info" | "warn" | "error";
// }
//
// Most popular libraries already have type definitions.
// You can install them from DefinitelyTyped:
//   npm install @types/lodash
//   npm install @types/express
//   npm install @types/node


// ============================================================
// SECTION 30: ERROR HANDLING IN TYPESCRIPT
// ============================================================

// --- Try-Catch-Finally ---

function divideNumbers(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

try {
    let divisionResult = divideNumbers(10, 0);
    console.log(divisionResult);
} catch (error) {
    if (error instanceof Error) {
        console.log("Error: " + error.message); // Output: Error: Cannot divide by zero
    }
} finally {
    console.log("Division operation completed.");
}


// --- Custom Error Classes ---

class ValidationError extends Error {
    field: string;

    constructor(message: string, field: string) {
        super(message);
        this.name = "ValidationError";
        this.field = field;
    }
}

function validateAge(age: number): void {
    if (age < 0) {
        throw new ValidationError("Age cannot be negative", "age");
    }
    if (age > 150) {
        throw new ValidationError("Age seems unrealistic", "age");
    }
}

try {
    validateAge(-5);
} catch (error) {
    if (error instanceof ValidationError) {
        console.log(`${error.name}: ${error.message} (Field: ${error.field})`);
        // Output: ValidationError: Age cannot be negative (Field: age)
    }
}


// ============================================================
// SECTION 31: PROMISES AND ASYNC/AWAIT
// ============================================================

// TypeScript provides type safety for asynchronous code.

// --- 31.1 Promises ---

function fetchData(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully");
        }, 1000);
    });
}

fetchData().then((data) => {
    console.log(data); // Output: Data fetched successfully
});


// --- 31.2 Async/Await ---

async function getData(): Promise<string> {
    let data = await fetchData();
    return data;
}

async function main(): Promise<void> {
    let result2 = await getData();
    console.log(result2); // Output: Data fetched successfully
}

main();


// --- 31.3 Typing Async Functions ---

interface UserData {
    id: number;
    name: string;
    email: string;
}

async function fetchUser(id: number): Promise<UserData> {
    // Simulating an API call
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: id,
                name: "Alice",
                email: "alice@example.com"
            });
        }, 500);
    });
}

async function displayUserInfo(): Promise<void> {
    let userData = await fetchUser(1);
    console.log(`User: ${userData.name}, Email: ${userData.email}`);
}

displayUserInfo();


// ============================================================
// SECTION 32: COMMON PATTERNS AND BEST PRACTICES
// ============================================================

// 1. Always enable "strict" mode in tsconfig.json
//    This catches more potential errors.

// 2. Avoid using "any" type.
//    Use "unknown" if you truly do not know the type.

// 3. Use interfaces for objects and classes.
//    Use type aliases for unions, primitives, and complex types.

// 4. Use readonly when properties should not change.

// 5. Use const assertions for literal types.
let config = {
    url: "https://api.example.com",
    timeout: 5000
} as const;
// config.url = "new url"; // ERROR: readonly

// 6. Prefer explicit return types for functions.
//    This makes the code self-documenting.

// 7. Use union types instead of overloading when possible.

// 8. Use generics to write reusable, type-safe code.

// 9. Use utility types (Partial, Pick, Omit, etc.)
//    instead of creating new types manually.

// 10. Keep your types close to where they are used.
//     Only export types that are needed by other files.

// 11. Use discriminated unions for handling different shapes of data.

// 12. Always handle null and undefined cases
//     when "strictNullChecks" is enabled.



// ============================================================
