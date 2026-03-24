// WHAT IS TYPESCRIPT?
// - A superset of JavaScript by Microsoft
// - Adds static typing to JavaScript
// - Must be compiled to JS using: tsc filename.ts
// - Install: npm install -g typescript

// ============================================================
// SECTION 1: BASIC TYPES
// ============================================================

let name1: string = "John";
let age1: number = 25;
let isActive: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;

// any: disables type checking (avoid using)
let random: any = "hello";
random = 42;

// unknown: safer than any, must check type before using
let val: unknown = 10;
if (typeof val === "number") console.log(val + 5);

// void: function returns nothing
function log(msg: string): void { console.log(msg); }

// never: function never returns (throws error or infinite loop)
function fail(msg: string): never { throw new Error(msg); }

// ============================================================
// SECTION 2: ARRAYS AND TUPLES
// ============================================================

let nums: number[] = [1, 2, 3];
let words: Array<string> = ["a", "b"];
let mixed: (string | number)[] = ["hi", 1];
let matrix: number[][] = [[1, 2], [3, 4]];
let readonlyArr: readonly number[] = [1, 2, 3];

// Tuple: fixed length and types
let tuple: [string, number] = ["Alice", 30];
let readonlyTuple: readonly [string, number] = ["Bob", 25];

// ============================================================
// SECTION 3: OBJECTS
// ============================================================

let user: { name: string; age: number; phone?: string } = {
  name: "John", age: 25
};

let car: { readonly brand: string; model: string } = {
  brand: "Toyota", model: "Camry"
};
// car.brand = "Honda"; // ERROR: readonly

// ============================================================
// SECTION 4: UNION, LITERAL AND INTERSECTION TYPES
// ============================================================

// Union: multiple possible types
let id: string | number = "ABC";
id = 123;

// let name1: string = "John";
// let age1: number = 25;
// let isActive: boolean = true;
// let nothing: null = null;
// let notDefined: undefined = undefined;
// Literal: exact values allowed
let dir: "up" | "down" | "left" | "right" = "up";

// Intersection: combine multiple types
// ispe use kro 
type A = { name: string };
type B = { age: number };
type AB = A & B;
let ab: AB = { name: "Alice", age: 30 };

// ============================================================
// SECTION 5: TYPE ALIAS AND INTERFACE
// ============================================================

// Type Alias
type ID = string | number;
type UserType = { name: string; age: number; active: boolean };
type MathOp = (a: number, b: number) => number;

// Interface (mainly for objects, extendable, mergeable)
interface Animal { name: string; legs: number }
interface Dog extends Animal { breed: string }

// Interface merging (same name = merged)
interface Car { brand: string }
interface Car { model: string }
let c: Car = { brand: "Toyota", model: "Corolla" };

// TYPE vs INTERFACE:
// - Interface: extendable, mergeable, best for objects/classes
// - Type: unions, primitives, complex types, cannot reopen

// ================
// SECTION 6: FUNCTIONS


function add(a: number, b: number): number { return a + b; }
const sub = (a: number, b: number): number => a - b;

// Optional and Default params
function greet(name: string, title?: string): string {
  return title ? `${title} ${name}` : name;
}
function create(name: string, role: string = "user"): string {
  return `${name}: ${role}`;
}

// Rest params
function sum(...n: number[]): number {
  return n.reduce((a, b) => a + b, 0);
}

// Function Overloading
function process(x: string): string;
function process(x: number): number;
function process(x: string | number): string | number {
  return typeof x === "string" ? x.toUpperCase() : x * 2;
}

// ============================================================
// SECTION 7: ENUMS
// ============================================================
// ?? is has alternative also 
enum Direction { Up, Down, Left, Right }         // 0,1,2,3
enum Status { OK = 200, NotFound = 404 }          // custom values
enum Color { Red = "RED", Blue = "BLUE" }         // string enum
const enum Size { S = "S", M = "M", L = "L" }    // const enum (optimized)

// ============================================================
// SECTION 8: TYPE ASSERTION
// ============================================================

//unknow check the the type during compling 
let someVal: unknown = "Hello";
let len: number = (someVal as string).length;
let len2: number = (<string>someVal).length; // not in JSX,,but why its not in jsxx

// ============================================================
// SECTION 9: CLASSES
// ============================================================

class Person {
  constructor(
    public name: string,
    private age: number,
    protected role: string,
    readonly id: string
  ) {}
  greet(): string { return `${this.name}, ${this.age}`; }
}

// Inheritance
class Employee extends Person {
  constructor(name: string, age: number, public dept: string) {
    super(name, age, "employee", "E001");
  }
  greet(): string { return `${this.name} from ${this.dept}`; } // override
}

// Abstract Class
abstract class Shape {
  abstract area(): number;
  describe(): string { return "I am a shape"; }
}
class Circle extends Shape {
  constructor(public r: number) { super(); }
  area(): number { return Math.PI * this.r ** 2; }
}

// Static Members
class MathUtil {
  static PI = 3.14;
  static circleArea(r: number): number { return this.PI * r * r; }
}

// Getters and Setters
class Temp {
  constructor(private _c: number) {}
  get celsius(): number { return this._c; }
  set celsius(v: number) { this._c = v; }
  get fahrenheit(): number { return this._c * 9 / 5 + 32; }
}

// ============================================================
// SECTION 10: GENERICS
// ============================================================

function identity<T>(val: T): T { return val; }
identity<string>("hi");
identity(42); // inferred as number

function first<T>(arr: T[]): T { return arr[0]; }
function pair<T, U>(a: T, b: U): [T, U] { return [a, b]; }

// Generic Interface and Class
interface Box<T> { content: T; label: string }
class Store<T> {
  private items: T[] = [];
  add(item: T): void { this.items.push(item); }
  get(): T[] { return this.items; }
}

// Generic Constraint
interface HasLen { length: number }
function logLen<T extends HasLen>(item: T): void {
  console.log(item.length);
}

// keyof Constraint
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// ============================================================
// SECTION 11: UTILITY TYPES
// ============================================================

interface Todo { title: string; desc: string; done: boolean }

type T1 = Partial<Todo>;          // all optional
type T2 = Required<Todo>;         // all required
type T3 = Readonly<Todo>;         // all readonly
type T4 = Pick<Todo, "title">;    // only title
type T5 = Omit<Todo, "desc">;     // everything except desc
type T6 = Record<string, number>; // { [key: string]: number }

type Colors = "red" | "green" | "blue";
type T7 = Exclude<Colors, "red">;       // "green" | "blue"
type T8 = Extract<Colors, "red">;       // "red"
type T9 = NonNullable<string | null>;   // string
type T10 = ReturnType<typeof add>;      // number

// ============================================================
// SECTION 12: TYPE NARROWING
// ============================================================

// typeof
function handle(v: string | number): void {
  if (typeof v === "string") console.log(v.toUpperCase());
  else console.log(v.toFixed(2));
}

// instanceof
class Cat { meow() {} }
class DogC { bark() {} }
function sound(a: Cat | DogC) {
  if (a instanceof Cat) a.meow(); else a.bark();
}

// in operator
function move(a: { swim?: () => void; fly?: () => void }) {
  if ("swim" in a) a.swim?.(); else a.fly?.();
}

// Discriminated Union
interface Ok { status: "ok"; data: string }
interface Err { status: "err"; msg: string }
function handleRes(r: Ok | Err) {
  if (r.status === "ok") console.log(r.data);
  else console.log(r.msg);
}

// Custom Type Guard
interface Admin { role: "admin"; perms: string[] }
interface User { role: "user"; email: string }
function isAdmin(u: Admin | User): u is Admin { return u.role === "admin"; }

// ============================================================
// SECTION 13: MAPPED AND CONDITIONAL TYPES
// ============================================================

// Mapped Type
type Optional<T> = { [K in keyof T]?: T[K] };
type ReadOnly<T> = { readonly [K in keyof T]: T[K] };

// Conditional Type
type IsStr<T> = T extends string ? "yes" : "no";
type R1 = IsStr<string>;  // "yes"
type R2 = IsStr<number>;  // "no"

// Template Literal Type
type Event = "click" | "scroll";
type Handler = `on${Capitalize<Event>}`; // "onClick" | "onScroll"

// Index Signature
interface Dict { [key: string]: string }
let dict: Dict = { hello: "hola", bye: "adios" };

// ============================================================
// SECTION 14: MODULES AND NAMESPACES
// ============================================================

// Export:  export function fn() {}  |  export default class X {}
// Import:  import { fn } from "./file"  |  import X from "./file"
// Rename:  import { fn as myFn } from "./file"
// All:     import * as Utils from "./file"

namespace Geo {
  export function circleArea(r: number): number {
    return Math.PI * r * r;
  }
}

// ============================================================
// SECTION 15: ERROR HANDLING AND ASYNC
// ============================================================

// Try Catch
try {
  throw new Error("Something broke");
} catch (e) {
  if (e instanceof Error) console.log(e.message);
} finally {
  console.log("done");
}

// Custom Error
class AppError extends Error {
  constructor(msg: string, public code: number) {
    super(msg);
    this.name = "AppError";
  }
}

// Promises and Async/Await
async function fetchData(): Promise<string> {
  return new Promise((res) => setTimeout(() => res("data"), 500));
}
async function main() {
  const data = await fetchData();
  console.log(data);
}

// ============================================================
// SECTION 16: DECORATORS (experimental)
// ============================================================
// Enable: "experimentalDecorators": true in tsconfig.json

function Log(target: Function) {
  console.log("Class: " + target.name);
}
@Log class MyService {}

// ============================================================
// SECTION 17: TSCONFIG.JSON KEY OPTIONS
// ============================================================
// target: "ES6"              - JS version output
// module: "commonjs"         - module system
// strict: true               - all strict checks
// outDir: "./dist"           - output folder
// rootDir: "./src"           - source folder
// noImplicitAny: true        - error on implicit any
// strictNullChecks: true     - strict null checks
// esModuleInterop: true      - better module compat
// declaration: true          - generate .d.ts files

//sec 19


// ============================================================
// SECTION 18: BEST PRACTICES
// ============================================================
// 1. Enable strict mode
// 2. Avoid any, use unknown instead
// 3. Use interface for objects, type for unions
// 4. Use readonly for immutable data
// 5. Use generics for reusable code
// 6. Use utility types instead of manual types
// 7. Use discriminated unions for variants
// 8. Always handle null/undefined
// 9. Write explicit return types
// 10. Use const assertions: { x: 1 } as const
// 11. further will add in much details 
