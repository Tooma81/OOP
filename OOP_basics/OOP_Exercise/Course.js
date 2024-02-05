class Course {
    static grades = []

    constructor(name) {
        this.name = name;      
    }
    
    static addGrade(student, grade) {
        const courseGrade = [student, grade] 
        Course.grades.push(courseGrade)
    } 

    getGrades() {
        return Course.grades
    } 

    static getAverageGrade() {
        let gradesSum = 0
        if (Course.grades.length === 0) {
            return -1
        } else {
            for (let grade of Course.grades) {
                gradesSum += (grade[1])
            } 
            return gradesSum / Course.grades.length
        } 
    }

    description() {
        return this.name
    } 
} 

module.exports = Course;