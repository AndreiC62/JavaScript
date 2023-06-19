class StudentNou {
  public studCode: number;
  private studName: string;

  constructor(code: number, name: string) {
    this.studCode = code;
    this.studName = name;
  }

  public display() {
    return `My unique code: ${this.studCode}, my name: ${this.studName}.`;
  }
}

let student1 = new StudentNou(134123, "Andrei");
console.log(student1.display());
