/* TS decorator pattern realizations */

/* ********************************************************************* */
(function () {

    function checkPermissionDecorator(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ): PropertyDescriptor {
        const originMethod = descriptor.value;

        descriptor.value = function (...args: Array<any>) {
            if (isAdmin()) {
                return originMethod.apply(this, args);
            }

            alert('You do not have enough permissions!');
        }

        return descriptor;
    }

    function logDecorator(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const originMethod = descriptor.value;

        descriptor.value = function (...args: Array<any>) {
            console.log(`Method arguments: ${ args }`);

            return originMethod.apply(this, args);
        }

        return descriptor;
    }

    function isAdmin(): boolean {
        let adminRules: boolean = false;

        /* Some Admin determination logic... */

        return adminRules;
    }

    class User {
        @logDecorator
        @checkPermissionDecorator
        public editProfile(id: number, ...args: any): void {
            console.log(`ololo_${ id }`);
        }
    }

    const user = new User();
    user.editProfile(777, 333);
    // Method arguments: 777,333
    // 'You do not have enough permissions'

}());
/* ********************************************************************* */


/* ********************************************************************* */

/* As a Class decorator */
(function () {

    function classLogDecorator<T extends { new(...constructorArgs: any[]) }>(constructorFunction: T) {
        return function (...args) {
            console.log(`Class arguments: ${ args }`);
            return new constructorFunction(...args);
        }
    }

    @classLogDecorator
    class Driver {
        constructor(name: string, age: number) {
            /* Some constructor logic */
        }
    }

    const driver = new Driver('Ololo', 77); // [ 'Ololo', 77 ]

}());
/* ********************************************************************* */


/* + All ES5, ES7 realizations */
