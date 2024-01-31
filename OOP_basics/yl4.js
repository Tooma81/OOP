class Shape {
    constructor(color) {
        this.color = color
    } 

    setColor(color) {
        this.color = color
    } 
    
    getColor() {
        return this.color
    } 

    getArea() {
        return this.area
    } 
} 

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    } 

    getArea() {
        return Math.PI * Math.pow(this.radius, 2)
    }
    
    print() {
        return 'Circle (r: ' + this.radius + ', color: ' + this.color + ')' 
    }   
} 

class Square extends Shape {
    constructor(color, side) {
        super(color);
        this.side = side;
    } 

    getArea() {
        return Math.pow(this.side, 2)
    }
    
    print() {
        return 'Square (a: ' + this.side + ', color: ' + this.color + ')' 
    }   
} 

class Rectangle extends Shape {
    constructor(color, lenght, width) {
        super(color);
        this.lenght = lenght;
        this.width = width
    } 

    getArea() {
        return this.lenght * this.width
    }
    
    print() {
        return 'Rectangle (w: ' + this.width + ', l: ' + this.lenght + ', color: ' + this.color + ')' 
    }   
} 

const shape1 = new Shape('Red')
shape1.setColor('Green')
//console.log(shape1)

const circle1 = new Circle('Blue', 6)
//console.log(circle1)
//console.log(circle1.getArea())
//console.log(circle1.print())


const square1 = new Square('Pink', 8)
//console.log(square1)
//console.log(square1.getArea())
//console.log(square1.print())

const rectangle1 = new Rectangle('Purple', 10, 4)
console.log(rectangle1)
console.log(rectangle1.getArea())
console.log(rectangle1.print())