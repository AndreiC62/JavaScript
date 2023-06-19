class Student {
  constructor(name, address, phone, course) {
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.course = course;
  }

  getInfo() {
    return (
      "Name: " +
      this.name +
      "\n" +
      "Address: " +
      this.address +
      "\n" +
      "Phone: " +
      this.phone +
      "\n" +
      "Course: " +
      this.course +
      "\n"
    );
  }
}

export { Student };
