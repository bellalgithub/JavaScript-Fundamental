
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



