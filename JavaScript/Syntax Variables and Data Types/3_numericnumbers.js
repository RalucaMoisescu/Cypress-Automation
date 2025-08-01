// Define number alues
let num1 = 6;
let num2 = -100000;
let num3 = 1.54985439;

// Defining big and small numbers
let num4 = 1000000000000000000000;
console.log(num4);
let num5 = -0.00000000000000000000014;
console.log(num5);

// Creating numbers with e-notation
let num6 = 1.2e+10;
console.log(num6);


// How big and small can we get with the number type
console.log(`Minimum value: ${Number.MIN_VALUE}`);
console.log(`Minimum safe integer: ${Number.MIN_SAFE_INTEGER}`);
console.log(`Maximum value: ${Number.MAX_VALUE}`);
console.log(`Maximum safe integer: ${Number.MAX_SAFE_INTEGER}`);

// BigInt values represent numeric values that are too large to be represented by a primitive value
let bigInt1 = 1n;
let bigInt2 = 1_000_000_000_000_000_000_000n;
console.log(bigInt1, bigInt2);



