class Course {
    constructor(nimi) {
        this.nimi = nimi;
        this.grades = []  
    }
    
    addGrade(student, grade) {
        courseGrade = [] 
        courseGrade.push(student)
        courseGrade.push(grade)
        this.grades.push(courseGrade)
    } 

    getGrades() {
        return this.grades
    } 

    getAverageGrade() {
        let gradesSum = 0
        if (this.grades = []) {
            return -1
        } else {
            for (let grade of this.grades) {
                gradesSum += (grade[1])
            } 
            return gradesSum / this.grades.lenght()
        } 
    }

    description() {
        return this.name
    } 
} 