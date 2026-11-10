// console.log("Hello World");

//create student one
let studentOneFirstName = "John";
let studentOneLastName = "Smith";
let studentOneEmail = "johnSmith@mail.com";
let studentOneGrades = [89, 84, 78, 88];

// console.log(studentOneFirstName);
// console.log(studentOneLastName);
// console.log(studentOneEmail);
// console.log(studentOneGrades);

// Use the Object Literals to put together all the relevant data(properties) and object behavior(methods) in one container or variable

// let studentOne = {

//     firstName: "John",
//     lastName: "Smith",
//     email: "johnsmith@mail.com",
//     grades: [89, 84, 78, 88]

// };

// console.log(studentOne);
// console.log(`Student one's first name is ${studentOne.firstName}`);
// console.log(`Student one's last name is ${studentOne.lastName}`);
// console.log(`Student one's email is ${studentOne.email}`);
// console.log(`Student one's quarterly grade averages are ${studentOne.grades}`);

//actions that students may perform will be lumped together
// function login(email){
//     console.log(`${email} has logged in`);
// }

// function logout(email){
//     console.log(`${email} has logged out`);
// }

// function listGrades(firstName, grades){
//     console.log(`${firstName}'s quarterly grade averages are: ${grades}`);
// }

// login(studentOne.email);
// logout(studentOne.email);
// listGrades(studentOne.firstName, studentOne.grades);

// Improved Implementation of Object Encapsulation
    // Both object properties and methods are now wrapped inside a single {}

// let studentOne = {

//     // Properties
//     firstName: "John",
//     lastName: "Smith",
//     email: "johnsmith@mail.com",
//     grades: [89, 84, 78, 88],

//     // Object Method(Standard Syntax)
//         // Add the functionalities available to a student as object methods.
    
//     login: function() {
//         console.log(`${this.email} has logged in`);
//     },
//     logout: function() {
//         console.log(`${this.email} has logged out`);
//     },
//     listGrades: function() {
//         console.log(`${this.firstName}'s quarterly grade averages are: ${this.grades}`);
//     }

// };

let studentOne = {

    // Properties
    firstName: "John",
    lastName: "Smith",
    email: "johnsmith@mail.com",
    grades: [89, 84, 78, 88],

    // Object Method(shorthand syntax)
        // A shorter ES6 Syntax for defining object methods.
        // This is now the more preferred modern way of declaring object methods
    login() {
        console.log(`${this.email} has logged in`);
    },

    logout() {
        console.log(`${this.email} has logged out`);
    },

    listGrades() {
        console.log(`${this.firstName}'s quarterly grade averages are: ${this.grades}`);
    }

};

// Mini Activity:
	// 1. Using the second student information from the template.js, create a new studentTwo object using the Object Literals syntax.
	// 2. studentTwo should have the exact properties and values provided.
	// 3. studentTwo should have the same set of functions as studentOne. Use the ES6 shorthand syntax to write the functions.
	// 4. In the browser console print the studentTwo object.
	// 5. Invoke studentTwo's object method in the following sequence:
		// login()
		// listGrades()
		// logout()
	// 6. Screenshot your outpunt in the browser console and share it in our batch space.

    //create student two
let studentTwoFirstName = 'Joel';
let studentTwoLastName = 'Anthony';
let studentTwoEmail = 'jAnthony@mail.com';
let studentTwoGrades = [78, 82, 79, 85];

let studentTwo = {

    // Properties
    firstName: "Joel",
    lastName: "Anthony",
    email: "jAnthony@mail.com",
    grades: [78, 82, 79, 85],
    
    // Object Method(shorthand syntax)
        // A shorter ES6 Syntax for defining object methods.
        // This is now the more preferred modern way of declaring object methods
    login() {
        console.log(`${this.email} has logged in`);
    },

    logout() {
        console.log(`${this.email} has logged out`);
    },

    listGrades() {
        console.log(`${this.firstName}'s quarterly grade averages are: ${this.grades}`);
    }
}