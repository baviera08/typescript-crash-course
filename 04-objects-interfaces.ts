// Inferred Object interfaces

let robot = {
    name: 'wallie',
    color: 'gray'
}

// Describe objects using {}  and property names

let developer: {
    name: string,
    age: number,
    programingLanguage?: string
}

developer = {
    name: 'John',
    age: 22,
    // hue:false // (should give an error)
}

// Describe objects using interfaces
interface IRobot {
    name: string;
    color: string;
}

let cleaner: IRobot = {
    name: 'cleaner',
    color: 'gray'
}

// Extending interfaces

interface IRobotCleaner extends IRobot {
    brush: number
}

const robotCleaner: IRobotCleaner = {
    name: 'cleaner',
    color: 'gray',
    brush: 2
}