"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbContext = void 0;
var fileManager_1 = require("./fileManager");
var note_1 = require("./note");
var student_1 = require("./student");
var DbContext = /** @class */ (function () {
    function DbContext() {
        this.fileManager = new fileManager_1.FileManager('students.txt');
    }
    DbContext.prototype.studentToString = function (obj) {
        var texto = [];
        for (var _i = 0, _a = Object.entries(obj); _i < _a.length; _i++) { //RECORRO EL OBJETO
            var _b = _a[_i], key = _b[0], value = _b[1];
            switch (key) {
                case '_id':
                    texto.push(value);
                    break;
                case 'name':
                    texto.push(value);
                    break;
                case 'lastName':
                    texto.push(value);
                    break;
                case 'classRoom':
                    texto.push(value);
                    break;
            }
        }
        return texto.join(',');
    };
    DbContext.prototype.noteToString = function (obj) {
        var texto = [];
        for (var _i = 0, _a = Object.entries(obj); _i < _a.length; _i++) { //RECORRO EL OBJETO
            var _b = _a[_i], key = _b[0], value = _b[1];
            texto.push(value);
        }
        return texto.join(',');
    };
    DbContext.prototype.loadStudents = function () {
        var listStudents = [];
        this.fileManager.list.forEach(function (student) {
            var text = student.split(',');
            var firstModule = new note_1.Note(text[4], parseInt(text[5]));
            var secondModule = new note_1.Note(text[4], parseInt(text[5]));
            var thirdModule = new note_1.Note(text[6], parseInt(text[7]));
            listStudents.push(new student_1.Student(parseInt(text[0]), text[1], text[2], text[3], [firstModule, secondModule, thirdModule]));
        });
        return listStudents;
    };
    DbContext.prototype.addStudentTxt = function (obj) {
        var notesArray = [
            this.noteToString(obj.notes[0]),
            this.noteToString(obj.notes[1]),
            this.noteToString(obj.notes[2])
        ];
        var notes = notesArray.join(',');
        this.fileManager.writeLine((this.studentToString(obj) + (',') + notes), this.fileManager.fileName);
    };
    DbContext.prototype.deleteStudentTxt = function (id) {
        this.fileManager.deleteLine(id);
    };
    return DbContext;
}());
exports.DbContext = DbContext;
