var students = [
  {name: 'Dominique', age: 14, attendedCourses: ['PHP', 'javascript']},
  {name: 'Antonio', age: 25, attendedCourses: ['PHP']},
  {name: 'Othman', status: 'CDI', attendedCourses: []},
  {name: 'Tristan', age: 23, attendedCourses: ['Symfony', 'javascript']},
  {name: 'Nakkib', age: 30, attendedCourses: ['PHP', 'javascript', 'Angular', 'Nodejs']}
];


students.forEach(function(student) {
//console.log(student.name);
})

var studentsFiltered = [];

studentsFiltered = students.filter(function(student) {
//return student.age > 17;
var condition1 = student.name.indexOf('o') != -1;
var condition2 = student.name.indexOf('O') != -1;
return condition1 || condition2
})

studentsFiltered.forEach(function(student) {
console.log(student.name);
})


var name = "Antonio";
//console.log(name.indexOf('tonio'));
//console.log(name.substr(0));

/* Fonctions flêchées ES6 */
var add = function (v1, v2) {
  console.log('Addition');
  return v1 + v2;
}

var mult = (v1, v2) => v1 * v2;
var square = x => x*x;

/*
var mult = (v1, v2) => {
   console.log('Multiplication');
   return v1 * v2;
}
*/

console.log(add(7,13));
console.log(mult(7,13));
console.log(square(7))


// DEMO Filtrage
var students = [
    {name: 'Dominique', age: 14, attendedCourses: ['PHP', 'javascript']},
    {name: 'Antonio', age: 25, attendedCourses: ['PHP']},
    {name: 'Othman', status: 'CDI', attendedCourses: []},
    {name: 'Tristan', age: 23, attendedCourses: ['Symfony', 'javascript']},
    {name: 'Nakkib', age: 30, attendedCourses: ['PHP', 'javascript', 'Angular', 'Nodejs']}
  ];

var studentsFiltered = [];

// variante 1 : for + if + push
for (var i=0; i<students.length; i++) {
  var age = students[i].age;
  if (age >= 28 && age <= 30) {
    studentsFiltered.push(students[i]);
  }
}
//console.log(studentsFiltered);

// variante 2 : méthode .filter
var trentenaire = person => person.age >= 30 && person.age <= 39;
var majeur = person => person.age >= 18;
var mineur = person => person.age < 18;

var bebe = function(person) {
  return person.age < 3;
}

var studentsFiltered = students.filter(bebe);
console.log(studentsFiltered);
