'use strict';

/* ES6 singleton pattern realizations */

/* ********************************************************************* */

/* As an object literal assigned to constant  */
(function () {

    const SingletonLiteral = {
        name: 'ololo_1',
        greet: function () {
            console.log(`Hello!, ${this.name}`);
        }
    };

    let a = SingletonLiteral;
    let b = SingletonLiteral;
    console.log(a === b); // true
    console.log(b.name); // ololo_1

}());
/* ********************************************************************* */


/* ********************************************************************* */

/* As a class */
(function () {

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

        greet() {
            return `Hello!, ${this.name}`;
        }
    }

    const a = new SingletonClass('ololo_1');
    const b = new SingletonClass('ololo_2');
    console.log(a === b) // true
    console.log(b.name) // ololo_1

}());
/* ********************************************************************* */


/* + All ES5 realizations */


