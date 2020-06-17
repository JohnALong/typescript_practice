"use strict";
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
myVariable.toUpperCase();
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
