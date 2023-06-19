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

console.log(
  `\n\n ------------------ Assignment "Citirea datelor despre studenti" ----------------- \n\n`
);

fetch(
  "https://v-dresevic.github.io/Advanced-JavaScript-Programming/data/students.txt"
)
  .then((response) => response.text())
  .then((data) => {
    let splitted = data.split("\n");

    let students = [];

    for (let i = 0; i < splitted.length; i += 4) {
      const p1 = splitted[i];
      const p2 = splitted[i + 1];
      const p3 = splitted[i + 2];
      const p4 = splitted[i + 3];

      let student = new Student(p1, p2, p3, p4);
      students.push(student);
    }

    const dataContainer = document.getElementById("students");

    students.forEach((student) => {
      console.log(`${student.getInfo()}`);

      const studentInfo = document.createElement("pre");
      studentInfo.innerHTML = `${student.getInfo()}`;
      dataContainer.appendChild(studentInfo);

      studentInfo.style.fontFamily = "Times New Roman";
    });
  })
  .catch((error) => {
    console.log(error);
  });
