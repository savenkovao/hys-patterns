/* TS singleton pattern realizations */

/* ********************************************************************* */

/* As class to use WITHOUT 'new' */
(function () {

    class NoConstructorSingleton {
        public name: string = '';
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

    const a = NoConstructorSingleton.getInstance();
    a.name = 'ololo_1';
    const b = NoConstructorSingleton.getInstance();
    console.log(a === b) // true
    console.log(b.name) // ololo_1

}());
/* ********************************************************************* */



/* ********************************************************************* */

/* * As class to use WITH 'new' */
(function () {

    class ConstructorSingleton {
        public name: string = '';

        private static _instance: ConstructorSingleton | null = null;

        constructor(name: string) {
            if (ConstructorSingleton._instance) {
                return ConstructorSingleton._instance;
            }

            this.name = name;

            ConstructorSingleton._instance = this;
        }

        public greet(): string {
            return 'Hello, ' + this.name
        }
    }

    const a = new ConstructorSingleton('ololo_1');
    const b = new ConstructorSingleton('ololo_2');
    console.log(a === b) // true
    console.log(b.name) // ololo_1
    console.log(a.name) // ololo_1

}());
/* ********************************************************************* */


/* + All ES5, ES6 realizations */
