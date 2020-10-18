'use strict';

/* ES5 decorator pattern realizations */

/* ********************************************************************* */

// bind – привязка контекста
// Один простой декоратор вы уже видели ранее – это функция bind:

    function bind(func, context) {
        return function() {
            return func.apply(context, arguments);
        };
    }
// Вызов bind(func, context) возвращает обёртку, которая ставит this и передаёт основную работу функции func.
/* ********************************************************************* */




/* ********************************************************************* */
function checkPermissionDecorator(f) {
    return function() {
        if (isAdmin()) {
            return f.apply(this, arguments);
        }
        alert( 'Недостаточно прав' );
    }
}
// Использование декоратора:

// function save() { ... }
// save = checkPermissionDecorator(save);

// Теперь вызов функции save() проверяет права
/* ********************************************************************* */




/* ********************************************************************* */
var timers = {};

// прибавит время выполнения f к таймеру timers[timer]
function timingDecorator(f, timer) {
    return function() {
        var start = performance.now();

        var result = f.apply(this, arguments); // (*)

        if (!timers[timer]) timers[timer] = 0;
        timers[timer] += performance.now() - start;

        return result;
    }
}

// функция может быть произвольной, например такой:
var fibonacci = function f(n) {
    return (n > 2) ? f(n - 1) + f(n - 2) : 1;
}

// использование: завернём fibonacci в декоратор
fibonacci = timingDecorator(fibonacci, "fibo");

// неоднократные вызовы...
alert( fibonacci(10) ); // 55
alert( fibonacci(20) ); // 6765
// ...

// в любой момент можно получить общее количество времени на вызовы
alert( timers.fibo + 'мс' );
/* ********************************************************************* */




/* ********************************************************************* */
function slow(x) {
    // здесь могут быть ресурсоёмкие вычисления
    alert(`Called with ${x}`);
    return x;
}

function cachingDecorator(func) {
    let cache = new Map();

    return function(x) {
        if (cache.has(x)) {    // если кеш содержит такой x,
            return cache.get(x); // читаем из него результат
        }

        let result = func(x); // иначе, вызываем функцию

        cache.set(x, result); // и кешируем (запоминаем) результат
        return result;
    };
}

slow = cachingDecorator(slow);

alert( slow(1) ); // slow(1) кешируем
alert( "Again: " + slow(1) ); // возвращаем из кеша

alert( slow(2) ); // slow(2) кешируем
alert( "Again: " + slow(2) ); // возвращаем из кеша

/* ********************************************************************* */
