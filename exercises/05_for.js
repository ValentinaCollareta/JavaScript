/******************************
* 5. For
* ****************************/

/* a. Create an array which contains 5 words and iterate over an array using
JavaScript For to show an alert with each word.*/

var array = ["house", "car", "bike", "table", "desk"];
for (var i = 0; i < array.length; i++) {
    alert(array[i]);
}

/* b. Convert the first letter of every word of the last array to upper case
and show an alert for every modified word*/

for (var i = 0; i < array.length; i++) {
    var newArray = array[i].substring(0,1).toUpperCase() 
    + array[i].substring(1).toLowerCase();
    alert(newArray);
}

/* c. Create a variable called "sentence" that cointain an empty string
then iterate over the array of the first point with for loop to store 
every word inside the variable sentence. At the end, show an unique alert
with the complete string.*/

var sentence = "";
for (var i = 0; i < array.length; i++) {
    sentence = sentence + array[i] + " ";
}
alert(sentence.trim())

/* d. Create an empty array and iterate over using for loop 10 times.
Fill the array with the number of the iteration, it means that at the end
of the execution of the for loop should have 10 elements inside the array,
from 0 to 9. Show in the console of the navigator the final array
(using console.log)*/

