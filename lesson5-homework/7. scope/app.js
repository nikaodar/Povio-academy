//1. Write a program that demonstrates the difference between block scope and function scope using variables.
if (true) {
  let var1 = "let variable";
  var var2 = "var variable";

  //both will print normally
  console.log(var1);
  console.log(var2);
}
//if we use console.log(var1);, we will get Uncaught ReferenceError: var1 is not defined error, let cannot be accessed outside the block
console.log(var2); //this will work because we can access var outside the block

//2. Create a program that showcases the concept of variable shadowing within nested scopes.
var x = "OUTSIDE var";
console.log(x); //prints OUTSIDE var
{
  var x = "INSIDE var"; //redeclaring var inside a block overwrites variable declared outside the block
  console.log(x);
}
console.log(x); //prints INSIDE var

let y = "OUTSIDE let";
console.log(y); //prints OUTSIDE let
{
  let y = "INSIDE let"; //redeclaring let inside a block DOES NOT overwrite variable declared outside the block
  console.log(y); //prints INSIDE let
}
console.log(y); //prints OUTSIDE let
