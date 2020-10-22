'use strict';

/* ES5 singleton pattern realizations */

/* ********************************************************************* */

/* As a constructor function (public instance) */
(function () {

    var instance = null; // Could be overwritten

    function ConstructorFunctionSingleton(name) {
        if (instance) {
            return instance;
        }

        instance = this;

        this.name = name;

        this.greet = function () {
            return 'Hello, ' + this.name
        };

        return instance;
    }

    var a = new ConstructorFunctionSingleton('ololo_1');
    var b = ConstructorFunctionSingleton('ololo_2');
    console.log(a === b) // true
    console.log(b.name) // ololo_1

}());
/* ********************************************************************* */


/* ********************************************************************* */

/* As a module (private instance) */
(function () {

    var ModuleSingleton = (() => {
        // Variable is available any time for Construct_singleton from closure. Is not available externally
        var _instance;

        return function Construct_singleton(name) {
            if (_instance) {
                // If Singleton has been already created
                return _instance;
            }

            if (this && this.constructor === Construct_singleton) {
                // If Singleton created with 'new' (called first time)
                this.name = name;

                this.greet = function () {
                    return 'Hello, ' + _instance.name
                };

                _instance = this; // Set class instance
            } else {
                // If Singleton created without 'new' (called first time)
                return new Construct_singleton(name);
            }
        }
    })();

    var a = new ModuleSingleton('ololo_1');
    var b = ModuleSingleton('ololo_2');
    console.log(a === b) // true
    console.log(b.name) // ololo_1

}());
/* ********************************************************************* */
