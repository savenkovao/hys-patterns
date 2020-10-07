class Singleton {
    public name: string;
    private static instance: Singleton;

    // Constructor should be private to protect calls with new
    private constructor() {
    }

    // Static method that gives access to instance
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }


    public greet(): string {
        return 'Hello, ' + this.name
    }
}

/* Run */

const a = Singleton.getInstance();
a.name = 'ololo_1';
const b = Singleton.getInstance();

console.log(a === b) // true

console.log(a.name) // ololo_1
console.log(b.name) // ololo_1
console.log(a.greet()) // Hello, ololo_1

b.name = 'ololo_2';

console.log(a.name) // ololo_2
console.log(b.greet()) // Hello, ololo_2