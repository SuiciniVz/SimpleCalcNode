const getInputsUser = require('./user/input-user.js')
const functions = require('./functions/allFunctions.js')

function main() {
  let inputs = getInputsUser()

  let optionOfCalc = inputs.optionOfCalc
  let num1 = inputs.num1
  let num2 = inputs.num2
  
  let resu = functions[optionOfCalc](num1,num2)
  resu = parseFloat(resu.toFixed(2))

  console.clear()
  console.log(
    '\n=======================' +
    '\n Op: ' + optionOfCalc +
    '\n Numero 1: ' + num1 +
    '\n Numero 2: ' + num2 +
    '\n Resultado: ' + resu +
    '\n=======================' 
  )
}

while(true) 
  main()