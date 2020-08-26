"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.School = void 0;
var dbContext_1 = require("./dbContext");
var School = /** @class */ (function () {
    function School(_schoolName) {
        this.schoolName = _schoolName;
        this.dbContext = new dbContext_1.DbContext();
        this.studentsList = this.dbContext.loadStudents();
    }
    School.prototype.searchStudent = function (id) {
        var studentFound = this.studentsList.reduce(function (obj, student) {
            if (student.id == id)
                obj = student;
            return obj;
        }, {});
        return studentFound;
    };
    School.prototype.getAverageStudent = function (id) {
        var student = this.searchStudent(id);
        var notes = student.notes;
        var average = (notes[0].result + notes[1].result + notes[2].result) / 3;
        return "Average Student: " + student.fullName + "...: " + average;
    };
    School.prototype.getAllAverages = function () {
        var listAverages = [];
        this.studentsList.forEach(function (student) {
            var notes = student.notes;
            var average = (notes[0].result + notes[1].result + notes[2].result) / 3;
            listAverages.push("Average Student: " + student.fullName + "...: " + average);
        });
        return listAverages;
    };
    School.prototype.addStudent = function (student) {
        try {
            if (student.name === "")
                throw new Error('Student must contain a Name');
            this.studentsList.push(student);
            this.dbContext.addStudentTxt(student);
        }
        catch (error) {
            console.log(error);
        }
    };
    return School;
}());
exports.School = School;
