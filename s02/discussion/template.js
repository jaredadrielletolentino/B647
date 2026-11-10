//without the use of objects, our students from before would be organized as follows if we are to record additional information about them

//create student one
let studentOneFirstName = "John";
let studentOneLastName = "Smith";
let studentOneEmail = "johnSmith@mail.com"
let studentOnegrades = [89, 84, 78, 88];

//create student two
let studentTwoFirstName = 'Joel';
let studentTwoLastName = 'Anthony';
let studentTwoEmail = 'jAnthony@mail.com';
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

//actions that students may perform will be lumped together
function login(email){
    console.log(`${email} has logged in`);
}

function logout(email){
    console.log(`${email} has logged out`);
}

function listGrades(firstName, grades){
    console.log(`${firstName}'s quarterly grade averages are: ${grades}`);
}

//This way of organizing students are not well organized at all.