console.log("Hello World!");


// Object Literals ({}) can be used to create generic JS Object

let dog = {

    // Object Properties
    name: "Dog",
    age: 10,
    breed: "Golden Retriever",
    color: "Brown",
    // Object method:
    bark: function() {
        console.log("Woof!");
    }
};

// Print the object
console.log(dog);

// Invoke the objects method
dog.bark();

// Creating new object using the "new" keyword
// The "new" keyword can be used to create or instantiate a generic JS object from built-in object constructor

let product = new Object();

product.name = "iPhone 18 Pro Max";
product.price = "120000";
product.color = "Matte Black";

console.log(product);

// A new object can also be created using Object.create() method.
// Object.prototype is added as the prototype to define a generic JS object
// This will also allow the object created to have access to JS Objects built-in properties and methods for Object type. 

let employee = Object.create(Object.prototype);

employee.firstName = "John";
employee.lastName = "Doe";
employee.age = 25;
employee.job = "Software Engineer";

console.log(employee);

let employee2 = Object.create(null);

employee2.firstName = "Michael";
employee2.lastName = "Jordan";
employee2.age = 25;
employee2.job = "Basketball Player";

console.log(employee2);

// Object.keys()
    // Returns an array of the keys of the given object as argument
    // Syntax:
        // Object.keys(object);

let employeeKeys = Object.keys(employee);
console.log(employeeKeys);

// Object.values()
    // Returns an array of values of the given object as argument
    // Syntax:
        // Object.values(object);

let employeeValues = Object.values(employee);
console.log(employeeValues);

// Object.entries()
    // Returns an array of key-value pairs for the given object as argument
    // Each key-value pair is returned as an array 
    // Syntax:
        // Object.entries(object);

let employeeEntries = Object.entries(employee);
console.log(employeeEntries);


// Create a simple Array

let fruits = ["Apple", "Banana", "Orange", "Mango", "Strawberry"];

console.log("Original Fruits Array: ", fruits);

// Define a function to add an element at the start of the array
function addToStart(item) {

    fruits.unshift(item);

    return fruits;

};

// Define a function to add an element at the end of the array

function addToEnd(item) {

    fruits.push(item);

    return fruits;

};

// Define a function to remove the last element from the array

function removeLast() {

    fruits.pop();

    return fruits;

};

addToStart("Blueberry");
console.log("After adding to start: ", fruits);

addToEnd("Pineapple");
console.log("After adding at end: ", fruits);

removeLast();
console.log("After removing last item: ", fruits);


// removeFirst()

function removeFirst() {

    fruits.shift();

    return fruits;

};

removeFirst();
console.log("After removing the first item:", fruits);

function replaceFruit(oldFruit, newFruit) {

    let index = fruits.indexOf(oldFruit);

    if(index !== -1) {
        fruits[index] = newFruit;
    } else {
        console.log("Fruit not found");
    }

    return fruits;

};

replaceFruit("Orange", "Watermelon");
console.log("After replacing fruit: ", fruits);

// Test if fruit doesn't exist
replaceFruit("Grapes", "Kiwi");