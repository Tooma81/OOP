const Student = require('./Student')
const Course = require('./Course')

class School {
    constructor(name, students, courses) {
        this.name = name;
        this.students = [];
        this.courses = []  
    } 

    addCourse(course) {
        if (!this.courses.includes(course)) {
            this.courses.push(course)
        } 
    } 

    addStudent(student) {
        if (!this.students.includes(student)) {
            this.students.push(student)
            Student.setId(student)
        } 
    } 

    addStudentGrade(student, course, grade) {
        Student.addGrade(course, grade)
        Course.addGrade(student, grade)
    } 

    getStudents() {
        return this.students
    }
    
    getCourses() {
        return this.courses
    } 

    getStudentsOrderedByAverageGrade() {
        const averageGrade = [] 
        const averageGrades = [] 
        for (let student of this.students) {
            averageGrade.push(student)
            averageGrade.push(Student.getAverageGrade(student))
            averageGrades.push(averageGrade)
            averageGrade.length = 0
        } 
        return averageGrades.slice().sort((a, b) => b[1] - a[1])
    } 

} 

module.exports = School;