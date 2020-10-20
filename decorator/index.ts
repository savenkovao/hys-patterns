/* TS decorator pattern realizations */

/* ********************************************************************* */
function checkPermissionDecorator(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
): PropertyDescriptor {
    const originMethod = descriptor.value;

    descriptor.value = function(...args: Array<any>) {
        if (isAdmin()) {
            return originMethod.apply(this, args);
        }

        alert( 'You do not have enough permissions!' );
    }

    return descriptor;
}

function isAdmin(): boolean {
    let adminRules: boolean = false;

    /* Some Admin determination logic... */

    return adminRules;
}

/* TODO add log decorator */
class User {
    name: string = 'Alala';

    @checkPermissionDecorator
    public editProfile(): void {
        console.log('ololo_2');
    }
}

const user = new User();
user.editProfile(); // 'You do not have enough permissions'

/* ********************************************************************* */


/* + All ES5, ES6 realizations */
