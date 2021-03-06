/******************************
* 3. Arrays
* ****************************/

/*  a. Using this array: ['January', 'February', 'March', 'April', 'May', 'June',
'July', 'August', 'September', 'October', 'November', 'December'] show it in the
console the 5 and 11 month (using console.log).    */

var array = ['January', 'February', 'March', 'April', 'May', 'June',
'July', 'August', 'September', 'October', 'November', 'December'];
console.log(array[4], array[10]);

/*  b. Order the array before alphabetically and show it in the console (using
sort).    */

console.log(array.sort());

/*  c. Add an element at the start and the end of the array (using unshift
and push).    */

array.unshift('Start');
array.push('End');
console.log(array);

/*  d. Delete and element of the start and the end of the array (using shift
and pop).    */

array.shift();
array.pop();
console.log(array);

/*  e. Reverse the order of the array (using reverse).    */

console.log(array.reverse());

/*  f. Put together all the elements of the array in one single string where
every month be separated by a dash - (using join).    */

console.log(array.join('-'));

/*  g. Create a copy of the array with the months from May to November
(using slice).    */

array = ['January', 'February', 'March', 'April', 'May', 'June',
'July', 'August', 'September', 'October', 'November', 'December'];
var may = array.indexOf('May',0);
var november = array.indexOf('November',0) + 1;
var newArray = array.slice(may,november);
console.log(newArray);