// Type intersection, but mark all inherited props as optional
let emptyRobot: Partial<TRobot> = {};

// Type intersection, but mark all inherited props as required
let completeRobot: Required<TRobot>;

// Type intersection, but mark all inherited props as readonly
let readonlyRobot: Readonly<TRobot>;

// Pick<T,K> and Omit<T,K> allow type intersections
type TRobot2 = Omit<TRobot, 'name'> & {
    run: () => string;
}

type TRobot3 = Pick<TRobot, 'name'> & {
    run: () => string;
}

let robot2I: TRobot2;
let robot3I: TRobot3;

// Intersection between TRobotCleaner and TRobot
type TRobot4 = Pick<TRobotCleaner, keyof TRobot> & {
    run: () => string;
}

let robot4: TRobot4;

// Construct a type from the return type of a function
let robotPromise: ReturnType<typeof sendMessage>

// More utility types 
// - https://www.typescriptlang.org/docs/handbook/utility-types.html