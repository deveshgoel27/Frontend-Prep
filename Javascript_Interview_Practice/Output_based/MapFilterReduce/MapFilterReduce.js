// Q1 - return only name of students in capital letters

const students = [
  { name: 'John', age: 20 },
  { name: 'Jane', age: 21 },
  { name: 'Bob', age: 22 },
  { name: 'Alice', age: 23 },
];

const names = students.map(stu => stu.name.toUpperCase());

console.log(names);

// Q2 - return only students with age greater than 21
const studentsAbove21 = students.filter(stu => stu.age > 21);

console.log(studentsAbove21);

// Q3 - return the average age of students

const avergeAge = students.reduce((acc,curr) => acc + curr.age, 0) / students.length;
console.log(avergeAge);



// q4 - return only names of students with age greater than 21?

const nameabove21 = students
      .filter(stu => stu.age > 21)
      .map(stu => stu.name);
console.log(nameabove21);


//Q5 - return total age of students with age greater than 21 after 20 years have been added to those who score less than 22? 

const totalAgeAfter20Years = students
     .map((stu) => {
        if(stu.age < 22){
            stu.age += 20;
        }
        return stu;
     })
     .filter(stu => stu.age > 21)
        .reduce((acc, curr) => acc + curr.age, 0);


     console.log(totalAgeAfter20Years);