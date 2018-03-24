# Review of the ES for Everyone

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

## Arrow functions

ref: (https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/)

  Arrow functions are anonymous function that don't have it own this, arguments, super, new.target.


```javascript

// Implicite return
const arr2 = numbers.map(number => `${number} arr2`)
console.log(arr2)

// Explicite return
const arr3 = numbers.map(number => { return `${number} arr3`})
console.log(arr3)

// No Argument
const arr4 = numbers.map( () => { return ` arr4`})
console.log(arr4)

  // Implicite Object return
const race = `100m Dash`
const winners = ['seb', 'seb1080', 'paco']
// The () of the return 
const win = winners.map( (winner, i) =>  ({name:winner, race:race, place: i}))
// so cool
console.table(win)
```

### this, arrow functions 

  Arrow functions inherit the this context from the parent context.

  Arrow functions don't access the arguments object. 

The arrow  functions should not be use for : 

```javascript
// To handle click event
  button.addEventListener('click', function() {
    console.log(this)
    this.classList.toggle('on')
  })

// Don't use () => {} to bind to an object
  const person = {
    points: 23,
    score() {
      console.log(this) // this don't work because this reference to the window()
      this.points++
    }
  }

  // Don't use () => {} has a constructor
  class Car {
    constructor(make, colour) {
      this.make = make
      this.colour = colour
    }
  }
  // () => {} can be use to add a method to a class
  Car.prototype.summarize = function() {
    return `This car is a ${this.make} in the colour ${this.colour}`;
  }

  // Arrow functions don't access the arguments object.
  const orderChildren = function() {
    const children = Array.from(arguments)
    return children.map((child, i) => {
      return `${child} was child #${i + 1}`
    })
    console.log(arguments)
  }
  // not working 
  const orderChildren2 = () => {
    const children = Array.from(arguments)
    return children.map((child, i) => {
      return `${child} was child #${i + 1}`
    })
    console.log(arguments)
  }
```


### Default argument

```javascript
function calculateBill(total, tax =0.13, tip=0.15) {
  return total * tax + total * tip 
}
```




# Templating String






# Glossary

arguments : Aguments is Array-like object corresponding to the arguments passed to a function.

arrow function : () => {}

const : 

let :  