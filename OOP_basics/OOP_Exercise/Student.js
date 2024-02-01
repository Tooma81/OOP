class Student extends Person {
    constructor(name, grades, id) {
        super(name);
        this.grades = [];
        this.id = null
    } 

    setId(id) {
        if (this.id = null) {
            this.id = id
        }  
    } 

    getId() {
        return this.id
    } 

    addGrade(course, grade) {
        courseGrade = [] 
        courseGrade.push(course)
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
    
    description(description) {
        return this.name + description
    } 
} 