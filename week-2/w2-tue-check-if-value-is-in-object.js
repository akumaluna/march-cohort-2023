/*

Check if value is in object
Write a function valInObject that accepts an object, obj, and a value
The function should return true if that value is indeed a value in the object, or false otherwise.

*/

//for x if OTP

const obj = {
    item1: "jar",
    item2: "pot",
    item3: "spatula",
    item3: "whisk"
}

const valInObject = (obj, value) => {
    for (const key in obj) {
        if (obj[key] === value) return true;
        }
        return false;
    }

console.log(valInObject(obj, "jar"));             // true
console.log(valInObject(obj, "pot"));             // true
console.log(valInObject(obj, "cup"));             // false
console.log(valInObject(obj, "fork"));            // false
