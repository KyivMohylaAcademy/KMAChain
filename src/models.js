/**
 * For a record book, not much metadata is needed.
 * For example, AcademicProgram only needs its name and number, and a faculty could just have full name,
 * and a shotName for convenience.
 */

const assert = require("assert");

class AcademicProgram {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }
}

class Faculty {
    constructor(name, shortName) {
        this.name = name;
        this.shortName = shortName;
    }
}

const numberToLetterMark = (mark) => {
    if(mark >= 91 && mark <= 100) {
        return 'A';
    }
    else if (mark >= 81 && mark <= 90) {
        return 'B';
    }
    else if (mark >= 71 && mark <= 80) {
        return 'C';
    }
    else if (mark >= 66 && mark <= 70) {
        return 'D';
    }
    else if (mark >= 60 && mark <= 65) {
        return 'E';
    }
    else if (mark < 60) {
        return 'F';
    }
    else throw new Error('Mark ' + mark + ' is not a valid mark and cannot be converted to alphabetic representation')
}

class Mark {
    constructor(mark) {
        if(typeof(mark) == 'number') {
            this.numericMark = mark;
            this.alphabeticMark = numberToLetterMark(mark);
        }
        else if (typeof(mark) == 'string') {
            this.alphabeticMark = mark;
        }
        else throw new Error('Mark ' + mark + ' is not a number, nor a string');
    }
    getNumericMark() {
        if(typeof(this.numericMark) != 'undefined') {
            return this.numericMark;
        }
        else throw new Error('Numeric mark is not defined on this object, maybe you provided the mark in alphabetic form?');
    }
    getAlphabeticMark() {
        return this.alphabeticMark;
    }
}

class Assignment {
    //          string, string,    number,   number,  Date
    constructor(name, description, maxMark, deadline) {
        this.name = name;
        this.description = description;
        this.maxMark = maxMark;
        this.setMark = undefined;
        this.deadline = deadline;
    }
    //              mark | number
    assessAndSetMark(mark) {
        if(mark.hasOwnProperty(numericMark)) this.setMark = mark.getNumericMark();
        else this.setMark = mark;
    }
}

class Student {
    constructor(name, surname, patronymic, email, phoneNum, faculty, academicProgram) {
        assert(faculty instanceof Faculty, 'Provided wrong faculty type');
        assert(academicProgram instanceof AcademicProgram, 'Provided wrong academic program argument');
        this.name = name;
        this.surname = surname;
        this.patronymic = patronymic;
        this.email = email;
        this.phoneNum = phoneNum;
        this.faculty = faculty;
    }
}

class Teacher {
    constructor(name, surname, patronymic) { // not much info needed for record book
        this.name = name;
        this.surname = surname;
        this.patronymic = patronymic;
    }
}

class Subject {
    constructor(name, semester, ectsCredits, assignments) { // not much info needed for record book
        this.name = name;
        this.semester = semester;
        this.ectsCredits = ectsCredits;
        this.assignments = assignments;
    }
}

class Semester {
    constructor(numberStr, subjects) {
        this.ectsCredits = 0;
        for (const subject of subjects) {
            this.ectsCredits += subject.ectsCredits;
        }
        this.subjects = subjects;
    }
}


module.exports = {
    Faculty: Faculty,
    AcademicProgram: AcademicProgram,
    Mark: Mark,
    Assignment: Assignment,
    Student: Student,
    Teacher: Teacher,
    Subject: Subject,
    Semester: Semester
};