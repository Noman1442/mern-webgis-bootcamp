// Variable Declaration
let name = "Noman Ahmad";     // String
let age = 1442;           // Number
let isStudent = false;   // Boolean
let salary = null;      // Null
let city ="Gujranwala";               // Undefined
let hobbies = ["Coding", "Gaming", "Reading", "Learning"];
hobbies.push("Traveling", "Photography");

// Display variables
console.log(hobbies); 
console.log("Name:", name);
console.log("Age:", age);
console.log("Student:", isStudent);
console.log("Salary:", salary);
console.log("City:", city);
console.log(hobbies[2]); 
console.log(hobbies[1]); 
hobbies.forEach(function (hobby) {
    console.log(hobby);
});
