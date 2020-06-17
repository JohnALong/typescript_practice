export {}

let message = 'Welcome Back';
console.log(message);

let sum;
const title = 'Codevolution';

let isBeginner: boolean = true;
let total: number = 0;
let name: string = "John";

let sentence: string = `My name is ${name}
I am a beginner in typescript`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

// null & undefined are subtypes of all other types

let isNew: boolean = null;
let myName: string = undefined;

// both are fine - how to define arrays
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1,2,3];

let person1: [string, number] = ['Chris', 22];

enum Color {Red, Green, Blue};

let c: Color = Color.Green;
console.log(c);


// any type is valuable when converting from vanilla js to typescript
let randomValue: any = 10;
randomValue = true;
randomValue = "Long"

let myVariable: unknown = 10;

// downsides to type any - typescript will not throw error for any of the following lines - using type unknown makes the compiler "see" the type before allowing methods to be available
function hasName(obj: any): obj is {name: string} {
    return !!obj &&
    typeof obj === "object" && "name" in obj
}

if (hasName(myVariable)) {
    console.log(myVariable.name);
}
// as string is type assertion letting typescript know that we have manually checked that myVariable is a string
(myVariable as string).toUpperCase();

// because a is not assigned a value, ts will allow you to change the type assigned to a and can not infer what you wanted originally
let a;
a = 10;
a = true;

// because you assigned a value to b, ts infers type and won't allow a different type to be assigned
// let b = 20;
// b = true;

// ts lets you assign multiple types with the pipe useful for api calls where number may be sent back as a string - by having multi type, you can then use methods to convert string to number for use on the dom
let multiType: number | boolean;

multiType = 20;
multiType = false;

// will do the same thing, but much less control since it will take ANY value - any also does not support intellisense
let anyType: any;
anyType = 20;
anyType = true;











