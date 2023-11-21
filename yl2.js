class Person {
	constructor(firstname, lastname, age) {
		this.firstname = ""
		this.lastname = ""
		this.age = 0
	}
}

class Student {
	constructor(firstname, lastname, age) {
		this.firstname = firstname
		this.lastname = lastname
		this.age = age
	}
}

const person1 = new Person("Jüri", "Tamm", 34)
console.log(person1)

const student1 = new Student("Jüri", "Tamm", 34)
console.log(student1)