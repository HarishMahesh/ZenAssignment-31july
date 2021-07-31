const students = [
    { name: "Adhi", gender: "male" },
    { name: "Ahamed", gender: "male" },
    { name: "Rutika Kadam", gender: "female" },
    { name: "Priyadharsini", gender: "female" },
  ];
  
  // Task 1: find all female name
  //["Rutika kadam", "Priyadharsini"];

const femaleStud = students.filter((val) => val.gender == 'female').map((obj) => obj.name);
console.log(femaleStud);
  
  //Task 2: Starting with 'A'
  //["Adhi", "Ahamed"];
const filtedStud = students.filter((val) => val.name[0] == 'A').map((obj) => obj.name);;
console.log(filtedStud);
  // Task 3: Count the no. of males
  // 2


let noOfMales = students.filter((val) => val.gender == 'male').length;
console.log('No of Male students :',noOfMales);
  