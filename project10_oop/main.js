"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Person_js_1 = require("./Person.js");
const Student_js_1 = require("./Student.js");
class Program {
    static Main() {
        console.log("Type 1 if you like to talk to others and type 2 if you would rather keep to yourself");
        const personObj = new Person_js_1.Person();
        personObj.AskQuestion(2);
        console.log('Person Obj ====>', personObj);
        console.log('Get Personlity Method:', personObj.GetPersonlity());
        const studentObj = new Student_js_1.Student();
        studentObj.name;
        console.log(`Your Name is :${studentObj.name}! and your Personailty type is : ${studentObj.GetPersonlity()}`);
    }
}
Program.Main();
