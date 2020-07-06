/**
# Types vs Interfaces

## Use

* Because an ideal property of software is being open to extension, you should always use an interface over a type alias if possible. (https://www.typescriptlang.org/docs/handbook/advanced-types.html)

* If you can't express some shape with an interface and you need to use a union or tuple type, type aliases are usually the correct way to go.

## Differences

* Unlike an interface declaration, which always introduces a named object type, a type alias declaration can introduce a name for any kind of type, including primitive, union, and intersection types.

* A class can implement an interface or type alias, both in the same exact way. Note however that a class and interface are considered static blueprints. Therefore, they can not implement / extend a type alias that names a union type.

* Unlike a type alias, an interface can be defined multiple times, and will be treated as a single interface (with members of all declarations being merged).

* https://stackoverflow.com/questions/37233735/typescript-interfaces-vs-types

 */