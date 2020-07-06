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
type IndexType = {
    messages: {
        type: string;
        [index: string]: string;
    }
}
let message: IndexType = {
    messages: {
        type: 'test',
        someKey: 'value'
    }
}
