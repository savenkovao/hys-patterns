'use strict';

/* ES6 */
class Singleton {
    static _instance; // Could be overwritten externally
    name;

    constructor(name) {
        if (Singleton._instance) {
            // If Singleton has been already created
            return Singleton._instance
        }

        // If Singleton created first time
        this.name = name;

        Singleton._instance = this; // Set class instance
    }

    greet() {
        return 'Hello, ' + this.name
    }
}

/* Run */
const a = new Singleton('ololo_1');
const b = new Singleton('ololo_2');

console.log(a === b) // true

console.log(a.name) // ololo_1
console.log(b.name) // ololo_1
console.log(a.greet()) // Hello, ololo_1

// Object.freeze?
// Singleton._instance = null;
// const c = new Singleton('ololo_3');
// console.log(c.name) // ololo_3

b.name = 'ololo_2';

console.log(a.name) // ololo_2
console.log(a.greet()) // Hello, ololo_2

