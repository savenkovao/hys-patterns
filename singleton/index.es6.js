'use strict';

/* ES6 singleton pattern realizations */

/* ********************************************************************* */

/* As an object literal assigned to constant  */
const SingletonLiteral = {
    name: 'ololo_1',  // Could be overwritten externally
    greet: function() {  // Could be overwritten externally
        console.log(`Hello!, ${ this.name }`);
    }
};

/* Run */
// SingletonLiteral.greet() // Hello!, ololo_1
// SingletonLiteral.name = 'ololo_2';
// SingletonLiteral.greet() // Hello!, ololo_2

/* ********************************************************************* */



/* ********************************************************************* */

/* As a class */
class SingletonClass {
    static _instance; // Could be overwritten externally
    name;

    constructor(name) {
        if (SingletonClass._instance) {
            // If Singleton has been already created
            return SingletonClass._instance
        }

        // If Singleton created first time
        this.name = name;

        SingletonClass._instance = this; // Set class instance
    }

    greet() {  // Could be overwritten externally
        return `Hello!, ${ this.name }`;
    }
}

/* Run */
// const a = new SingletonClass('ololo_1');
// const b = new SingletonClass('ololo_2');
// console.log(a === b) // true
// console.log(a.name) // ololo_1
// console.log(b.name) // ololo_1

/* ********************************************************************* */



/* + All ES5 realizations */


