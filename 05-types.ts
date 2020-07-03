// Extending type aliases 
type TRobotMovement = 'right' | 'left'
type TMovementDrone = TRobotMovement | 'up' | 'down'
let movement: TMovementDrone = 'right'

// Extending type aliases with type interception

type TRobot = {
    name: string;
    color: string;
}

type TRobotCleaner = TRobot & {
    brush: number
}

const tRobotCleaner: TRobotCleaner = {
    name: 'cleaner',
    color: 'gray',
    brush: 2
}


// ReadOnly
type TDrone = {
    readonly name: string;
    age: number;
}

let drone: TDrone = {
    name: 'drone1',
    age: 2
}
drone.age = 3;
// drone.name = 'drone2'; // will fail


// Index types



// Types vs Interfaces

// Unlike an interface declaration, which always introduces a named object type, a type alias declaration can introduce a name for any kind of type, including primitive, union, and intersection types.

// A class can implement an interface or type alias, both in the same exact way. Note however that a class and interface are considered static blueprints. Therefore, they can not implement / extend a type alias that names a union type.

// Unlike a type alias, an interface can be defined multiple times, and will be treated as a single interface (with members of all declarations being merged).

// https://stackoverflow.com/questions/37233735/typescript-interfaces-vs-types