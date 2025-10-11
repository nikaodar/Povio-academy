// Base class
class Shape {
  constructor(color) {
    this.color = color;
  }

  printColor() {
    console.log("color: " + this.color);
  }
}

class Circle extends Shape {
  constructor(radius, color) {
    super(color);
    this.radius = radius;
  }

  area() {
    const area = Math.PI * this.radius ** 2;
    console.log(`circle area: ${area.toFixed(2)}`);
  }
}

class Square extends Shape {
  constructor(side, color) {
    super(color);
    this.side = side;
  }

  area() {
    const area = this.side ** 2;
    console.log(`square area: ${area}`);
  }
}

class Triangle extends Shape {
  constructor(base, height, color) {
    super(color);
    this.base = base;
    this.height = height;
  }

  area() {
    const area = 0.5 * this.base * this.height;
    console.log(`triangle area: ${area}`);
  }
}

const square = new Square(5, "green");
square.area();
square.printColor();

const circle = new Circle(3, "yellow");
circle.area();
circle.printColor();

const triangle = new Triangle(2, 3, "red");
triangle.area();
triangle.printColor();
