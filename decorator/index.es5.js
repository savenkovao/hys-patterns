'use strict';

/* ES5 decorator pattern realizations */

/* ********************************************************************* */

function isAdmin() {
    var adminRules = false;

    /* Some Admin determination logic... */

    return adminRules;
}

/* Check permissions decorator function */
function checkPermissionDecorator(func) {
    return function() {
        if (isAdmin()) {
            return func.apply(this, arguments);
        }

        alert( 'You do not have enough permissions' );
    }
}

function editProfile() {
    /* Some edit profile logic... */
    console.log('ololo_1');
}
/* TODO add log decorator */
editProfile = checkPermissionDecorator(editProfile);
editProfile() // 'You do not have enough permissions'

const user = {
    name: 'Alala',
    editProfile: checkPermissionDecorator(function (){
        console.log('ololo_2');
    })
}
user.editProfile(); // 'You do not have enough permissions'

/* ********************************************************************* */
