'use strict';

/* ES5 strategy pattern realizations */
//https://habr.com/ru/post/191480/
/* ********************************************************************* */
/* As a function */
var Greeter = function(strategy) {
    this.strategy = strategy;
};

Greeter.prototype.greet = function() {
    return this.strategy();
};

var politeGreetingStrategy = function() {
    console.log("Hello.");
};

var friendlyGreetingStrategy = function() {
    console.log("Hey!");
};

var boredGreetingStrategy = function() {
    console.log("sup.");
};

var politeGreeter = new Greeter(politeGreetingStrategy);
var friendlyGreeter = new Greeter(friendlyGreetingStrategy);
var boredGreeter = new Greeter(boredGreetingStrategy);

console.log(politeGreeter.greet()); //=> Hello.
console.log(friendlyGreeter.greet()); //=> Hey!
console.log(boredGreeter.greet()); //=> sup.

/* ********************************************************************* */

