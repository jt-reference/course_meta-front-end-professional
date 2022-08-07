/*
Constructor functions, commonly referred to as just "constructors", are special functions that allow us to build instances of these built-in native objects. All the constructors are capitalized.

To use a constructor function, I must prepend it with the operator new.

The most common use case of new is to use it with one of the built-in object types.

Besides not using constructors to build object versions of primitives, you are better off not using constructors when constructing plain, regular objects.

Instead of new Object, you should stick to the object literal syntax: {}.

*/

// custom constructor functions

function Icecream(flavor) {
  this.flavor = flavor;
  this.meltIt = function () {
    console.log(`The ${this.flavor} icecream has melted`);
  };
}

// Now I can make as many icecreams as I want:

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
kiwiIcecream; // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
appleIcecream; // --> Icecream {flavor: 'apple', meltIt: ƒ}

/*

Instead of using Array, Function, and RegExp constructors, you should use their array literal, function literal, and pattern literal varieties: [], () {}, and /()/.

However, when building objects of other built-in types, we can use the constructor.

Here are a few examples:
*/

new Date();
new Error();
new Map();
new Promise();
new Set();
new WeakSet();
new WeakMap();
