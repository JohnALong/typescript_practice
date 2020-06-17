"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'Welcome Back';
console.log(message);
var sum;
var title = 'Codevolution';
var isBeginner = true;
var total = 0;
var name = "John";
var sentence = "My name is " + name + "\nI am a beginner in typescript";
console.log(sentence);
var n = null;
var u = undefined;
// null & undefined are subtypes of all other types
var isNew = null;
var myName = undefined;
// both are fine - how to define arrays
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['Chris', 22];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
// any type is valuable when converting from vanilla js to typescript
var randomValue = 10;
randomValue = true;
randomValue = "Long";
var myVariable = 10;
// downsides to type any - typescript will not throw error for any of the following lines - using type unknown makes the compiler "see" the type before allowing methods to be available
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" && "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
// as string is type assertion letting typescript know that we have manually checked that myVariable is a string
// (myVariable as string).toUpperCase();
// because a is not assigned a value, ts will allow you to change the type assigned to a and can not infer what you wanted originally
var a;
a = 10;
a = true;
// because you assigned a value to b, ts infers type and won't allow a different type to be assigned
// let b = 20;
// b = true;
// ts lets you assign multiple types with the pipe useful for api calls where number may be sent back as a string - by having multi type, you can then use methods to convert string to number for use on the dom
var multiType;
multiType = 20;
multiType = false;
// will do the same thing, but much less control since it will take ANY value - any also does not support intellisense
var anyType;
anyType = 20;
anyType = true;
// normal js function
function add(num1, num2) {
    return num1 + num2;
}
// typescript function by giving a type to parameters
// adding question mark at the end of the parameter allows you to only have to pass one argument and not throw errors
function addTS(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
addTS(5, 3);
addTS(4);
function addTSSetValueParameter(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
// both return 15 because you set a default value for num2 so the else never runs
addTSSetValueParameter(5, 10);
addTSSetValueParameter(5);
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: "Bruce",
    lastName: "Wayne"
};
fullName(p);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var employee1 = new Employee('John');
console.log(employee1.employeeName);
employee1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
// access properties default is public
