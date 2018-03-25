# Review of the ES for Everyone

Ref : [wesbos](https://courses.wesbos.com/account/)

      [MDN Doc](https://developer.mozilla.org)


# Module_1  New Variables

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

# Module_2 Function Improvements

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

### This, arrow functions 

  Arrow functions inherit the this context from the parent context.

  Arrow functions don't access the arguments object. 

The arrow  functions should not be use for : 

```javascript
// To handle click event
  button.# Templating StringaddEventListener('click', function() {
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

# Module_3 Templating String

```javascript
const string = `string`

const temString = ` template ${string} 
                    are awesome`
// Template string is great for formating HTML markup
const dogs = [
    { name: 'Snickers', age: 2 },
    { name: 'Hugo', age: 8 },
    { name: 'Croby', age: 6 },
    { name: 'Snopy' }
  ]

  const markup = 
  `<ul class="dogs">
    ${dogs.map( dog =>

    `<li>${dog.name}

    ${dog.age ? `is ${dog.name} year old`:'have no age'}
    
    </li>`).join('')}
  </ul>`
  document.body.innerHTML = markup
```

### Tagging Template string

```javascript
function tagging(strings, ...values) {
  let str = ``
  strings.forEach((string, i) => {
    str += `${string} <span contenteditable class="h1">
            ${values[i] || ''}
            </>`
  })
  return str
}
const name = `Ludo`, age = 8 
const sentence = tagging`My dog's name is ${name} and he is ${age} year old`
document.body.innerHTML =  sentence
```

# Module_4 Additional String Imporvements

```javascript
const str = `newString`

str.startsWith('new') // true

str.endsWith('ing') // true

str.includes('Str') // true

str.repeat(3) // newStringnewStringnewString
```


# Module_5 Destructuring


Destructuring allow to extract properties, key from a object, map, set into a variable.

## Destructuring Object

```javascript

const object = {
  prop1: 'Seb',
  prop2: 'Blais'
}

const { prop1, prop2 } =  object // Desstruring


const seb = {
    first: 'Seb',
    last: 'Blais',
    links: {
      social: {
        twitter: 'https://twitter.com/seb',
        facebook: 'https://facebook.com/seb.developer',
      },
      web: {
        blog: 'https://seb.com'
      }
    }
  };

                  // rename facebook for fb
  const { twitter, facebook: fb } = seb.links.social

  // Create a object
  const settings = { 
                    width: 300, 
                    color: 'black'
                  }

// Set default value if the settings object don't have the prop
  const { width = 100, height = 100, color = 'blue', fontSize = 25} = settings;

  // Object Destructuring with variable renaming & default values
  const { w: width = 400, h: height = 500 } = { w: 800 }
```

## Destructuring Array

```javascript

const arr = ['Seb Blais', 233223, 'seb.com']

const [name, id, website] = arr; // Destructuring Array

const data = 'aaaaaaaaaa,bbbbbbbbb,cccccccc,ddd'

const [a,b,c,d] = data.splti(',') // Destruc String into a Array

const team = ['Seb', 'Marco', 'Mick', 'Gab', 'Frank']

const [capitain, assistant, ...marins] = team // Rest Operator
```

## Swapping variables

```javascript

let var1 = 'variable1', var2 = 'variable1'

[var1, var2] = [var2, var1] // Swapping variables
```

## Destructuring Functions

```javascript

function tipCalc({ total = 100, tip = 0.15, tax = 0.13 } = {}) {
    return total + (tip * total) + (tax * total);
  }
  
// Arguments can't be pass in a different oroder
const bill = tipCalc({ tip: 0.20, total: 200 })
```

# Module_6 Iterables & Looping

```javascript


```









# Glossary

```javascript

```

arguments : Aguments is Array-like object corresponding to the arguments passed to a function.

arrow function : () => {}

const : 

debugger : The debugger statement invokes any available debugging functionality, such
          as setting a breakpoint. If no debugging functionality is available, this
          statement has no effect.

let :  