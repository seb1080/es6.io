

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

let fName = 'Sebastien', lName = 'Blais-Fernandez'

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

// Spread Operator

























