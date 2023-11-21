class Student {
	constructor(name, finished) {
		this.name = name
		this.finished = false
	}
}

const student1 = new Student("Kalle")
console.log(student1)
console.log(student1.name)

const student2 = new Student("Mari", true)
console.log(student2)