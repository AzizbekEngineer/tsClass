var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//*************Inheritance************** */
//M-1
var Car = /** @class */ (function () {
    function Car(name, engine) {
        this.name = name;
        this.engine = engine;
    }
    return Car;
}());
var SuperCar = /** @class */ (function (_super) {
    __extends(SuperCar, _super);
    function SuperCar(name, engine, brand, year) {
        var _this = _super.call(this, name, engine) || this;
        _this.brand = brand;
        _this.year = year;
        return _this;
    }
    return SuperCar;
}(Car));
var myCar = new SuperCar('Cobalt', 1.5, 'Chevrolet', 2021);
// console.log(myCar);
//M-2
var Snake = /** @class */ (function () {
    function Snake(name) {
        this.name = name;
    }
    return Snake;
}());
var PoisonousSnake = /** @class */ (function (_super) {
    __extends(PoisonousSnake, _super);
    function PoisonousSnake(name, length, weigh, isPoisonous) {
        var _this = _super.call(this, name) || this;
        _this.length = length;
        _this.weigh = weigh;
        _this.isPoisonous = isPoisonous;
        return _this;
    }
    return PoisonousSnake;
}(Snake));
var snake = new PoisonousSnake('cobra', 2, 25, true);
// console.log(snake);
//M-3
var Teacher = /** @class */ (function () {
    function Teacher(fname, lname, salary) {
        this.fname = fname;
        this.lname = lname;
        this.salary = salary;
    }
    return Teacher;
}());
var SuperTeacher = /** @class */ (function (_super) {
    __extends(SuperTeacher, _super);
    function SuperTeacher(fname, lname, salary, direction, age, address) {
        var _this = _super.call(this, fname, lname, salary) || this;
        _this.direction = direction;
        _this.age = age;
        _this.address = address;
        return _this;
    }
    return SuperTeacher;
}(Teacher));
var teacher = new SuperTeacher('John', "Do", 3200, 'Teacher information', 22, 'USA');
// console.log(teacher);
//**********Encapsulation*************/
//M-1
var Driver = /** @class */ (function () {
    function Driver(fname, carName, age, carSpeed) {
        this.fname = fname;
        this.carName = carName;
        this.age = age;
        this.carSpeed = carSpeed;
    }
    return Driver;
}());
var driver = new Driver('Alex', 'ferrari', 25, 400);
// console.log(driver);
//M-2
var Hunter = /** @class */ (function () {
    function Hunter(name, address, isWeapon, age, isPermit) {
        this.name = name;
        this.address = address;
        this.isWeapon = isWeapon;
        this.age = age;
        this.isPermit = isPermit;
    }
    return Hunter;
}());
var hunter = new Hunter('Jackob', 'London', true, 28, false);
// console.log(hunter);
//M-3
var Laptop = /** @class */ (function () {
    function Laptop(brand, price, createDate, screenSize, weight, memory) {
        this.brand = brand;
        this.price = price;
        this.createDate = createDate;
        this.screenSize = screenSize;
        this.weight = weight;
        this.memory = memory;
    }
    return Laptop;
}());
var laptop = new Laptop('hp', 350, '20.04.2024', 14, 2, '1Tr');
console.log(laptop);
//***********Abstraction***********/
//M-1
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Shape));
var rectangle = new Rectangle(4, 5);
// console.log(`Rectangle Area: ${rectangle.getArea()}`); 
//M-2
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.getArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}(Shape));
var circle = new Circle(3);
// console.log(`Circle Area: ${circle.getArea()}`); 
//M-3
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(base, height) {
        var _this = _super.call(this) || this;
        _this.base = base;
        _this.height = height;
        return _this;
    }
    Triangle.prototype.getArea = function () {
        return 0.5 * this.base * this.height;
    };
    return Triangle;
}(Shape));
var triangle = new Triangle(4, 5);
// console.log(`Triangle Area: ${triangle.getArea()}`); 
//************Polymorphism**********
//M-1
var MathAdd = /** @class */ (function () {
    function MathAdd() {
    }
    MathAdd.prototype.add = function (a, b) {
        return a * b;
    };
    return MathAdd;
}());
var addNumber = /** @class */ (function (_super) {
    __extends(addNumber, _super);
    function addNumber() {
        return _super.call(this) || this;
    }
    addNumber.prototype.add = function (a, b) {
        return a * b;
    };
    return addNumber;
}(MathAdd));
var addnum = new addNumber();
// console.log(addnum.add(4, 5));
//M-2
var MathBoll = /** @class */ (function () {
    function MathBoll() {
    }
    MathBoll.prototype.add = function (a, b) {
        return a * b;
    };
    return MathBoll;
}());
var bolinmaNum = /** @class */ (function (_super) {
    __extends(bolinmaNum, _super);
    function bolinmaNum() {
        return _super.call(this) || this;
    }
    bolinmaNum.prototype.add = function (a, b) {
        return a / b;
    };
    return bolinmaNum;
}(MathBoll));
var bolinma = new bolinmaNum();
// console.log(bolinma.add(20  , 5));
//M-3
var stringAdd = /** @class */ (function () {
    function stringAdd() {
    }
    stringAdd.prototype.action = function (text1, text2) {
        return text1 + text2;
    };
    return stringAdd;
}());
var addString = /** @class */ (function (_super) {
    __extends(addString, _super);
    function addString() {
        return _super.call(this) || this;
    }
    addString.prototype.action = function (text1, text2) {
        return text1 + text2;
    };
    return addString;
}(stringAdd));
var stringadd = new addString();
// console.log(stringadd.action("tursunxon", "bloger"));
