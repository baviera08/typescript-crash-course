/**
 * Wide vs. narrow types
 * - Wide types: any or unknown can accept any type of value
 * - Narrow types (never) accepts no value
 */

// Dynamic checks and predicates gives us information about values at run-time; type narrowing is the process of reflecting this information in the type-checker at compile time. For example:

function numberFromUnknown(x: unknown): number {
    if (typeof x === "number") {
        return x + 10; // 'x' has type 'number'
    }
    return 0;
}

// Type "guard" are a method to narrow types in code
let msg: 'hi' | 'bye' | number;
if (typeof msg === "number") {
    console.log(msg);
} else {
    // statement
    console.log(msg);
}

/**
 * Any may be used when you need maximum flexibility
 * - Useful when dealing with promises of unknown type. 
 * */
async function resolveQuery(query: Promise<any>, callback: () => any) {
    await query;
    return callback
}

// Unknown is like any, but its type must be narrowed before it can be used

let sizeOf = (obj: unknown) => {
    if (typeof obj === "number") {
        return obj
    };
    if (typeof obj === "string") {
        return obj
    }
}

// Type never occurs in unreachable code.
// BailOut will never return anything
let getOut = (msg: string) => {
    throw new Error(msg);
}


// Never may also occur through exhaustive type narrowing