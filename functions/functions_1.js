// function expression or function anonymous

//parâmetros or (parameters)
let total = 0
const sum = function(a, b){
    let total = a + b
    return total
}

let number1 = 10
let number2 = 20
sum(number1, number2) // argumentos or arguments

//console.log(`O número 1 é ${number1}`)
//console.log(`O número 2 é ${number2}`)
console.log(`O soma entre eles é ${sum(number1, number2)}`)
console.log(total)
