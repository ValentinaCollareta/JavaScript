/******************************
* 5. Functions
* ****************************/

/* a. Create a function 'sum' that recieve 2 numeric values and return the
result. Execute the function and store the result in a variable, showing
the value of that variable in the console of the navigator.*/

function sum(num1,num2) {
    return num1 + num2;
}
var result = sum(5,6);
console.log(result);

/* b. To the function created before, add a validation to control if
some of the parameters is not a number, show an alert clarifying that one
of the parameters have an error and return the NaN value as result.*/

function sum(num1,num2) {
    if (typeof num1 != 'number' || typeof num2 != 'number') {
        alert('One of the parameters have an error.')
        result = NaN;
        console.log(result);
    }
    return num1 + num2;
}
result = sum(5,6);
console.log(result);

/* c. Create a function validate integer who recieve a number as parameter
and return true if is an integer number.*/

function validateInteger(num) {
    if (Number.isInteger(num)) {
        console.log(true);
    }
}
validateInteger(1);

/* d. To the function 'sum' of the 6 b) exercise, add a call that validate
the numbers are integers. In case of decimal numbers, show an alert
with the error and return the number converted to integer.*/

function sum(num1,num2) {
    validateDecimal(num1, num2);
    return num1 + num2;
}

function validateDecimal(num1, num2) {
    if (!Number.isInteger(num1)) {
        alert('The number is decimal.')
        console.log(Math.floor(num1))
    }
    if (!Number.isInteger(num2)) {
        alert('The number is decimal.')
        console.log(Math.floor(num2))
    }
}
validateDecimal(1.5, 5);

/* e. Convert the validation of 6 b) exercise into a separate function
and call it insite the 'sum' function testing that everything still working.*/

function sum(num1,num2) {
    validation(num1, num2);
    return num1 + num2;
}
function validation(num1, num2) {
    if (typeof num1 != 'number' || typeof num2 != 'number') {
        alert('One of the parameters have an error.')
        result = NaN;
        console.log(result);
    }
}
result = sum('hola', 7);