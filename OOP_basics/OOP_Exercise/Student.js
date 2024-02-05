const Person = require('./Person')

class Student extends Person {
    static grades = [];
    static id = null
    
    constructor(name) {
        super(name);
        
    } 

    static setId(id) {
        if (Student.id == null) {
            Student.id = id
        }  
    } 

    getId() {
        return this.id
    } 

    static addGrade(course, grade) {
        const courseGrade = [course, grade] 
        Student.grades.push(courseGrade)
    } 

    getGrades() {
        return Student.grades
    } 

    static getAverageGrade() {
        let gradesSum = 0
        if (Student.grades.lenght === 0) {
            return -1
        } else {
            for (let grade of Student.grades) {
                gradesSum += grade[1]
            } 
            return gradesSum / Student.grades.length
        } 
    }
    
    description(description) {
        return this.name + description
    } 
} 

module.exports = Student;