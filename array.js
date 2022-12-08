
const employee = ['Bellal', 'Iqbal', 'Nazmul', 'Faruk', 'Noyon', 'Sakib', 'Nazmul'];

// console.log(employee);

/* Output: 
[
    'Bellal', 'Iqbal',
    'Nazmul', 'Faruk',
    'Noyon',  'Sakib',
    'Nazmul'
  ] */

let name = employee[4];

/* console.log(name);
Output: 
Noyon */

employee[4] = 'Asif';

/* console.log(employee);

Output: 

[
    'Bellal', 'Iqbal',
    'Nazmul', 'Faruk',
    'Asif',   'Sakib',
    'Nazmul'
  ]
 */

let name1 = employee.indexOf('Bellal');

/* console.log(name1);
Output:
0 */

let name2 = employee.indexOf('Bellal Hossain');

/* console.log(name2);

Output:
-1 */


// Array Element add from the end

const devs = ['Bellal', 'Noyon', 'Nazmul', 'Sakib'];

devs.push('Iqbal');
devs.push('Faruk');

// console.log(devs);

/* Output: 

[ 'Bellal', 'Noyon', 'Nazmul', 'Sakib', 'Iqbal', 'Faruk' ]
 */


// Array Element remove from the end

devs.pop();

/* console.log(devs);

Output: 
[ 'Bellal', 'Noyon', 'Nazmul', 'Sakib', 'Iqbal' ]

 */

// Array Element add from the start


devs.unshift('Asma');

/* console.log(devs);

Output:
[ 'Asma', 'Bellal', 'Noyon', 'Nazmul', 'Sakib', 'Iqbal' ] */


// Array Element remove from the start

devs.shift();

/* console.log(devs);

Output:

[ 'Bellal', 'Noyon', 'Nazmul', 'Sakib', 'Iqbal' ]


 */

// More than onbe elements add from the end

// console.log(devs);
devs.push('Hasan', 'Hossain');
/* console.log(devs);
Output:
[
    'Bellal',  'Noyon',
    'Nazmul',  'Sakib',
    'Iqbal',   'Hasan',
    'Hossain'
  ] */


// More than onbe elements add from the start

devs.unshift('Rahim', 'Karim')
/* console.log(devs);

Output:

[
    'Rahim',   'Karim',
    'Bellal',  'Noyon',
    'Nazmul',  'Sakib',
    'Iqbal',   'Hasan',
    'Hossain'
  ] */



const student = ['Rahim', 'Karim', 'Solim', 'Tolim', 'Molim', 'Folim', 'Salam', 'Kalam'];

const part = student.slice(3); // If we not set the end point then it takes from start point to end. Original array can not change. Only creating new array with Slice
// console.log(part);
// console.log(student);
// Output:

// [ 'Tolim', 'Molim', 'Folim', 'Salam', 'Kalam' ]

/* const part1 = student.slice(3, 1);
const part2 = student.slice(3, 7);

console.log(part1);
console.log(part2);

Output: 

[]
[ 'Tolim', 'Molim', 'Folim', 'Salam' ] */




