/*
Quiz: 

1. What is the term given to unorganized code that's very hard to work with?
* Answer: Spaghetti Code

2. How are object literals written in JS?
* Answer: Using curly braces {}

3. What do you call the concept of organizing information and functionality to belong to an object?
* Answer: Encapsulation

4. If the studentOne object has a method named enroll(), how would you invoke it?
* Answer: studentOne.enroll();

5. True or False: Objects can have objects as properties.
* Answer: True

6. What is the syntax in creating key-value pairs?
* Answer: key: value

7. True or False: A method can have no parameters and still work.
* Answer: True

8. True or False: Arrays can have objects as elements.
* Answer: True

9. True or False: Arrays are objects.
* Answer: True

10. True or False: Objects can have arrays as properties.
* Answer: True



// =============================================================================================================



*/

// Function Coding Activity:

// 1. Translate the other students from our boilerplate code into their own respective objects.

// 2. Define a method called computeAve() for EACH student object that will compute for their grade average (total of grades divided by 4)

// 3. Define a method for all student objects named willPass() that returns a Boolean value indicating if student will pass or fail. For a student to pass, their ave. grade must be greater than or equal to 85.

// 4. Define a method for all student objects named willPassWithHonors() that returns true if ave. grade is greater than or equal to 90, false if >= 85 but < 90, and undefined if < 85 (since student will not pass).

// 5. Create an object named classOf1A with a property named students which is an array containing all 4 student objects in it.

// 6. Create a method for the object classOf1A named countHonorStudents() that will return the number of honor students.

// 7. Create a method for the object classOf1A named honorsPercentage() that will return the % of honor students from the batch's total number of students.

// 8. Create a method for the object classOf1A named retrieveHonorStudentInfo() that will return all honor students' emails and ave. grades as an array of objects.

// 9. Create a method for the object classOf1A named sortHonorStudentsByGradeDesc() that will return all honor students' emails and ave. grades as an array of objects sorted in descending order based on their grade averages.

// 10. Add and commit your updates to Zuitt Git

// 11. Update your local individual git repository and push to git with the commit message of Add activity code s02.

// 12. Add the sessions repo link in Boodle for s02.


// =============================================================================================================

// Solution Here:

// Activity 1
//create student one
let studentOneFirstName = "John";
let studentOneLastName = "Smith";
let studentOneEmail = "john@mail.com"
let studentOnegrades = [89, 84, 78, 88];

//create student two
let studentTwoFirstName = 'Joe';
let studentTwoLastName = 'Anthony';
let studentTwoEmail = 'joe@mail.com';
let studentTwoGrades = [78, 82, 79, 85];

//create student three
let studentThreeFirstName = 'Jane';
let studentThreeLasstName = 'Santos';
let studentThreeEmail = 'jane@mail.com';
let studentThreeGrades = [87, 89, 91, 93];

//create student four
let studentFourFirstName = 'Jessie';
let studentFourLastName = 'Taylor';
let studentFourEmail = 'jessie@mail.com';
let studentFourGrades = [91, 89, 92, 93];

//Create an object for the first student
let studentOne = {
    name: 'John', //Each key-value pair is formatted as key : value, and each key-value pair is separated by commas.
    email: 'john@mail.com',
    grades: [89, 84, 78, 88],
    //add the functionalities available to a student as object methods
        //the keyword "this" refers to the object encapsulating the method where "this" is called
    login(){
        //this.email implies studentOne.email
        console.log(`${this.email} has logged in`);
    },
    logout(){
        console.log(`${this.email} has logged out`);
    },
    listGrades(){
        console.log(`${this.name}'s quarterly grade averages are: ${this.grades}`);
    },
    //Create function that will get the quarterly average of studentOne's grades
    computeAve(){
       let sum = this.grades.reduce((total, grade) => total + grade, 0);
       return sum / this.grades.length;
    },

    //Create function that will return true if average grade is >=85, false otherwise
    willPass() {
        return this.computeAve() >= 85;
    },

    //Create a function called willPassWithHonors() that returns true if the student has passed and their average grade is >= 90. The function returns false if either one is not met.
    willPassWithHonors() {
        let ave = this.computeAve();
        if (ave >= 90) {
            return true;
        } else if (ave >= 85) {
            return false;
        } else {
            // returns undefined if < 85
            return undefined; 
        }
    }
}

//Create an object for the second student
let studentTwo = {
    name: 'Joe',
    email: 'joe@mail.com',
    grades: [78, 82, 79, 85],
    login(){
        console.log(`${this.email} has logged in`);
    },
    logout(){
        console.log(`${this.email} has logged out`);
    },
    listGrades(){
        console.log(`${this.name}'s quarterly grade averages are: ${this.grades}`);
    },
    //Create function that will get the quarterly average of studentOne's grades
    computeAve(){
       let sum = this.grades.reduce((total, grade) => total + grade, 0);
       return sum / this.grades.length;
    },
    //Create function that will return true if average grade is >=85, false otherwise
    willPass() {
        return this.computeAve() >= 85;
    },
    //Create a function called willPassWithHonors() that returns true if the student has passed and their average grade is >= 90. The function returns false if either one is not met.
    willPassWithHonors() {
        let ave = this.computeAve();
        if (ave >= 90) {
            return true;
        } else if (ave >= 85) {
            return false;
        } else {
            // returns undefined if < 85
            return undefined; 
        }
    }
    
}

//Create an object for the third student
let studentThree = {
    // Code solution here
    name: 'Jane',
    email: 'jane@mail.com',
    grades: [87, 89, 91, 93],
    login(){
        console.log(`${this.email} has logged in`);
    },
    logout(){
        console.log(`${this.email} has logged out`);
    },
    listGrades(){
        console.log(`${this.name}'s quarterly grade averages are: ${this.grades}`);
    },
    //Create function that will get the quarterly average of studentOne's grades
    computeAve(){
       let sum = this.grades.reduce((total, grade) => total + grade, 0);
       return sum / this.grades.length;
    },
    //Create function that will return true if average grade is >=85, false otherwise
    willPass() {
        return this.computeAve() >= 85;
       
    },
    //Create a function called willPassWithHonors() that returns true if the student has passed and their average grade is >= 90. The function returns false if either one is not met.
    willPassWithHonors() {
        let ave = this.computeAve();
        if (ave >= 90) {
            return true;
        } else if (ave >= 85) {
            return false;
        } else {
            // returns undefined if < 85
            return undefined; 
        }
    }
}

//Create an object for the fourth student
let studentFour = {
    // Code solution here
    name: 'Jessie',
    email: 'jessie@mail.com',
    grades: [91, 89, 92, 93],
    login(){
        console.log(`${this.email} has logged in`);
    },
    logout(){
        console.log(`${this.email} has logged out`);
    },
    listGrades(){
        console.log(`${this.name}'s quarterly grade averages are: ${this.grades}`);
    },
    //Create function that will get the quarterly average of studentOne's grades
    computeAve(){
       let sum = this.grades.reduce((total, grade) => total + grade, 0);
       return sum / this.grades.length;
    },
    //Create function that will return true if average grade is >=85, false otherwise
    willPass() {
        return this.computeAve() >= 85;
       
    },
    //Create a function called willPassWithHonors() that returns true if the student has passed and their average grade is >= 90. The function returns false if either one is not met.
    willPassWithHonors() {
        let ave = this.computeAve();
        if (ave >= 90) {
            return true;
        } else if (ave >= 85) {
            return false;
        } else {
            // returns undefined if < 85
            return undefined; 
        }
    }
}

console.log("Task 1 studentOne:", studentOne);
console.log("Task 1 studentTwo:", studentTwo);
console.log("Task 1 studentThree:", studentThree);
console.log("Task 1 studentFour:",studentFour);

console.log("Task 2 studentOne:", studentOne.computeAve());
console.log("Task 2 studentTwo:", studentTwo.computeAve());
console.log("Task 2 studentThree:", studentThree.computeAve());
console.log("Task 2 studentFour:", studentFour.computeAve());

console.log("Task 3 studentOne:", studentOne.willPass());
console.log("Task 3 studentTwo:", studentTwo.willPass());
console.log("Task 3 studentThree:", studentThree.willPass());
console.log("Task 3 studentFour:", studentFour.willPass());

console.log("Task 4 studentOne:", studentOne.willPassWithHonors());
console.log("Task 4 studentTwo:", studentTwo.willPassWithHonors());
console.log("Task 4 studentThree:", studentThree.willPassWithHonors());
console.log("Task 4 studentFour:", studentFour.willPassWithHonors());


// Create an object named classOf1A anc create its methods.
const classOf1A = {
    
    // Code solution here
    students: [studentOne, studentTwo, studentThree, studentFour],

    countHonorStudents() {
        let honorStudents = this.students.filter(student => student.willPassWithHonors() === true);
        
        // Return the count of those honor students
        return honorStudents.length;
    },

    honorsPercentage() {
        let percentage = (this.countHonorStudents() / this.students.length) * 100;
        return percentage;
    },
    retrieveHonorStudentInfo() {

        let honorStudents = this.students.filter(student => student.willPassWithHonors() === true);
        
        let honorInfo = honorStudents.map(student => {
            return {
                aveGrade: student.computeAve(),
                email: student.email
            };
        });

        return honorInfo;
    },
    sortHonorStudentsByGradeDesc() {

        let honorInfo = this.retrieveHonorStudentInfo();

        return honorInfo.sort((a, b) => b.aveGrade - a.aveGrade);
    }
}

console.log("Task 5:", classOf1A);

console.log("Task 6:", classOf1A.countHonorStudents());

console.log("Task 7:", classOf1A.honorsPercentage(),"%");

console.log("Task 8:", classOf1A.retrieveHonorStudentInfo());

console.log("Task 9:", classOf1A.sortHonorStudentsByGradeDesc());