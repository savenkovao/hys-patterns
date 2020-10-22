'use strict';

/* ES6 strategy pattern realizations */
/* ********************************************************************* */
/* As a function */
(function () {

    class Notifier {
        constructor(strategy) {
            this.strategy = strategy;
        }

        notify() {
            return this.strategy();
        };
    }

    const successNotifierStrategy = () => { // Concrete strategy
        console.log("Success!");
    };

    const warningNotifierStrategy = () => { // Concrete strategy
        console.log("Warning!");
    };

    const errorNotifierStrategy = () => { // Concrete strategy
        console.log("Error!");
    };

    const successNotifier = new Notifier(successNotifierStrategy);
    const warningNotifier = new Notifier(warningNotifierStrategy);
    const errorNotifier = new Notifier(errorNotifierStrategy);

    /* Select one of notifiers according to some condition */

    successNotifier.notify(); // Success!
    warningNotifier.notify(); // Warning!
    errorNotifier.notify(); // Error!

}());
/* ********************************************************************* */


/* ********************************************************************* */
/* As a class */
(function () {

    class Notifier {
        constructor(strategy) {
            this.strategy = strategy;
        }

        notify() {
            return this.strategy.execute();
        };
    }

    class Strategy { // Abstract strategy class to be used as interface
        execute() {  // Method that should be overridden in inheritor
            console.log('These method should be overridden');
        }
    }

    class SuccessNotifierStrategy extends Strategy {  // Concrete strategy
        execute() {
            console.log('Success!');
        }
    }

    class WarningNotifierStrategy extends Strategy {  // Concrete strategy
        execute() {
            console.log('Warning!');
        }
    }

    class ErrorNotifierStrategy extends Strategy {  // Concrete strategy
        execute() {
            console.log('Error!');
        }
    }

    var successNotifier = new Notifier(new SuccessNotifierStrategy());
    var warningNotifier = new Notifier(new WarningNotifierStrategy());
    var errorNotifier = new Notifier(new ErrorNotifierStrategy());

    /* Select one of notifiers according to some condition */

    successNotifier.notify(); // Success!
    warningNotifier.notify(); // Warning!
    errorNotifier.notify(); // Error!

}());

/* ********************************************************************* */



/* + All ES5 realizations */
