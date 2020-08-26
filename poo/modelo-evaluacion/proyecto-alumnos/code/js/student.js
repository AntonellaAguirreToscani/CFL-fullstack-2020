"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var person_1 = require("./person");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(_id, _name, _lastName, _classRoom, _notes) {
        var _this = _super.call(this, _id, _name, _lastName) || this;
        _this.classRoom = _classRoom;
        _this._notes = _notes;
        return _this;
    }
    Object.defineProperty(Student.prototype, "fullName", {
        get: function () {
            return this.name + " " + this.lastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "notes", {
        get: function () {
            return this._notes;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}(person_1.Person));
exports.Student = Student;
