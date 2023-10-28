class Person{
    constructor(public user_name:string){
        this.name = user_name
    }

    name: string = 'Stephen';
    public nationality: string = '';
    protected religion : string =''
    readonly age = 29

    protected walk(){
        console.log(this.name + (' is walking'));
    }

    callWalk(){
        this.walk()
    }
}

let person1 = new Person("Sandra")

// person1.name = "Michael"
person1.callWalk()
// console.log(person1);

class Man extends Person{
    constructor (user_name:string, public user_age: number){
        super(user_name)
    }

    private nationalityy: string = '';
    static car:string = "Audi"

    setValues(religion: string, nationality:string){
        this.religion = religion
        this.nationalityy = nationality
    }

    getNationality(){
        return this.nationalityy
    }
}

let man1 =  new Man("Caleb", 10)

man1.setValues("Christian", "Kenyan")

// console.log(man1);

// console.log(man1.getNationality());

// console.log(Man.car)

// Abstract class
abstract class Employee{
    constructor(name: string, salary:number){}

    abstract getSalary():number
}

class fullTimeEmployee extends Employee{
    constructor(name: string, salary:number){
        super(name, salary)
        this.salary = salary
    }

    salary!:number

    getSalary(): number {
        return this.salary
    }
}

class partTimeEmployee extends Employee{
    constructor(name: string, salary:number, rate:number, hours:number){
        super(name, salary)
        this.rate = rate
        this.hours = hours
    }

    rate!:number
    hours!:number

    getSalary(): number {
        return (this.rate * this.hours)
    }
}

let emp1 = new fullTimeEmployee("Clare", 150000)
let emp2 = new fullTimeEmployee("Francis", 50000)

console.log(emp1.getSalary());
console.log(emp2.getSalary());


let emp3 = new partTimeEmployee("Eric", 56789, 5000, 160)
let emp4 = new partTimeEmployee("Isaac", 56789, 6000, 140)

console.log(emp3.getSalary());
console.log(emp4.getSalary());


// Interfaces

interface product{
    name: string;
    description : string;
    long_description?: string
    price : number;
    image: string;
    quantity : number
}

let product1 : product = {
    name: "TV",
    description : "84",
    long_description: "utyutuytyut",
    price : 150000,
    image: "string",
    quantity : 20
}

let product2 : product = {
    name: "TV",
    description: "84",
    price: 150000,
    image: "string",
    quantity: 67

}

interface Animal{
    name : string;
    walk() : void;
}

class  Cat implements Animal{
    constructor(name:string){
        this.name = name
    }

    name: string = ''
    age!: number

    walk(){
        console.log(this.name + (' is walking'));
        
    }
}

let cat1 = new Cat("Alma")

cat1.walk()

interface person{
    name: string;
    age: number;
}

interface man extends person{
    hasBeards(): void
}

let man10:man = {
    name: "Caleb",
    age: 30,
    hasBeards() {
        console.log("I am not a manchester united fan");
    },
}