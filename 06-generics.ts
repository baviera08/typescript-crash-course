// Generics allow types to be more reusable
// * Many built-in JS features include generics already

let array = new Array<number>();
let map = new Map<string, boolean>();
let set = new Set<string>();

['a', 'bb', 'ccc'].map<number>((value) => value.length);
let anchors = document.querySelectorAll<HTMLAnchorElement>('.test');
anchors[0].href

// Promises
let getVoid = async () => { };
let getBool = async () => false;

let getValue = new Promise<TDrone>((resolve) => {
    resolve({
        name: 'wallie',
        age: 1
    })
});

let getValueFromApi = async () => {
    // Here we specify the generic on the .then to make the variable value of type <TDrone>
    let value = await fetch('api/response').then<TDrone>((response) => response.json());
    return value
}

// Use generics in your own types
// When we don't know what the type gonna be, we generally use T. 
type BackendResponse<T> = {
    token: string;
    response: T;
}

// Replace the <T> per <TDrone> (we can use primitives here too)
let tResponse: BackendResponse<TDrone> = {
    token: '231a',
    response: {
        name: 'wallie',
        age: 1
    }
}

// Use generics in arguments to alter the return type of a function
function echo<T>(obj: T): T {
    return obj
}
echo(map);
echo(anchors);

// Multiple generics and extends in a more complex example
// Doesn't have to do "T" but it's the normal convention. But if you need better descriptions don't doubt on using descriptive names like TPayload.
type ReduxAction<T extends string, TPayload, M = {}> = {
    type: T,
    payload: TPayload;
    meta?: M;
}

type TAuthPayload = {
    token: string;
    correct: true;
}

let authAction: ReduxAction<'auth', TAuthPayload> = {
    type: 'auth',
    payload: {
        token: 'asd',
        correct: true
    }
}