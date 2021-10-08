/******************************
* 2. Strings
* ****************************/

/*  a. Create a string variable with at least 10 characters and convert all the text to
upper case letters (using toUpperCase).   */

var a = "There is a light and it never goes out.";
console.log(a.toUpperCase());

/*  b. Create a string variable with at least 10 characters and make a new string
with the first 5 characters storing the result in a new variable (using
substring).   */

var b = "There is a light and it never goes out.";
var c = b.substring(0,5);
console.log(c);

/*  c. Create a string variable with at least 10 characters and make a new string
with the last 3 characters storing the result in a new variable (using
substring).   */

var d = "There is a light and it never goes out.";
var e = d.substring(36);
console.log(e);

/*  d) Create a string variable with at least 10 characters and make a new string
upper case the first letter and let the others in lower case. Store the result in
a new variable (using substring, toUpperCase, toLowerCase and +).   */

var f = "There Is A Light And It Never Goes Out.";
var g = f.substring(0,1);
var h = f.substring(1);
var i = g.toUpperCase() + h.toLowerCase();
console.log(i);

/*  e) Create a string variable with at least 10 characters and a space.
Found the position of the first space and store the result in a new variable (using
indexOf).   */


/*  f) Create a string variable with at least 2 long words (10 characters and
some spaces between words). Using the methods of the previous exercises to make a
new string, upper case the first letter of all words and let the others in lower case.
(using indexOf, substring, toUpperCase, toLowerCase and +).   */