const getInputsUser = require('./user/input-user.js')
const functions = require('./functions/allFunctions.js')

function main() {
  let inputs = getInputsUser()
  
  let optionOfCalc = inputs.optionOfCalc
  let num1 = inputs.num1
  let num2 = inputs.num2

  let resu = functions[optionOfCalc](num1,num2)
  console.log(resu)
}

while(true) 
  main()