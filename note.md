

Review of the ES for Everyone

Ref : [wesbos](https://courses.wesbos.com/account/)

      [MDN Doc](https://developer.mozilla.org)

#  New Variables

## Before 

var : The scope of var is the enclosing function scope or the global scope.
      var can be update.

```javascript

var width = 10
var width = 30 // var can be reassign
    width = 23 // var can be update

if(true) {
  var result = width * 12  // result will leak out of the {} scope because there is no function
  console.log(`result = ${result}`)
}
```

## New let and const

let and const are block-Scoped, inside the {}

let : can be update, mutable

const : can not be update, mutable

```javascript

let width = 12
let width = 34 // error can't be reassign

const height = 12
const height = 34 // error can't be reassign
height = 356 // error can't be update

if(true) {
  var result = width * 12  // result will not leak out of the {} scope
  console.log(`result = ${result}`)
}
```
* use `const` by default
* use  `let` if rebinding is needed
* don't use var

# Function Improvements