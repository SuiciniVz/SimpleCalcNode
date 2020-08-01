const readline = require('readline-sync')

const getUserInputs = () => {
  const userInputs = {
    optionOfCalc: askOptionOfCalc(),
    num1: askForNumberAndReturnIt(),
    num2: askForNumberAndReturnIt(),
  }
  return userInputs
}

function askForNumberAndReturnIt() {

  return Number(readline.question('Digite um numero: '))
}

function askOptionOfCalc() {
  const options = ['somar', 'subtrair', 'multiplicar', 'dividir']
  const selectedOptionIndex = readline.keyInSelect(options, 'Escolha uma opcao')
  const selectedOptionText = options[selectedOptionIndex]
  
  if (selectedOptionIndex === -1)
    process.exit(
      console.log("Fechando calculadora")
    )

  return selectedOptionText
}

module.exports = getUserInputs