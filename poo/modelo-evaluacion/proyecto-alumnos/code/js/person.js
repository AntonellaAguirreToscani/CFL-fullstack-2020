"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(_id, _name, _lastName) {
        this._id = _id;
        this.name = _name;
        this.lastName = _lastName;
    }
    Object.defineProperty(Person.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
exports.Person = Person;
