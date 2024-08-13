//----------
// Array of objects
//----------

//Mutation
// const arr = [1,2,3,4,5];

//add new data inot original data

// arr.push(6);

// console.log(arr);

//_____
// Array methods
//_____

// 1. ForEach();

// const students = [
//   { name: "john", age: 20 },
//   { name: "john", age: 20 },
//   { name: "john", age: 20 },
//   { name: "john", age: 20 },
// ];

// students.forEach((item, idx, arr)=>{
// console.log("item",item);
// console.log("idx",idx);
// console.log("arr",arr);
// });

// students.forEach(user =>{
//     console.log("name", user.name);
//     console.log("age", user.age);
// });

//1. map();

// const newStudents = students.map((user) => {
// //   return user;
//     return user.name;
// });

// newStudents.push({name: "thi", age: 31});

// newStudents.push("thi");
// console.log(newStudents);
// console.log(students);

//1. filter();
// const students = [
//     { name: "john", age: 20, debt: true },
//     { name: "harry", age: 30, debt: false },
//     { name: "sally", age: 24, debt: true },
//     { name: "cary", age: 26, debt: false },
//   ];

//   const debtStudents = students.filter(student =>  student.debt === true 
//   );

//   const ageStudents = students.filter(student =>  {
//     return student.age < 25 ;
//   });

//   console.log(debtStudents);
//   console.log(ageStudents);

//1. reduce();
const products = [
    {name: "banana", price: 1},
    {name: "orange", price: 2},
    {name: "apple", price: 3},
    {name: "pear", price: 4},
];
  
const sum = products.reduce(function(total, product){
    return total + product.price 
}, 0)

console.log(sum);

