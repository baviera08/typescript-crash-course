// Uninitialized variables typed via type annotations.
let robotName: string;
let redirect: boolean;
let robotId: number; 

// Uninitialized variables are type `any` by default (Not recommended)
let robot1;
let robot2 = null;
let robot3 = undefined;

// Initialized variables have inferred types
let robotColor = 'red';
let isRobotAvailable = true;
let robotWheel = 4;

// Arrays
let robots=['robot1', 'robot2'];
let fleets: string[] = [];

// Tuples
let robotAge:[string, number];
let robotAges:[string,number][] = [];

// Union Types
let stringNull: string| null;
let stringUndefined: string | undefined;

// Enums, zero based integer values by default
enum RobotType {
    Cleaner,
    Patroller
}
let patroller = RobotType.Patroller;
let robotType : RobotType;
let cleanerIndex = RobotType.Cleaner.valueOf;

// Enums, with values set explicitly

enum RobotMovement {
    right = 'right-movement',
    stop = 'stop-movement'
}
let right = RobotMovement.right;
let robotMovement:RobotMovement;
let stopKey = RobotMovement.stop.valueOf();

// Type alias. Using string literal types
type RobotMovementType = 'right-movement' | 'stop-movement';

// Example
// let r:RobotMovementType = '';
// let i = RobotMovement.

// Enums are not type safe
enum Num {
    zero=0,
    one=1,
    two=2,
}
let num:Num = 3;

/**
 * Type assertions can be useful when working with `any` or `unknown` types
 * - This is useful when interacting with browser/vendor APIs
 */

let any:any ='hi';
let thisIsAString = <string>any;
let thisIsAString2 = any as string;
