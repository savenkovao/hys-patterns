'use strict';

/* ES7 decorator pattern realizations */
/* ********************************************************************* */

/* As a method decorator */

function checkPermissionDecorator(target, property, descriptor) {
    const originMethod = descriptor.value;

    descriptor.value = function(...args) {
        if (isAdmin()) {
            return originMethod.value.apply(this, args);
        }

        alert( 'You do not have enough permissions!' );
    }

    return descriptor;
}

function logDecorator(target, property, descriptor) {
    const originMethod = descriptor.value;

    descriptor.value = function (...args) {
        console.log(`Method arguments: ${args}`);

        return originMethod.apply(this, args);
    }

    return descriptor;
}

function isAdmin() {
    var adminRules = true;

    /* Some Admin determination logic... */

    return adminRules;
}


class User {
    @logDecorator
    @checkPermissionDecorator
    editProfile(id) {
        console.log(`ololo_${id}`);
    }
}

let user = new User();
user.editProfile(777, 333);
// Method arguments: 777,333
// 'You do not have enough permissions'

/* ********************************************************************* */



/* ********************************************************************* */

/* As a Class decorator */

function classLogDecorator(Class) {
    return (...args) => {
        console.log(`Class arguments: ${args}`);
        return new Class(...args);
    };
}

@classLogDecorator
class Driver {
    constructor(name, age) {
        /* Some constructor logic */
    }
}

const driver = new Driver('Ololo', 77); // [ 'Ololo', 77 ]

/* ********************************************************************* */


/* + All ES5 realizations */

