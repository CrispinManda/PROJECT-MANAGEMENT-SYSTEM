"use strict";
class Person {
    constructor(user_name) {
        this.user_name = user_name;
        this.name = 'Stephen';
        this.nationality = '';
        this.religion = '';
        this.age = 29;
        this.name = user_name;
    }
    walk() {
        console.log(this.name + (' is walking'));
    }
    callWalk() {
        this.walk();
    }
}
let person1 = new Person("Sandra");
// person1.name = "Michael"
person1.callWalk();
// console.log(person1);
class Man extends Person {
    constructor(user_name, user_age) {
        super(user_name);
        this.user_age = user_age;
        this.nationalityy = '';
    }
    setValues(religion, nationality) {
        this.religion = religion;
        this.nationalityy = nationality;
    }
    getNationality() {
        return this.nationalityy;
    }
}
Man.car = "Audi";
let man1 = new Man("Caleb", 10);
man1.setValues("Christian", "Kenyan");
// console.log(man1);
// console.log(man1.getNationality());
// console.log(Man.car)
// Abstract class
class Employee {
    constructor(name, salary) { }
}
class fullTimeEmployee extends Employee {
    constructor(name, salary) {
        super(name, salary);
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
}
class partTimeEmployee extends Employee {
    constructor(name, salary, rate, hours) {
        super(name, salary);
        this.rate = rate;
        this.hours = hours;
    }
    getSalary() {
        return (this.rate * this.hours);
    }
}
let emp1 = new fullTimeEmployee("Clare", 150000);
let emp2 = new fullTimeEmployee("Francis", 50000);
console.log(emp1.getSalary());
console.log(emp2.getSalary());
let emp3 = new partTimeEmployee("Eric", 56789, 5000, 160);
let emp4 = new partTimeEmployee("Isaac", 56789, 6000, 140);
console.log(emp3.getSalary());
console.log(emp4.getSalary());
let product1 = {
    name: "TV",
    description: "84",
    long_description: "utyutuytyut",
    price: 150000,
    image: "string",
    quantity: 20
};
let product2 = {
    name: "TV",
    description: "84",
    price: 150000,
    image: "string",
    quantity: 67
};
class Cat {
    constructor(name) {
        this.name = '';
        this.name = name;
    }
    walk() {
        console.log(this.name + (' is walking'));
    }
}
let cat1 = new Cat("Alma");
cat1.walk();
let man10 = {
    name: "Caleb",
    age: 30,
    hasBeards() {
        console.log("I am not a manchester united fan");
    },
};
