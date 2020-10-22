'use strict';

/* ES5 strategy pattern realizations */
/* ********************************************************************* */
/* As a function */
(function () {

    var Notifier = function (strategy) { // Notifier class
        this.strategy = strategy;
    };

    Notifier.prototype.notify = function () { // Notifier method
        return this.strategy();
    };

    var successNotifierStrategy = function () { // Concrete strategy
        console.log("Success!");
    };

    var warningNotifierStrategy = function () { // Concrete strategy
        console.log("Warning!");
    };

    var errorNotifierStrategy = function () { // Concrete strategy
        console.log("Error!");
    };

    var successNotifier = new Notifier(successNotifierStrategy);
    var warningNotifier = new Notifier(warningNotifierStrategy);
    var errorNotifier = new Notifier(errorNotifierStrategy);

    /* Select one of notifiers according to some condition */

    successNotifier.notify(); // Success!
    warningNotifier.notify(); // Warning!
    errorNotifier.notify(); // Error!

}());
/* ********************************************************************* */


/* ********************************************************************* */
/* As a class */
(function () {

    var Notifier = function (strategy) { // Notifier class
        this.strategy = strategy;
    };

    Notifier.prototype.notify = function () { // Notifier method
        return this.strategy.execute();
    };

    var Strategy = function () { }; // Abstract strategy class to be used as interface

    Strategy.prototype.execute = function () {  // Method that should be overridden in inheritor
        console.log('These method should be overridden');
    };

    var SuccessNotifierStrategy = function () { /* Some notifier logic... */ }; // Concrete strategy class
    SuccessNotifierStrategy.prototype = Object.create(Strategy.prototype);  // inheritance from Strategy class
    SuccessNotifierStrategy.prototype.execute = function () { // Override method from prototype (Strategy)
        /* Some strategy logic... */
        console.log('Success!')
    };

    var WarningNotifierStrategy = function () { /* Some notifier logic... */ }; // Concrete strategy class
    WarningNotifierStrategy.prototype = Object.create(Strategy.prototype);  // inheritance from Strategy class
    WarningNotifierStrategy.prototype.execute = function () { // Override method from prototype (Strategy)
        /* Some strategy logic... */
        console.log('Warning!')
    };

    var ErrorNotifierStrategy = function () { /* Some notifier logic... */ }; // Concrete strategy class
    ErrorNotifierStrategy.prototype = Object.create(Strategy.prototype);  // inheritance from Strategy class
    ErrorNotifierStrategy.prototype.execute = function () { // Override method from prototype (Strategy)
        /* Some strategy logic... */
        console.log('Error!')
    };

    var successNotifier = new Notifier(new SuccessNotifierStrategy());
    var warningNotifier = new Notifier(new WarningNotifierStrategy());
    var errorNotifier = new Notifier(new ErrorNotifierStrategy());

    /* Select one of notifiers according to some condition */

    successNotifier.notify(); // Success!
    warningNotifier.notify(); // Warning!
    errorNotifier.notify(); // Error!

}());
/* ********************************************************************* */

