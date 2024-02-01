class Person {
    constructor(name) {
        this.name = name
    } 

    getName() {
        return this.name
    } 

    setDateOfBirth(year) {
        this.year = year
    } 

    getDateOfBirth() {
        return this.year
    } 

    age() {
        return new Date().getFullYear() - this.year
    } 
} 

module.exports = Person;