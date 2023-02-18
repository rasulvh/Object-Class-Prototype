"use strict";

// let stu = {
//     id: 1,
//     name: "Rasul",
//     surname: "Hasanov",
//     age: 15
// }
// stu.address = "Xalqlar"
// console.log(stu.address);

// let stu1 = {
//   id: 1,
//   name: "Rasul",
//   surname: "Hasanov",
//   age: 15,
// };

// let stu2 = {
//   id: 2,
//   name: "Gultac",
//   surname: "Ceferova",
//   age: 18,
// };

// let stu3 = {
//   id: 3,
//   name: "Musa",
//   surname: "Afandiyev",
//   age: 19,
// };

// let stu4 = {
//   id: 4,
//   name: "Nicat",
//   surname: "Novruzzade",
//   age: 21,
// };

// let updatedStudent = {
//   id: 2,
//   name: "Lale",
//   age: 25,
// };

// let students = [stu1, stu2, stu3, stu4];
// for (const item of students) {
//     console.log(item.name);
// }

// let group = {
//   name: "P414",
//   capacity: 4,
//   students: [],
//   addStudent: function (student) {
//     if (this.students.length == this.capacity) {
//       console.log("Group is full");
//       return;
//     }

//     let stu = this.students.find((m) => m.id == student.id);

//     if (stu != undefined) {
//       console.log("This student already exists");
//       return;
//     }

//     this.students.push(student);
//   },
//   getAllStudents: function () {
//     console.log(this.students);
//   },
//   updateStudent: function (student) {
//     let existStudent = this.students.find((m) => m.id == student.id);

//     if (student.name != undefined) {
//       existStudent.name = student.name;
//     }
//     if (student.surname != undefined) {
//       existStudent.surname = student.surname;
//     }
//     if (student.age != undefined) {
//       existStudent.age = student.age;
//     }
//   },
//   deleteStudent: function (id) {
//     const deletedStudent = this.students.findIndex((m) => m.id === id);
//     this.students.splice(deletedStudent, 1);
//   },
// };

// group.addStudent(stu1);
// group.addStudent(stu2);
// group.addStudent(stu3);
// group.addStudent(stu4);

// group.getAllStudents();

// group.updateStudent(updatedStudent)

// group.getAllStudents()

// group.deleteStudent(3);

// group.getAllStudents();

// class Car {
//   constructor(color, speed, test) {
//     this.color = color;
//     this.speed = speed;
//     this.test = test;
//   }

//   speedTest(data) {
//     console.log(600 + data);
//   }
// }

// let car1 = new Car("BMW", 300);
// console.log(car1.name + "/" + car1.speed + "/" + car1.color);

// let car2 = new Car("Toyota")
// car2.speedTest(300)

// class BMW extends Car {
//   constructor(mark, color,speed,test) {
//     super(color,speed,test);
//     this.mark = mark;
//   }
// }

// let bmw = new BMW("I8", "Black", 500, "tested");

// console.log(bmw.color+"/"+bmw.speed+"/"+bmw.test);

// bmw.speedTest(400)

// class Test{
//     static eat(){
//         console.log("Eats");
//     }
// }

// Test.eat()

// let numbers = [1,2,3,4,5,6,7,8,9,10]

// Array.prototype.musa = "Yatma"
// console.log(numbers.musa);

// Array.prototype.sumOfNumbers = function(){
//     let sum = 0

//     for (let i = 0; i < this.length; i++) {
//         sum+=this[i]
//     }

//     return sum
// }

// console.log(numbers.sumOfNumbers());