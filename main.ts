//*************Inheritance************** */
//M-1
class Car{
    name:string
    engine:number
    constructor(name:string , engine:number){
        this.name = name
        this.engine = engine
    }
}
class SuperCar extends Car{
    brand:string
    year:number
    constructor(name:string ,engine:number ,brand:string , year:number ){
        super(name , engine)
        this.brand = brand
        this.year = year
    }
}
let myCar:SuperCar = new SuperCar('Cobalt'   , 1.5 , 'Chevrolet', 2021 )
// console.log(myCar);


//M-2
class Snake{
    name:string
    constructor(name:string){
        this.name = name
    }
}

class PoisonousSnake extends Snake{
    length:number
    weigh:number
    isPoisonous:boolean
    constructor(name:string , length:number , weigh:number ,   isPoisonous:boolean){
        super(name)
        this.length = length
        this.weigh = weigh
        this.isPoisonous = isPoisonous
    }
}
let snake:PoisonousSnake = new PoisonousSnake('cobra' , 2 , 25 ,true)
// console.log(snake);



//M-3
class Teacher{
    fname:string
    lname:string
    salary:number
    constructor(fname:string , lname:string , salary:number){
        this.fname = fname
        this.lname = lname
        this.salary = salary
    }
}

class SuperTeacher extends Teacher{
    direction:string
    age:number
    address:string
    constructor(fname:string , lname:string , salary:number ,direction:string,age:number,address:string){
        super(fname , lname , salary)
        this.direction = direction
        this.age = age
        this.address = address
    }
}

let teacher:SuperTeacher = new SuperTeacher('John' , "Do" , 3_200 , 'Teacher information' , 22 , 'USA' )
// console.log(teacher);


//**********Encapsulation*************/
//M-1
class Driver{
    public fname:string
    carName:string
    age:number
    private carSpeed:number
    constructor(fname:string , carName:string , age:number , carSpeed:number){
        this.fname = fname
        this.carName = carName
        this.age = age
        this.carSpeed = carSpeed
    }
}
let driver:Driver = new Driver('Alex' , 'ferrari' , 25 , 400)
// console.log(driver);



//M-2
class Hunter{
    public name:string
    private address:string
    isWeapon:boolean ///qurollanganmi
    age:number
    isPermit:boolean // Ruxsatnomasi bormi
    constructor(name:string,address:string,isWeapon:boolean,age:number,isPermit:boolean){
        this.name = name
        this.address = address
        this.isWeapon = isWeapon
        this.age = age
        this.isPermit = isPermit
    }
}
let hunter:Hunter = new Hunter('Jackob' , 'London' , true , 28 , false)
// console.log(hunter);


//M-3
class Laptop{
    brand:string
    price:number
    createDate:string
    screenSize:number
    weight:number
    private memory:string
    constructor(brand:string ,price:number ,createDate:string ,screenSize:number ,weight:number , memory:string, ){
        this.brand = brand
        this.price = price
        this.createDate = createDate
        this.screenSize = screenSize
        this.weight = weight
        this.memory = memory
    }
}
let laptop:Laptop = new Laptop('hp' , 350 , '20.04.2024' , 14 , 2 , '1Tr')
console.log(laptop);



//***********Abstraction***********/
//M-1
abstract class Shape{
    abstract getArea():number
}


class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }
}
let rectangle: Rectangle = new Rectangle(4, 5);
// console.log(`Rectangle Area: ${rectangle.getArea()}`); 




//M-2
class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}
let circle: Circle = new Circle(3);
// console.log(`Circle Area: ${circle.getArea()}`); 



//M-3
class Triangle extends Shape {
    base: number;
    height: number;

    constructor(base: number, height: number) {
        super();
        this.base = base;
        this.height = height;
    }

    getArea(): number {
        return 0.5 * this.base * this.height;
    }
}
let triangle: Triangle = new Triangle(4, 5);
// console.log(`Triangle Area: ${triangle.getArea()}`); 



//************Polymorphism**********
//M-1
class MathAdd{
    add(a:number ,b:number):number;
    add(a:any ,b:any):any{
        return a * b
    }
}

class addNumber extends MathAdd{
    constructor(){
        super()
    }
    add(a: any, b: any) {
        return a * b
    }
}

let addnum:addNumber = new addNumber()
// console.log(addnum.add(4, 5));


//M-2
class MathBoll{
    add(a:number ,b:number):number;
    add(a:any ,b:any):any{
        return a / b
    }
}

class bolinmaNum extends MathBoll{
    constructor(){
        super()
    }
    add(a: any, b: any) {
        return a / b
    }
}

let bolinma:bolinmaNum = new bolinmaNum()
// console.log(bolinma.add(20  , 5));



//M-3
class stringAdd{
    action(text1:string ,text2:string):string;
    action(text1:any ,text2:any):any{
        return text1 + text2
    }
}

class addString extends stringAdd{
    constructor(){
        super()
    }
    action(text1: any, text2: any) {
        return text1 + text2
    }
}

let stringadd:addString = new addString()
// console.log(stringadd.action("tursunxon", "bloger"));