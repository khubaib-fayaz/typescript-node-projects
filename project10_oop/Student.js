"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const Person_js_1 = require("./Person.js");
class Student extends Person_js_1.Person {
    constructor() {
        super();
        this._name = "Khubaib fayyaz";
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
exports.Student = Student;
