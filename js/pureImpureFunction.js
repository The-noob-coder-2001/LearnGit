// this is an example of pure an impure function
function pureFunction(a, b) {
  return a + b;
} // this is a pure function
pureFunction(1, 2); // 3
pureFunction(1, 2); // 3    // same output for same input
function impureFunction(a) {
  return a + Math.random();
} // this is an impure function
impureFunction(1); // 1.432435
impureFunction(1); // 1.34324    // different output for same input
