# Review of the ES for Everyone

Ref : [wesbos](https://courses.wesbos.com/account/)

      [MDN Doc](https://developer.mozilla.org)


# Module_1  New Variables

## Before 

var : The scope of var is the enclosing function scope or the global scope.
      var can be update.

```js
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

```js
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


```js
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

```js
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
    return `This car is a ${this.make} in the colour ${this.colour}`
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

```js
function calculateBill(total, tax =0.13, tip=0.15) {
  return total * tax + total * tip 
}
```

# Module_3 Templating String

```js
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

```js
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

```js
const str = `newString`

str.startsWith('new') // true

str.endsWith('ing') // true

str.includes('Str') // true

str.repeat(3) // newStringnewStringnewString
```


# Module_5 Destructuring


Destructuring allow to extract properties, key from a object, map, set into a variable.

## Destructuring Object

```js
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
  }

    // rename facebook for fb
  const { twitter, facebook: fb } = seb.links.social

  // Create a object
  const settings = { 
                    width: 300, 
                    color: 'black'
                  }

// Set default value if the settings object don't have the prop
  const { width = 100, height = 100, color = 'blue', fontSize = 25} = settings

  // Object Destructuring with variable renaming & default values
  const { w: width = 400, h: height = 500 } = { w: 800 }
```

## Destructuring Array

```js
const arr = ['Seb Blais', 233223, 'seb.com']

const [name, id, website] = arr; // Destructuring Array

const data = 'aaaaaaaaaa,bbbbbbbbb,cccccccc,ddd'

const [a,b,c,d] = data.splti(',') // Destruc String into a Array

const team = ['Seb', 'Marco', 'Mick', 'Gab', 'Frank']

const [capitain, assistant, ...marins] = team // Rest Operator
```

## Swapping variables

```js
let var1 = 'variable1', var2 = 'variable1'

[var1, var2] = [var2, var1] // Swapping variables
```

## Destructuring Functions

```js
function tipCalc({ total = 100, tip = 0.15, tax = 0.13 } = {}) {
    return total + (tip * total) + (tax * total);
  }
  
// Arguments can't be pass in a different oroder
const bill = tipCalc({ tip: 0.20, total: 200 })
```

# Module_6 Iterables & Looping

## Existing Loopin in js

```js
const cuts = ['Chuck', 'Brisket', 'Shank', 'Short Rib']

// Before ES6
// Confusing syntax
for(let i =0; i< cuts.length i++){
  console.log(cuts[i])
}
// Can't be abord the loop, can't use rthe break keyword
cuts.forEach( cut => {
  console.log(cut)
})
// loop over the prototype
for(let cut in cuts) {
  console.log(cuts[cut])
}
// New ES6 for looping
for(const cut of cuts){
  // can be break
  if(cut === 'Brisket') {
    continue
  }
  console.log(cut)
} 

// .entries() return a [key, value] 
for(const cut of cuts){
  // cut can be descructruct into a array
  if(const [i ,cut] of cuts.entries()) {
    console.log(` ${} is the ${i + 1}`)
  }
}
```

# Module_7 An Array of Array Improvements

```js
// Array.from()
const nodeList = document.querySelectorAll('.items p')
const itemsArray = Array.from(nodeList, item => {
  return item.textContent. // map() can by pass a arg. to .from()
})

//Array.of()
const str = `item1,item2,item3,item4,item5`

const newArr = Array.of(str.split(','))

// Array.find()
const posts = [
  {
    "code":"BAcyDyQwcXX",
    "caption":"Lunch #hamont",
    "likes":56,
    "id":"1161022966406956503"
  },
  {
    "code":"BAcJeJrQca9",
    "caption":"Snow! ⛄️🌨❄️ #lifewithsnickers",
    "likes":59,
    "id":"1160844458347054781",
  },
  {
    "code":"BAF_KY4wcRY",
    "caption":"Cleaned my office and mounted my recording gear overhead. Stoked for 2016!",
    "likes":79,
    "id":"1154606670337393752",
  }
]

const post  = posts.find(p => ( p.code === `BAF_KY4wcRY`))

//Array.findIndex(), return the first index of the element that respect the function condition
const postIndex = posts.findIndex( p => p.likes > 57 )

// Array.some()
const ages = [12,11,13,19]

let major = ages.some(age => (age >= 18) ) // true
let allMajor = ages.every(age => (age >= 18) ) // false
```

# Module_8 ...Spread And ..Rest

...Spread syntax allows an iterable to be expendanded where zero or more arguments are expected. It will apply a array as a individual elements.

```js
  const featured = ['Deep Dish', 'Pepperoni', 'Hawaiian']
  const specialty = ['Meatzza', 'Spicy Mama', 'Margherita']
  const friends = ['friend1','friend2','friend3']

  const pizzas = [...featured, 'veg', ...specialty]
  const fridayPizzas = [...pizzas]

  const partyMixt = [...featured, ...firends, ...specialty]


  const people = Array.from('nodeList') // Convert arrayList into array

    const deepDish = {
    pizzaName: 'Deep Dish',
    size: 'Medium',
    ingredients: ['Marinara', 'Italian Sausage', 'Dough', 'Cheese']
  };

  const arr = ['Milk', 'Flour', ...deepDish.ingredients]
  // Create a new Array 'arr' not the reference to deepDish.ingredients
```

## The ...Rest Param

  The rest parameter allows us to represent an indefinite number of arguments as an array.


  ```js
                              // take amounts has a array
function  calCurrency(rate, ...amounts){
  return amounts.map( amount => amount * rate)
}
  ```
# Module_9 Object Literal Upgrades

Object can be initialized using New Object(), Object.create(), or Literal notation.
Objects consist of properties, wich are used to describe an object. Values of object properties can either contain primitive data types or other objects.

```js
const fName = 'Seb', lName = 'Blais', age = 11, job = `Web Dev`

const person = { fName, lName, age, job} // Object Literal,
                // don't need to specify the name of the property
console.log(person)
const modal = {
  create() {  // same as create: function() {}
  },
  open: function() {}
}

const key = 'superLongPropertyName'
const value = {}
const tShirt = {
  // Computed property names
  [key]: `value`,
  [`${key}constructor`]: function() {},
  [`${key}update`]: value
}
// or bind the key/value pair out side of the Object definition
const pants = {}
pants[key]: value

const keys = ['size', 'color', 'weight']
const values = ['medium', 'grey', 70]

const shirt = {
  [keys.shift()]: values.shift(),
  [keys.shift()]: values.shift(),
  [keys.shift()]: values.shift(),
}
```

# Module_10 Promises

The Promises object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

A Promise will return a value between now and the end of time. 

A Promise can have 3 States : 

    - Pending : Initial state, neither fulfilled or rejected.
    - Fulfilled : Operation completed successfully.
    - Rejected : Operation failed.

A pending Promise can eiter be fulfilled with a return value, or rejected with a reason (Error).

js is a single threaded, bits of scripts can't run
at the same time, they have to run one after another. js share a thread with the same queue as painting, updating styles and event handling. One of the activity will dealy the others one.

asynchronous : In programming, asynchronous events are those occuring independently of the main program flow.

```js
// Fetching data using fetch that implement a Promise
const MTLWIFI = `http://donnees.ville.montreal.qc.ca/dataset/08f12925-c6b2-405f-bd01-744674d97bff/resource/11860f23-30c9-4221-ae00-a39af4684210/download/mtlwifi_bornes.geojson`
const response = fetch(MTLWIFI)
                    .then(data => data.json()) // convert into desired format
                    .then(data => { console.log(data) })
                    .catch((err) => {
                      console.error(err)
  })
```
  Build my own Promises
```js
const p = new Promise((resolve, reject) => {
  // resolve(`Seb is Cool`)
  setTimeout(() => {
    reject(Error (`Err Seb is not that Cool`))
  }, 1000)
}) 

p.then(data => {
    console.log(data)
}).catch( err => {
    console.error(err)
})
```

Promise.all(iterable) method returns a single Promise that resolve when all of the promises in the iterable argument have resolved or when the iterable argument contains no promises. 

```js
const p1 = new Promise((resolve) => { 
    setTimeout( () => { 
      resolve( { temp: 20, location: `Montreal` } )
    }, 2000)
})
const p2 = new Promise((resolve) => { 
    setTimeout( () => { 
      resolve( { text: `What a nice day`, location: `Montreal` } )
    }, 500)
})

Promise.all([p1,p2]).then( responses => {
  const [wheater, tweet] = responses
  console.log( `responses : `, wheater, responses, tweet)
})
```
# Module_11 Symbol

A symbol value may be used as an identifier, but symbol are not enumerabal it is not possible to loop over them.
Every symbol value returned from Symbol() is unique.

Actual data type : Number, String, Object, boolean, Null, undefined and new ES6 Symbol


```js
const sym1 = Symbol()
const sym2 = Symbol(2)
const symStr = Symbol('foo') // the param is a Descriptor

const classRoom = {
  [Symbol(`Frederik`)]: {grade: 100, gender: `male`},
  [Symbol(`Frederik`)]: {grade: 78, gender: `female`}
}

const syms = Object.getOwnPropertySymbols(classRoom)
console.log(syms)
  // Display the values sof the ClassRoom
const data = syms.map(sum => classRoom[sym])
console.log(data)
```

# Module_12 Code Quality with EsLint

  Use EsLint

# Module_13 Javasript Modules and Using npm

A Javascript code module is simply some JS code located in a registered location.

The export statement allow to export functions, objects, primitive values, from a module. 
```js
// file config.js 
export const CONSTANT = 234242
export const str = `sfsdfsdfdsfsdf`
export newFunc function() { return true }
```
The import statement allw to import bindings which are exported by another module.
```js
// app.js
import { _ } from 'lodash'
import insane from 'insane'

import { apiKey as key,  old, dog } from './src/config'

```


# Module_14 ES6 Tooling

# Module_15 Classes

# Module_16 Generators

# Module_17 Proxies

# Module_18 Sets and WeakSets

# Module_19 Map and Weak Map

# Module_20 Async + Await Flow Control

# Module_21 ES7, ES8 + Beyond


# Glossary

```js

```

arguments : Aguments is Array-like object corresponding to the arguments passed to a function.

arrow function : () => {}

Array.from() : The Array.from() method creates a new Array instance from an array-like or iterable object.

Array.find() : The find() method returns the value of the first element in the array that satisfies the provided testing function, otherwise undefined is returned.


Array.findIndex() : The findIndex() method returns the index of the first element in the array that satisfies the provided testing function, otherwise -1 is returned.

Array.of() : The Array.of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.

asynchronous : In programming, asynchronous events are those occuring independently of the main program flow.
              Ex :Ajax call, can retrieve data from server asynchronously in the background without stoping the main thread of the browser.  

const : Variables constante

debugger : The debugger statement invokes any available debugging functionality, such
          as setting a breakpoint. If no debugging functionality is available, this
          statement has no effect.

entries() : Array.prototype.entries() : The entries() method returns a new Array
            Iterator object that contains the key/value pairs for each index in the array.

fetch() :  This method takes one mandatory argument, the path of the resource to fetch. It returns a Promise that resolve to a Response.


let :  
