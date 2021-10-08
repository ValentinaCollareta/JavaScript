/******************************
* 4. If Else
* ****************************/

/*  a) Create a random number between 0 and 1 using the function Math.random(), if the value is
greater or equal than 0,5 show an alert with the message “Greater than 0,5” and if not 
an alert with the message “Lower than 0,5”. */

var randomNumber = Math.random();
console.log("Number: " + randomNumber);
if (randomNumber >= 0.5) {
    alert("Greater than 0,5");
} else {
    alert("Lower than 0,5");
}

/*  b) Create a variable "Age" with a integer number between 0 and 100 and show the
next alert messages:
i) “Baby” if the age is less than 2 years old;
ii) “Kid” if the age is between 2 and 12 years old;
iii) “Teenager” between 13 and 19 years old;
iv) “Young adult” between 20 and 30 years old;
v) “Adult” between 31 and 60 years old;
vi) “Old adult” between 61 and 75 years old;
vii) “Elderly” if is greater than 75 years old. */

var age = Math.floor(Math.random()*100);
console.log("Age: " + age);
if (age < 2) {
    alert("Baby");
} else if (age >= 2 && age < 13) {
    alert("Kid");
} else if (age >= 13 && age < 20) {
    alert("Teenager");
} else if (age >= 20 && age < 31) {
    alert("Young adult");
} else if (age >= 31 && age < 61) {
    alert("Adult");
} else if (age >= 61 && age < 76) {
    alert("Old adult");
} else if (age > 75) {
    alert("Elderly");
}