class Student {
    #id;
    #name;
    #status;

    constructor(id, name, status = 'Active') {
        this.#id = id;
        this.#name = name;
    } 

    getId() {
        return this.#id
    } 

    getName() {
        return this.#name
    }
    
    getStatus() {
        return this.#status
    } 

    setName(name) {
        this.#name = name
    } 

    setName(status) {
        this.#status = status
    } 

    student1 = new Student(1, 'Peeter')

} 

