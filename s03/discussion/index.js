// In JavaScript there are two ways of creating a blueprint
    // 1. Prototypes
        // Constructor Function
        // Built-in Object Constructor
    // 2. Classes

// Constructor Function
    // The Naming convention for the constructor function uses Pascal casing. It should be capitalized.

function Person(name, age, gender) {

    // Properties
    this.name = name;
    this.age = age;
    this.gender = gender;
    
    // Method or Action
    this.greet = function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

// Instantiate a new object from our Person constructor/prototype
    // Instantiation is when an object is created from a blueprint 
    // The "new" keyword is used to instantiate an object from a prototype or a class.

let personOne = new Person('John', 25, 'male');

console.log(personOne);

// Invoke the object method of personOne.
personOne.greet();

let personTwo = Object.create(Person.prototype);
console.log(personTwo);

// Class in JS
// This Student class is a blueprint that can be used for instantiating a student object.
// Whatever properties and methods this Student class have will also be created with the student object/instance.
class Student {

    // constructor function
    // this contructor allows to instantiate a student object based on the properties defined within it.
    constructor(name, email, grades) {
        this.name = name;
        this.email = email;

        // Validate that grades is an array, has exactly 4 elements, 
        // and every element is a number between 0 and 100
        if (
            Array.isArray(grades) &&
            grades.length === 4 &&
            grades.every(grade => typeof grade === 'number' && grade >= 0 && grade <= 100)
        ) {
            this.grades = grades;
        } else {
            this.grades = undefined; // Set to undefined if any condition fails
        }
        this.gradeAve = undefined;
        this.passed = undefined;
        this.passedWithHonors = undefined
    }

    // Class Methods

    login() {
        console.log(`${this.email} has logged in`);
        return this;
    }

    logout() {
        console.log(`${this.email} has logged out`);
        return this;
    }

    listGrades() {
        console.log(`${this.name}'s quarterly grade averages are: ${this.grades}`);
        return this;
    }

    computeAve() {
        let sum = 0;
        this.grades.forEach(grade =>  sum = sum + grade);

        this.gradeAve = sum/4;

        return this;
    }

    willPass() {
        this.passed = this.gradeAve >= 85 ? true : false;
        return this;
    }

    willPassWithHonors() {
        if (this.passed) {
            this.passedWithHonors = this.gradeAve >= 90 ? true : false;
        } else {
            this.passedWithHonors = undefined;
        }
        return this;
    }

};

// For Testing in browser console
// studentOne.login().computeAve().willPass().willPassWithHonors().logout();

let studentOne = new Student('John', 'john@mail.com', [89, 84, 78, 88]);
let studentTwo = new Student('Joe', 'joe@mail.com', [78, 82, 79, 85]);
let studentThree = new Student('Jane', 'jane@mail.com', [87, 89, 91, 93]);
let studentFour = new Student('Jessie', 'jessie@mail.com', [91, 89, 92, 93]);
// let studentFive = new Student('John', 'john@mail.com', [84, 78, 88]);
// let studentSix = new Student('Jane', 'jane@mail.com', [101, 84, 78, 88]);
// let studentSeven = new Student('Jessie', 'jessie@mail.com', [-10, 84, 78, 88]);
// let studentEight = new Student('Joe', 'joe@mail.com', ['hello', 84, 78, 88]);

// console.log("Task 1:", studentFive);
// console.log("Task 1:", studentSix);
// console.log("Task 1:", studentSeven);
// console.log("Task 1:", studentEight);
console.log("Task 2:", studentOne);
console.log("Task 2:", studentTwo);
console.log("Task 2:", studentThree);
console.log("Task 2:", studentFour);

// 4 Components of Classes
    // 1. Properties
    // 2. Constructor - Function that creates the instance of the object
    // 3. Getters and Setters
    // 4. Object Method/Actions


// Nested Class

class Section {

    // Every Section object will instantiated with an empty array for its student
    constructor(name) {
        this.name = name;
        this.students = [];
        this.honorStudents = undefined;
        this.honorsPercentage = undefined;
    }

    // Custom Method
    // this will take in the same arguments needed to instantiate a Student object
    addStudent(name, email, grades) {
        this.students.push(new Student(name, email, grades));
        return this;
    }

    countHonorStudents() {
        let count = 0;

        this.students.forEach(student => {

            if(student.computeAve().willPass().willPassWithHonors().passedWithHonors) {
                count++;
            }
        })

        this.honorStudents = count;
        return this;
    }

    computeHonorsPercentage() {
        
        this.honorsPercentage = (this.honorStudents / this.students.length) * 100;

        return this;
    }

};

// Invoke the Section class constructor through the use of the new keyword
const section1A = new Section('Section1A');

console.log(section1A);

// Start adding students in the section1A object
section1A.addStudent('John', 'john@mail.com', [89, 84, 78, 88]);

section1A.addStudent('Joe', 'joe@mail.com', [78, 82, 79, 85]);

section1A.addStudent('Jane', 'jane@mail.com', [87, 89, 91, 93]);

section1A.addStudent('Jessie', 'jessie@mail.com', [91, 89, 92, 93]);

console.log(section1A.students[0]);
console.log(section1A.students[1]);
console.log(section1A.students[2]);
console.log(section1A.students[3]);