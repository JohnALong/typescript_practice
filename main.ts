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
// (myVariable as string).toUpperCase();

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

// normal js function
function add(num1, num2) {
    return num1 + num2;
}

// typescript function by giving a type to parameters

// adding question mark at the end of the parameter allows you to only have to pass one argument and not throw errors
function addTS(num1: number, num2?: number): number {
    if (num2)
        return num1 + num2
    else
        return num1;
}

addTS(5, 3);
addTS(4)

function addTSSetValueParameter(num1: number, num2: number = 10): number {
    if (num2)
        return num1 + num2;
    else
        return num1;
}

// both return 15 because you set a default value for num2 so the else never runs
addTSSetValueParameter(5, 10)
addTSSetValueParameter(5)


interface Person {
    firstName: string;
    lastName?: string;
}

function fullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: "Bruce",
    lastName: "Wayne"
};

fullName(p);


class Employee {
    public employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Good Morning ${this.employeeName}`);
    }
}

let employee1 = new Employee('John');
console.log(employee1.employeeName);
employee1.greet();

class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }
    delegateWork() {
        console.log(`Manager delegating tasks`);
    }
}

let m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

// access properties default is public




























