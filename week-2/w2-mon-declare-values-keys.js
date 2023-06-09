/*

Declare Keys/Values
Given the following declasration of an object, obj below, declare values so
that the print statements output what is expected. Try using both dot and bracket notation.
s
*/


const obj = {};

obj.firstKey = 'firstValue';
obj.numeric = '2';
obj.boolean = 'false';
obj.object = '{}';


console.log(obj['firstKey']);       // firstValue
console.log(obj['numeric']);        // 2
console.log(obj['boolean']);        // false
console.log(obj['object']);         // {}
