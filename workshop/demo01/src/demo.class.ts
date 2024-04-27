class Cat implements Animal {
    constructor(public name: string) {}
    sayHello() {
        return `Hello, I'm ${this.name}`;
    }
}

class Dog implements Animal {
    constructor(public name: string) {}
    sayHello() {
        return `Hello, I'm ${this.name}`;
    }
}

interface Animal {
    sayHello(): string
}

function processV1(animal: Animal) {
    console.log(animal.sayHello());
}

processV1(new Cat("Tom"));
processV1(new Dog("Jerry"));