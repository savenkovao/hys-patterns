'use strict';

/* TS strategy pattern realizations */
/* ********************************************************************* */
/* As a function */
(function () {

    type Strategy = () => void;

    class Notifier {
        constructor(private readonly strategy: Strategy) { }

        public notify(): void {
            return this.strategy();
        };
    }

    const successNotifierStrategy: Strategy = () => { // Concrete strategy
        console.log("Success!");
    };

    const warningNotifierStrategy: Strategy = () => { // Concrete strategy
        console.log("Warning!");
    };

    const errorNotifierStrategy: Strategy = () => { // Concrete strategy
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

    abstract class Strategy { // Abstract strategy class
        public execute(): void {  // Method that should be overridden in inheritor
            console.log('These method should be overridden');
        }
    }

    class Notifier {
        constructor(private readonly strategy: Strategy) { }

        public notify(): void {
            return this.strategy.execute();
        };
    }


    class SuccessNotifierStrategy extends Strategy {  // Concrete strategy
        public execute(): void {
            console.log('Success!');
        }
    }

    class WarningNotifierStrategy extends Strategy {  // Concrete strategy
        public execute(): void {
            console.log('Warning!');
        }
    }

    class ErrorNotifierStrategy extends Strategy {  // Concrete strategy
        public execute(): void {
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
