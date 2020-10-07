'use strict';

/* ES5 */
var Singleton = (() => {
    // Variable is available any time for Construct_singletone from closure. Is not available externally
    var _instance;

    return function Construct_singletone (name) {
        if (_instance) {
            // If Singleton has been already created
            return _instance;
        }

        if (this && this.constructor === Construct_singletone) {
            // If Singleton created with 'new' (called first time)
            this.name = name;

            this.greet = function () {
                return 'Hello, ' + _instance.name
            };

            _instance = this; // Set class instance
        } else {
            // If Singleton created without 'new' (called first time)
            return new Construct_singletone(name);
        }
    }
})();


/* Run */
var c = Singleton('ololo_1');
var a = new Singleton('ololo_2');
var b = new Singleton('ololo_3');

console.log(a === b) // true
console.log(a === c) // true

console.log(a.name) // ololo_1
console.log(b.name) // ololo_1
console.log(c.name) // ololo_1
console.log(a.greet()) // Hello, ololo_1

b.name = 'ololo_3';

console.log(a.name) // ololo_3
console.log(a.greet()) // Hello, ololo_3
