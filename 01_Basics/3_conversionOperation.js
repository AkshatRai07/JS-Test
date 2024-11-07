let score = "33"

// console.log(typeof score)
// console.log(typeof(score))

let valueInNumber = Number(score)

// console.log(typeof(valueInNumber))
// console.log(valueInNumber)

score = "33abc"

valueInNumber = Number(score)

// console.log(typeof(valueInNumber))
// console.log(valueInNumber)

score = null

valueInNumber = Number(score)

// console.log(typeof(valueInNumber))
// console.log(valueInNumber)

score = true

valueInNumber = Number(score)

// console.log(typeof(valueInNumber))
// console.log(valueInNumber)  //false --> 0

let val = NaN
let boolVal = Boolean(val)

// console.log(typeof(boolVal))
// console.log(boolVal)

// nan, empty string, 0, null are false in boolean

// console.log(2/3)

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 + 2)
// console.log("1" + 2 + "2")
// console.log(1 + 2 + "2")
// console.log(true)
// console.log(+true)
// console.log(+"")
