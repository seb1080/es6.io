// Named Export
export const apiKey = 'abc123'

// Module can only have one default export,
// the element that is export can be rename
// export default apikey = 'abc123'

// variables are alway scope, to the function, block or the module
export const url = 'http://wesbos.com'

export function sayHi(name) {
  console.log(`Hello there ${name}`);
}

const age = 100;
const dog = 'snickers';

export { age as old, dog };
