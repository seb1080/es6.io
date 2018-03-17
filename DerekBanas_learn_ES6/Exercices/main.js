

// Block-Scoped Variables (let)

// Let have a different scope then var,
// var is global vs. let that is scoped to the {}

let x = 20
if(true) {
let x = 10
document.write("x = " + x + "<br />")
}
document.write("x = " + x + "<br />")


// Constants  (const)
// The const is scoped

const PI = 3.14159
if(true) {
  const PI = 213234234
  document.write("PI = " + PI + "<br />")
  }
  document.write("PI = " + PI + "<br />")


// ---------- DATA TYPES ----------

// You still don't declare a data type, but instead
// the value defined defines the type being : 
// Boolean, Number, String, Object, Symbol

document.write(typeof true + "<br />")
document.write(typeof 3.14 + "<br />")
document.write(typeof "string" + "<br />")
document.write(typeof Symbol() + "<br />")
document.write(typeof {a:1} + "<br />")
document.write(typeof [1,2,3] + "<br />")
document.write(typeof undefined + "<br />")

// ---------- Strings ----------

// Template literals

let fName = 'Sebastien ', lName = 'Blais-Fernandez'

document.write(`${fName} ${lName}` + "<br />")

let n1 = 1, n2 = 123

document.write(`n1 * n2 = ${n1 * n2}` + "<br />")

// Template literals can be use to modify output using function

function doMath(strings, ...values){
  if(strings[0] == 'Add'){
    document.write(`${values[0]} + ${values[1]} = ${values[0] + values[1]} <br />`)
  } else if(strings[0] == 'Sub') {
    document.write(`${values[0]} - ${values[1]} = ${values[0] - values[1]} <br />`)
  }
}
// Function call
doMath`Add${10} ${20}`
doMath`Sub${45} ${20}`

// Iterate over characters
let longString = 'this is a long string'
for(let c of longString){
  document.write(`${c} <br />`)
}

// Repeat a string
document.write("Hello ".repeat(3) + "<br />")

// Does it start with
document.write(fName.startsWith("S") + "<br />")

// Does it end with
document.write(fName.endsWith("z") + "<br />")

// Does it include
document.write(fName.includes("e") + "<br />")

// Multiple strings
let  multipleStrings = "First line \
                        a second line \
                        string"
let easyMultiline = `Frist line
                      a second
                      line string`

document.write(multipleStrings + "<br />")

// String Interpolation
document.write(`${easyMultiline}` + "<br />")

// ---------- FUNCTIONS ----------

// Default Parameter Values
function getSum(num1 = 1, num2 = 2){
  document.write(`${num1} + ${num1} = ${num1 + num2}` + "<br />")
}
getSum(23, 34)

// arguments[], manipulate the value pashttp://es6-features.org/sed
function getDelta(num1 = 1, num2 = 2){
  document.write(`${arguments[1]} - ${arguments[0]} = ${arguments[1] - arguments[0]}` + "<br />")
}
getDelta(12, 34)

// Rest Parameter

function getSumMore(...array) {
  let sum = 0
  for(let i= 0, len = array.length; i < len; i++){
    sum += array[i]
  }
  document.write(`The sum is ${sum} <br />`)
}

getSumMore(1,2,3,4,5,6,7,8,9)

let longArr = [12,23,34,45,56,67,78,89,90,56,34,23,46,68,790,456,2]
getSumMore(...longArr)

// Spread Operator
// Diconstruct a array or a string into a array
let params = ['hello', 'world', true, 4]
let other = [1,2,3, ...params]
function f (a, b, ...array) {
  return (a + b) * array.length
} 
document.write(`f(10,11, ...array) return : ${f(10,11, ...params)} <br />`)

let str = 'foobar'
let foobarArray = [...str]
document.write(`foobarArray : ${foobarArray} <br />`)


// Arrow functions
let getDifference = (num1, num2) => num2 - num1

document.write(`The difference is ${getDifference(23, 78)} <br />`)

let multiple = (n1, n2) => {
  let product = n1 * n2
  return product
}
document.write(`The product of a multiplication
                is ${multiple(2, 3)} <br />`)

// Arraw functions can be use with filter(), map() 
let valArray = [1,2,3,4,5,6,7,8,8,65]

let sumVal = valArray.reduce((a,b) => a + b)
document.write(`result is ${sumVal} <br />`)


let evens = valArray.filter( v  => v % 2 == 0 )
document.write(`evens is ${evens} <br />`)

let doubles = valArray.map( v => v*2)
document.write(`doubles is ${doubles} <br />`)

// passing a function into a map()
let multiplyBeThree = (item) => item*3

let triple = valArray.map(multiplyBeThree)
document.write(`triple is ${triple} <br />`)


// ---------- Array ------------
document.write(`<br /> ---------- Array ------------`)
document.write(`<br />`)

let arr1 = Array.of(1,2,3,4), arr2 = Array.from('longString')

let arrDouble = Array.from(arr1, (v) => v * 2)

document.write(`<br /> arrDouble is ${arrDouble}  <br />`)

for(let val of arrDouble){
document.write(`Array val is ${val}  <br />`)
}

// ---------- Set ------------
//  Set objects let you store unique values a any type

document.write(`<br /> ---------- Set ------------`)
document.write(`<br />`)

let randSet = new Set()
randSet.add(10)
randSet.add('word')

// check if set contain the number 10
document.write(`Has 10 :  ${randSet.has(10)}  <br />`)

// Get size of Set
document.write(`Set Size :  ${randSet.size}  <br />`)

// Delete number 10 from set
randSet.delete(10)

// ---------- Map ------------
document.write(`<br /> ---------- Map ------------`)
document.write(`<br />`)

let randMap = new Map()

randMap.set('key1', 'randVal1')
randMap.set('key2', 'randVal2')
randMap.set('key3', 'randVal3')
randMap.set('key4', 10)


// Get map size
document.write(`get randmMap Size :  ${randMap.size}  <br />`)

// Get map value
document.write(`key1 :  ${randMap.get('key1')}  <br />`)
document.write(`key4 :  ${randMap.get('key4')}  <br />`)

// Iterate Map

randMap.forEach((val, key) => {
  document.write(`${key} : ${val} <br />`)
})

// ---------- Promises ------------
document.write(`<br /> ---------- Promises ------------`)
document.write(`<br />`)
// Promises define code that is to be executed later,
// promises either succed or fail once
// They either are fulfilled, rejected, pending or settled

let p1 = Promise.resolve('Resolve promise p1')

p1.then( (res) => document.write( ` ${res} `) )


// let p2 = new Promise(  (resolve, reject) => {
//   setTimeout( () => resolve('Resolve Me'), 2000)
// }) 
// p2.then(res => document.write(` ${res} <br />`))

let p3 = new Promise(function(resolve, reject){
  if (randVal == 6){
    resolve("Good Value");
  } else {
    reject("Bad Value");
  }
})

p3.then((val) => document.write(`${val}<br />`),
        (err) => document.write(`${err}<br />`))

// A catch can be add th handle erros
let p4 = new Promise((resolve, reject) => {
  if (randVal <= 17){
    throw new Error("Can't Vote"); // Same as a Reject
  } else {
    resolve("Can Vote");
  }
})
  
p4.then((val) => document.write(`${val}<br />`))
  .catch((err) => document.write(`${err.message}<br />`))




document.write(`<br />`)
// ---------- OBJECTS ----------
document.write(`<br /> ---------- Object ------------`)
document.write(`<br />`)

function createAnimal(name, owner){
  return {
    // Properties
    name,
    owner,
    // Create a method
    getInfo(){
      return `${this.name} is owned by ${this.owner}`
    },
    // Objects can contain other objects
  address: {
    street: '123 Main St',
    city: 'Pittsburgh'
  }
  }
}

let spot = createAnimal('Spot', fName + lName)

document.write(`${spot.getInfo()}<br />`)

document.write(`${spot.name} is at ${spot.address.street}<br />`)

document.write(`${Object.getOwnPropertyNames(spot).join(" ")} <br />`)

// Storing Value from Object with destructoring
let { name, owner } = spot
document.write(`Name : ${name}<br />`)

// Get the inner class value
let { address } = spot
document.write(`Address : ${address.street}<br />`)

// You can destructor arrays as well
let favNums = [2.718, .5772, 4.6692]
let [,,chaos] = favNums
document.write(`Chaos : ${chaos}<br />`)

// Rest can be use to grab specific index item in a array
let [, ...last2] = favNums
document.write(`2nd Num : ${last2[0]}<br />`)


// ---------- CLASSES ----------

class Mammal{
  constructor(name){
    this._name = name
  } 
  // Getter
  get name() {
    return this._name
  } 
  // Setter
  set name(name){
    this._name = name
  } 
  // Static Mammal creator
  static makeMammal(name){
    return new Mammal(name)
  } 
  getInfo(){
    return `${this.name} is a mammal`
  } 
}

// Create an object
let monkey = new Mammal("Fred")

// Change name
monkey.name = "Mark"

// Call getter
document.write(`Mammal : ${monkey.name}<br />`)

// Create Mammal using static function
let chipmunk = Mammal.makeMammal("Chipper")
document.write(`Mammal 2 : ${chipmunk.name}<br />`)

// You can inherit properties and methods with extends
class Marsupial extends Mammal{
  constructor(name, hasPouch){
    // Call the super class constructor
    super(name)
    this._hasPouch = hasPouch
  } 
  get hasPouch() {
    return this._hasPouch
  } 
  set hasPouch(hasPouch){
    this._hasPouch = hasPouch
  } 
  // You can override methods
  getInfo(){
    return `${this.name} is a marsupial`
  } 
}

let kangaroo = new Marsupial("Paul", true)
document.write(`It is ${kangaroo.hasPouch} that ${kangaroo.name} has a pouch<br />`)

// Test overridden method
document.write(`${chipmunk.getInfo()}<br />`)
document.write(`${kangaroo.getInfo()}<br />`)

// You can dynamically inherit from Classes
function getClass(classType){
  if (classType == 1) {
    return Mammal
  } else {
    return Marsupial
  }
} 
class Koala extends getClass(2){
  constructor(name){
    super(name)
  }
}

let carl = new Koala("Carl")
document.write(`${carl.getInfo()}<br />`)

// ---------- SYMBOLS ----------

let capital = Symbol('The main city of each country')

let ontario = {}
ontario[capital] = 'Ottawa'
document.write(`Capital of Canada is ${ontario[capital]}<br />`)

document.write(`Symbol Capital => ${capital.toString()}<br />`)

let employNum = Symbol.for("Employee Number")

let bobSmith = {}
bobSmith[employNum] = 10

let sam = {}
sam[employNum] = 23

document.write(`Bob emplNum is : ${bobSmith[employNum]}<br />`)
document.write(`Sam emplNum is : ${sam[employNum]}<br />`)











