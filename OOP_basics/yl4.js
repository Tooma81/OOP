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

class Paint {
    constructor() {
        this.shapes = []  
    } 

    addShape(shape) {
        this.shapes.push(shape)
    } 

    getShapes() {
        return this.shapes
    } 

    getArea() {
        return this.area
    } 

    calculateTotalArea() {
        let sum = 0
        for (let shape of this.shapes) {
            sum += shape.getArea()
        } 
        return sum
    } 

    getCircles() {
        let circles = []
        for (let shape of this.shapes) {
            if (shape instanceof Circle) {
                circles.push(shape)
            } 
        } 
        return circles 
    } 

    getSquares() {
        let squares = []
        for (let shape of this.shapes) {
            if (shape instanceof Square) {
                squares.push(shape)
            } 
        } 
        return squares
    } 

    getRectangles() {
        let rectangles = []
        for (let shape of this.shapes) {
            if (shape instanceof Rectangle) {
                rectangles.push(shape)
            } 
        } 
        return rectangles 
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
//console.log(rectangle1)
//console.log(rectangle1.getArea())
//console.log(rectangle1.print())

const appender = new Paint();
appender.addShape(circle1);
appender.addShape(square1);
appender.addShape(rectangle1);
//console.log(appender.getShapes())
//appender.calculateTotalArea()
//console.log(appender.calculateTotalArea())
//console.log(appender.getCircles())
//console.log(appender.getSquares())
console.log(appender.getRectangles())