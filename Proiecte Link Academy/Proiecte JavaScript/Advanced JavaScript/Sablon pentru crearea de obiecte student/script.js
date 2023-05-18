import { Student } from "./modules/student.js";

let student1 = new Student(
  "Andrei C.",
  "Cluj Napoca",
  754456278,
  "Frontend JS Development - Link Academy"
);
let student2 = new Student(
  "Vasile T.",
  "Bucuresti",
  794512444,
  "Backend Development - Link Academy"
);
let student3 = new Student(
  "Mihai T.",
  "Iasi",
  741235798,
  "Design - Link Academy"
);

console.log(student1.getInfo());
console.log(student2.getInfo());
console.log(student3.getInfo());
