/* TS singleton pattern realizations */

/* ********************************************************************* */

/* As class to use WITHOUT 'new' */
class NoConstructorSingleton {
    public name: string;
    private static _instance: NoConstructorSingleton;

    // Constructor should be private to protect calls with new
    private constructor() {
    }

    // Static method that gives access to instance
    public static getInstance(): NoConstructorSingleton {
        if (!NoConstructorSingleton._instance) {
            NoConstructorSingleton._instance = new NoConstructorSingleton();
        }

        return NoConstructorSingleton._instance;
    }


    public greet(): string {
        return 'Hello, ' + this.name
    }
}

/* Run */
// const a = NoConstructorSingleton.getInstance();
// a.name = 'ololo_1';
// const b = NoConstructorSingleton.getInstance();
// console.log(a === b) // true
// console.log(a.name) // ololo_1
// console.log(b.name) // ololo_1
// console.log(a.greet()) // Hello, ololo_1

/* ********************************************************************* */



/* ********************************************************************* */

/* * As class to use WITH 'new' */
class ConstructorSingleton {
    public name: string;
    private readonly _instance: ConstructorSingleton; // Assigned once in constructor - could be readonly

    constructor(name: string) {
        if (this._instance) {
            return this._instance;
        }

        this.name = name;

        this._instance = this;
    }

    public greet(): string {
        return 'Hello, ' + this.name
    }
}

/* Run */
// const a = new ConstructorSingleton('ololo_1');
// const b = new ConstructorSingleton('ololo_2');
// console.log(a === b) // true
// console.log(a.name) // ololo_1
// console.log(b.name) // ololo_1
// console.log(a.greet()) // Hello, ololo_1

/* ********************************************************************* */


/* + All ES5, ES6 realizations */
