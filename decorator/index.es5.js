'use strict';

/* ES5 decorator pattern realizations */

/* ********************************************************************* */
(function () {

    function isAdmin() {
        var adminRules = false;

        /* Some Admin determination logic... */

        return adminRules;
    }

    function logDecorator(func) {
        return function () {
            console.log('Function arguments: ', [].slice.call(arguments).join(', '));
            return func.apply(this, arguments);
        }
    }

    /* Check permissions decorator function */
    function checkPermissionDecorator(func) {
        return function () {
            if (isAdmin()) {
                return func.apply(this, arguments);
            }

            alert('You do not have enough permissions');
        }
    }

    function editProfile(id) {
        /* Some edit profile logic... */
        console.log('ololo_' + id);
    }

    editProfile = checkPermissionDecorator(editProfile);
    editProfile = logDecorator(editProfile);

    editProfile(777);
    // Function arguments:  777
    // 'You do not have enough permissions'

    var user = {
        name: 'Alala',
        editProfile:
            logDecorator(
                checkPermissionDecorator(
                    function (id) {
                        console.log('ololo_' + id);
                    }
                )
            )
    };

    user.editProfile(333);
    // Function arguments:  333
    // 'You do not have enough permissions'
}());
/* ********************************************************************* */
