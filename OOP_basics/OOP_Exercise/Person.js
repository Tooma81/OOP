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

const person1 = new Person('Mati')
console.log(person1)