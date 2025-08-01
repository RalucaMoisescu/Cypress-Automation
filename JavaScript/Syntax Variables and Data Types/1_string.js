// Creating single-line strings
let firstName="David";
let lastName='Tucker';
let title = `Queen`;

// String concatenation with the plus operator
let fullName = firstName + " " + lastName;

// String concatenation with template literals
fullName = `${firstName} ${lastName}`;
//console.log(fullName);

// Creating multi-line strings with \n
let bio = "Line 1\nLine 2\nLine 3"
//console.log(bio);

// Creating multi-line strings with backticks
bio = `About David Tucker:
This is a good trainer.
He explains in a way that things make sense`
//console.log(bio);

// Escaping characters
let quote = 'David said, "JavaScript is great".'
//console.log(quote);
quote = "David said, \"JavaScript is great.\"";
//console.log(quote);
quote = `JavaScript can use 'single' and "double" quotes.`;
//console.log(quote);
quote = `In JavaScript, you must escape the \\ character`;
//console.log(quote);

// String length
let length = quote.length;
//console.log(`Quote Length: ${length}`);

// Accessing specific characters
let secondCharacter = quote[1];
//console.log(`Second Character: ${secondCharacter}`);

// Changing Case
let upperCaseName = fullName.toLocaleUpperCase();
console.log(upperCaseName);
let lowerCaseName = fullName.toLocaleLowerCase();
console.log(lowerCaseName);

// Finding a substring
let idx1 = fullName.indexOf("Dav");
console.log(`Index 1: ${idx1}`);
let idx2 = fullName.indexOf("ker");
console.log(`Index 2: ${idx2}`);
let idx3 = fullName.indexOf("fds");
console.log(`Index 3: ${idx3}`);

// Does a string contain a substring
let doesContain = fullName.includes("Dav");
console.log(doesContain);



