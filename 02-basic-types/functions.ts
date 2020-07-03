// Return types of functions can be inferred
let getRandomNumber = () => Math.random() > 0.5;
let bark = () => 'guau';
let getObject = () => { };

// Type annotations can be used to type uninitialized functions
let sendMessage: (message: string) => void;
let getNote: (id: number) => string;
let isItTrue: () => true;

// You can add explicit return type annotations when a function is initialized
// * This ensures the function returns the right type
let sayHello = (message = 'Hello'): string => {
    return message
}

// Optional & rest parameters

// Default value for the parameter
let greet = (message = 'hi') => console.log(message);
// Optional parameter (?? nullish coalescing operator. Handle JUST the null | undefined). https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
let maybeGreet = (message?: string) => console.log(message ?? 'hello');
// Rest parameter ...
let join = (separator: string, ...strings: string[]) => strings.join(separator);