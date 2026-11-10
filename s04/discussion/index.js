class Student {

	// Constructor Function
	constructor(name, email, grades){
		this.name = name;
		this.email = email;
        if(grades.length === 4){
            if(grades.every(grade => grade >= 0 && grade <= 100)){
                this.grades = grades;
            } else {
                this.grades = undefined;
            }
        } else {
            this.grades = undefined;
        }
        this.gradeAve = undefined;

        // Activity 2 Solution
        this.passed = undefined;
        this.passedWithHonors = undefined;

	}

	// Class Methods / Custom Methods / Actions

	login(){
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
		this.grades.forEach(grade => sum = sum + grade);
		// Update the gradeAve property
		this.gradeAve = sum/4;
		// Return the object
		return this;
	}

	willPass() {
		this.passed = this.computeAve().gradeAve >= 85 ? true : false;
        return this;
	}

	willPassWithHonors() {
        if (this.passed) {
            if (this.gradeAve >= 90) {
                this.passedWithHonors = true;
            } else {
                this.passedWithHonors = false;
            }
        } else {
            this.passedWithHonors = false;
        }
        return this;
    }

};



class Section {

	// Constructor Function
	constructor(name) {
		this.name = name;
		this.students = [];
		this.honorStudents = undefined;
		this.honorsPercentage = undefined;
	}

	// Custom Method

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

class Grade {

    // Constructor
    constructor(level) {
        this.level = level;
        this.sections = [];
        this.totalStudents = 0;
        this.totalHonorStudents = 0;
        this.batchAverage = undefined;
        this.batchMinGrade = undefined;
        this.batchMaxGrade = undefined;
    }

    // Custsom Methods / Object Methods
    addSection(name) {
        this.sections.push(new Section(name));
        return this;
    }

    countStudents() {
        this.sections.forEach(section => this.totalStudents = this.totalStudents + section.students.length);
        return this;
    }

    countHonorStudents() {
        let count = 0;

        this.sections.forEach(section => {
            section.students.forEach(student => {
                if(student.computeAve().willPass().willPassWithHonors().passedWithHonors) {
                    count++;
                }
            })
        })

        this.totalHonorStudents = count;
        return this;

    }

    // Method to compute the average grade of all students from a specific grade level.
    computeBatchAve() {
        let sum = 0;
        let studentCount = 0;

        this.sections.forEach(section => {
            section.students.forEach(student => {

                sum = sum + student.computeAve().gradeAve;
                studentCount++;

            })
        })

        this.batchAverage = sum / studentCount;
        return this;
    }

    // Method to compute the minimum grade of the batch
    getBatchMinGrade() {
        let min;

        this.sections.forEach(section => {
            section.students.forEach(student => {
                student.grades.forEach(grade => {

                    if(typeof min === 'undefined' || grade < min) {
                        min = grade;
                    }

                })
            })
        })

        this.batchMinGrade = min;
        return this;

    }

    // Method to compute the maximum grade of the batch
    getBatchMaxGrade() {
        let max;

        this.sections.forEach(section => {
            section.students.forEach(student => {
                student.grades.forEach(grade => {

                    if(typeof max === 'undefined' || grade > max) {
                        max = grade;
                    }

                })
            })
        })

        this.batchMaxGrade = max;
        return this;

    }

};


// Test Case
// Instantiate new Grade object
const grade1 = new Grade(1);

// add sections to this grade level 
grade1.addSection("section1A");
grade1.addSection("section1B");
grade1.addSection("section1C");
grade1.addSection("section1D");

// console.log(grade1);
// console.log(grade1.sections[0]);

// Save each section of this grade level as constants
const section1A = grade1.sections.find(section => section.name === "section1A");
const section1B = grade1.sections.find(section => section.name === "section1B");
const section1C = grade1.sections.find(section => section.name === "section1C");
const section1D = grade1.sections.find(section => section.name === "section1D");

// Populate the sections with students:
section1A.addStudent('John', 'john@mail.com', [89, 84, 78, 88]);
section1A.addStudent('Joe', 'joe@mail.com', [78, 82, 79, 85]);
section1A.addStudent('Jane', 'jane@mail.com', [87, 89, 91, 93]);
section1A.addStudent('Jessie', 'jessie@mail.com', [91, 89, 92, 93]);

section1B.addStudent('Jeremy', 'jeremy@mail.com', [85, 82, 83, 89]);
section1B.addStudent('Johnny', 'johnny@mail.com', [82, 86, 77, 88]);
section1B.addStudent('Jerome', 'jerome@mail.com', [89, 85, 92, 91]);
section1B.addStudent('Janine', 'janine@mail.com', [90, 87, 94, 91]);

section1C.addStudent('Faith', 'faith@mail.com', [87, 85, 88, 91]);
section1C.addStudent('Hope', 'hope@mail.com', [85, 87, 84, 89]);
section1C.addStudent('Love', 'love@mail.com', [91, 87, 90, 88]);
section1C.addStudent('Joy', 'joy@mail.com', [92, 86, 90, 89]);

section1D.addStudent('Eddie', 'eddie@mail.com', [85, 87, 86, 92]);
section1D.addStudent('Ellen', 'ellen@mail.com', [88, 84, 86, 90]);
section1D.addStudent('Edgar', 'edgar@mail.com', [90, 89, 92, 86]);
section1D.addStudent('Eileen', 'eileen@mail.com', [90, 88, 93, 84]);

console.log(grade1);
console.log(grade1.sections[0]);
console.log(grade1.sections[0].students[1]);