/*

Answer the following questions:

1. How do you create arrays in JS?

Answer: Using square brackets

2. How do you access the first character of an array?

Answer: Using index

3. How do you access the last character of an array?

Answer: Dynamic Indexing (Traditional): Subtract 1 from the arrays length property, because indices are zero-based while length is one-based

4. What array method searches for, and returns the index of a given value in an array? This method returns -1 if given value is not found in the array.

Answer: Using indexOf() method. It searches the array for a specified element and returns its first matching index

5. What array method loops over all elements of an array, performing a user-defined function on each iteration?

Answer: Using forEach() method. It executes a provided callback function once for each array element, typically used for side effects

6. What array method creates a new array with elements obtained from a user-defined function?

Answer: Using map() method. It calls a provided callback function on every element in the calling array and constructs a brand new array from the results, leaving the original array completely untouched

7. What array method checks if all its elements satisfy a given condition?

Answer: Using every() method. It tests whether all elements in the array pass the test implemented by the provided callback function, returning a Boolean value (true or false)

8. What array method checks if at least one of its elements satisfies a given condition?

Answer: Using some() method. It tests whether at least one element in the array passes the test implemented by the provided callback function, returning true as soon as it finds a match, or false if all fail

9. True or False: array.splice() modifies a **copy** of the array, leaving the original unchanged.

Answer: False

10. True or False: array.slice() copies elements from original array and returns them as a new array.

Answer: True
*/

let students = ["John", "Joe", "Jane", "Jessie"];

// Function coding 1
function addToEnd(arr, element) {

    if(typeof element !== "string") {
        return "error - can only add strings to an array";
    }

    // if it is a string, add it to the end of the array
    arr.push(element);

    // Return the updated array
    return arr;

}

addToEnd(students, "Ryan");
console.log("Func Coding 1: After adding at end: ", students);

console.log("Func Coding 1:", addToEnd(students, 45));

// Function coding 2
function addToStart(arr, element) {
    
    if(typeof element !== "string") {
        return "error - can only add strings to an array";
    }

    arr.unshift(element);
    return arr;
}

addToStart(students, "Tess");
console.log("Func Coding 2: After adding to start: ", students);

console.log("Func Coding 2:", addToStart(students, 33));

// Function coding 3
function elementChecker(arr, value) {

    if(arr.length === 0) {
        return "error - passed in array is empty";
    }

    return arr.some(element => element === value);
}

console.log("Func Coding 3: Result of checking existing element:", elementChecker(students, "Jane"));

console.log("Func Coding 3:", elementChecker([], "Jane"));

// Function coding 4
function checkAllStringsEnding(arr, char) {

    if (arr.length === 0) {
        return "error - array must NOT be empty";
    }
    
    if (!arr.every(item => typeof item === "string")) {
        return "error - all array elements must be strings";
    }
    
    if (typeof char !== "string") {
        return "error - 2nd argument must be of data type string";
    }
    
    if (char.length > 1) {
        return "error - 2nd argument must be a single character";
    }
    
    return arr.every(item => item.endsWith(char));
}

console.log("Func Coding 4:", checkAllStringsEnding(students, "e"));

console.log("Func Coding 4:", checkAllStringsEnding([], "e"));

console.log("Func Coding 4:", checkAllStringsEnding(["Jane", 02], "e"));

console.log("Func Coding 4:", checkAllStringsEnding(students, "el"));

console.log("Func Coding 4:", checkAllStringsEnding(students, 4));

// Function coding 5
function stringLengthSorter(arr) {

    if (!arr.every(item => typeof item === "string")) {
        return "error - all array elements must be strings";
    }
    
    return arr.sort((a, b) => a.length - b.length);
}

console.log("Func Coding 5:", stringLengthSorter(students));

console.log("Func Coding 5:", stringLengthSorter([37, "John", 39, "Jane"]));

// Function coding 6
function startsWithCounter(arr, char) {
    
    if (arr.length === 0) {
        return "error - array must NOT be empty";
    }
    
    if (!arr.every(item => typeof item === "string")) {
        return "error - all array elements must be strings";
    }
    
    if (typeof char !== "string") {
        return "error - 2nd argument must be of data type string";
    }
    
    if (char.length > 1) {
        return "error - 2nd argument must be a single character";
    }
    
    let count = 0;
    for (let item of arr) {
        // Convert both to lowercase to make it case-insensitive
        if (item.toLowerCase().startsWith(char.toLowerCase())) {
            count++;
        }
    }
    return count;
}

console.log("Func Coding 6:", startsWithCounter(students, "j"));

console.log("Func Coding 6:", startsWithCounter([], "J"));

console.log("Func Coding 6:", startsWithCounter(["John", 123, "Jane"], "J"));

console.log("Func Coding 6:", startsWithCounter(students, 5));

console.log("Func Coding 6:", startsWithCounter(students, "Jo"));


// Function coding 7
function likeFinder(arr, searchStr) {
    
    if (arr.length === 0) {
        return "error - array must NOT be empty";
    }
    
    if (!arr.every(item => typeof item === "string")) {
        return "error - all array elements must be strings";
    }
    
    if (typeof searchStr !== "string") {
        return "error - 2nd argument must be of data type string";
    }
    
    return arr.filter(item => 
        item.toLowerCase().includes(searchStr.toLowerCase())
    );
}

console.log("Func Coding 7:", likeFinder(students, "jo"));

console.log("Func Coding 7:", likeFinder([], "jo"));

console.log("Func Coding 7:", likeFinder(["John", 123, "Jane"], "jo"));

console.log("Func Coding 7:", likeFinder(students, 45));
// Function coding 8
function randomPicker(arr) {
    // Generate a random index from 0 up to arr.length - 1
    let randomIndex = Math.floor(Math.random() * arr.length);
    
    // Return the element at that random index
    return arr[randomIndex];
}

console.log("Func Coding 8:", randomPicker(students));

console.log("Func Coding 8:", randomPicker(students));

console.log("Func Coding 8:", randomPicker(students));

// Do not change
try{
        module.exports = {
            addToEnd: typeof addToEnd !== 'undefined' ? addToEnd : null,
            addToStart: typeof addToStart !== 'undefined' ? addToStart : null,
            elementChecker: typeof elementChecker !== 'undefined' ? elementChecker : null,
            stringLengthSorter: typeof stringLengthSorter !== 'undefined' ? stringLengthSorter : null,
            startsWithCounter: typeof startsWithCounter !== 'undefined' ? startsWithCounter : null,
            likeFinder: typeof likeFinder !== 'undefined' ? likeFinder : null,
            randomPicker: typeof randomPicker !== 'undefined' ? randomPicker : null,
        }
    } catch(err){
    }