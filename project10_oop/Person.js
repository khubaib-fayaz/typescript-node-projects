"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor() {
        this.personality = "MyStery";
    }
    AskQuestion(answer) {
        if (answer == 1) {
            this.personality = "Extravert";
        }
        else if (answer == 2) {
            this.personality = "Introvert";
        }
        else {
            this.personality = "You are Still a Mystery";
        }
    }
    GetPersonlity() {
        return this.personality;
    }
}
exports.Person = Person;
