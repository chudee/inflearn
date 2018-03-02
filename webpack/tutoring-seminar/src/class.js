// class.js

class Test {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        return `My name is ${this.name}!!, I\`m ${this.age} years old`
    }
}

module.exports = Test