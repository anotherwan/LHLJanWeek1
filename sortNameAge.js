var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

function compareStudents(students) {
  return students.sort(function(studentA, studentB){
    let nameA = studentA.name
    let nameB = studentB.name
    if (nameA < nameB){
      return -1
    } else if (nameA > nameB){
      return 1
    } else {
      return studentA.age < studentB.age
    }
  })
}
console.log(compareStudents(students))
