import { sum, kebabCase } from 'npm:lodash'
import { calculTip } from './costumModule'

console.log(kebabCase('Seb is becoming a better Web Dev'))

const amount = 14
const taxRate = 0.13

document.write( calculTip(amount, taxRate) )