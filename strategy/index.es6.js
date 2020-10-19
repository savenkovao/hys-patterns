'use strict';

/* ES6 strategy pattern realizations */

/* ********************************************************************* */
/* As a class */
var Strategy = function() {};

Strategy.prototype.execute = function() {
    throw new Error('Strategy#execute needs to be overridden.')
};

var GreetingStrategy = function() {};
GreetingStrategy.prototype = Object.create(Strategy.prototype);

GreetingStrategy.prototype.execute = function() {
    return this.sayHi() + this.sayBye();
};

GreetingStrategy.prototype.sayHi = function() {
    return "Hello, ";
};

GreetingStrategy.prototype.sayBye = function() {
    return "Goodbye.";
};

Greeter.prototype.greet = function() {
    return this.strategy.execute();
};

var greeter = new Greeter(new GreetingStrategy());
greeter.greet() //=> 'Hello, Goodbye.'
/* ********************************************************************* */

/* ********************************************************************* */



/* + All ES5 realizations */

