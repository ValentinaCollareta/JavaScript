/******************************
* 2. Strings
* ****************************/

/*  a. Create a string variable with at least 10 characters and convert all the 
text to upper case letters (using toUpperCase).   */

var str_1 = 'There is a light and it never goes out.';
console.log(str_1.toUpperCase());

/*  b. Create a string variable with at least 10 characters and make a new string
with the first 5 characters storing the result in a new variable (using
substring).   */

var str_5_char = str_1.substring(0,5);
console.log(str_5_char);

/*  c. Create a string variable with at least 10 characters and make a new string
with the last 3 characters storing the result in a new variable (using
substring).   */

var str_3_char = str_1.substring(36);
console.log(str_3_char);

/*  d) Create a string variable with at least 10 characters and make a new string
upper case the first letter and let the others in lower case. Store the result in
a new variable (using substring, toUpperCase, toLowerCase and +).   */

var str_2 = 'There Is A Light And It Never Goes Out.';
var firstLetterUp = str_2.substring(0,1);
var otherLetters = str_2.substring(1);
var str_3 = firstLetterUp.toUpperCase() + otherLetters.toLowerCase();
console.log(str_3);

/*  e) Create a string variable with at least 10 characters and a space.
Found the position of the first space and store the result in a new variable
(using indexOf).   */

var str_4 = 'Never Goes Out.';
var space = str_4.indexOf(' ',0);
console.log(space);

/*  f) Create a string variable with at least 2 long words (10 characters and
some spaces between words). Using the methods of the previous exercises to make a
new string, upper case the first letter of all words and let the others in lower
case. (using indexOf, substring, toUpperCase, toLowerCase and +).   */

var longWords = 'darkened underpass';
var nSpace = longWords.indexOf(' ', 0);
var firstWord = longWords.substring(0,1).toUpperCase() + longWords.substring(1,nSpace+1).toLowerCase();
var secondWord = longWords.substring(nSpace+1, nSpace+2).toUpperCase() + longWords.substring(nSpace+2).toLowerCase();
var newStrWords = firstWord + secondWord;
console.log(newStrWords);