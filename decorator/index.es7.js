'use strict';

/* ES7 decorator pattern realizations */
/* ********************************************************************* */

function checkPermissionDecorator(target, property, descriptor) {
    target.descriptor.value = function() {
        if (isAdmin()) {
            return target.descriptor.value.apply(this, arguments);
        }

        alert( 'You do not have enough permissions!' );
    }

    return descriptor;
}

function isAdmin() {
    var adminRules = true;

    /* Some Admin determination logic... */

    return adminRules;
}


class User {
    name = 'Alala';

    @checkPermissionDecorator
    editProfile() {
        console.log('ololo_2');
    }
}

let user = new User();
user.editProfile();
/* ********************************************************************* */


/* + All ES5 realizations */

