//  Var : Variables declared with var can be re-declared and updated within their scope
//  E.g
var x = 10;
var x = 20; // Allowed
console.log(x); // Outputs: 20

// Let : Variables declared with let can be updated but cannot be redeclared 
// in the same scope.
// E.g
let y = 10;
y = 20; // Allowed
console.log(y); // Outputs: 20

// Const : The value of a const variable must be assigned at the time of declaration;
// and it cannot be reassigned.
// E.g
const z = 10;
z = 20; // Error: Assignment to constant variable.
