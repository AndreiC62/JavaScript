var StudentNou = /** @class */ (function () {
    function StudentNou(code, name) {
        this.studCode = code;
        this.studName = name;
    }
    StudentNou.prototype.display = function () {
        return "My unique code: ".concat(this.studCode, ", my name: ").concat(this.studName, ".");
    };
    return StudentNou;
}());
var student1 = new StudentNou(134123, "Andrei");
console.log(student1.display());
