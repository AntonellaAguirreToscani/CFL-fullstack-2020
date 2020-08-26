"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
var Note = /** @class */ (function () {
    function Note(_description, _result) {
        this.description = _description;
        this._result = _result;
    }
    Object.defineProperty(Note.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    return Note;
}());
exports.Note = Note;
