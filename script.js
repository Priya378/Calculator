let prevInput = '0'
let calculationOperator = ''
let currentInput = '0'
//Displaying Numbers on click
const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentInput)
    })
})
//Function definitions to input numbers and update screen
const calculatorScreen = document.querySelector('.calculator_screen')
const updateScreen = (number) => {
    calculatorScreen.value = number
}
const inputNumber = (number) => {
    if(currentInput === '0')
    {
        currentInput=number
    }
    else{
        currentInput += number
    }
}
//Event to consider float number as input
const decimalf = document.querySelector('.decimal')
decimalf.addEventListener("click",()=>{
    currentInput=currentInput+"."
    updateScreen(currentInput)

})
//Taking operator as input when clicked
const operators = document.querySelectorAll(".operator")
operators.forEach((operator)=>{
    operator.addEventListener("click",(event)=>
    {
        inputOperator(event.target.value)
    })
})
//Function definition to input operator
const inputOperator = (operator)=>
{
    prevInput = currentInput
    calculationOperator = operator
    currentInput = '0'
}
//Calculating result and updating screen
const equalSign = document.querySelector('.equal_sign')
equalSign.addEventListener("click",()=>{
    calculate()
    updateScreen(currentInput)
    prevInput = '0'
    calculationOperator = ''
    currentInput = '0'  
})
//Function definition to calculate result
const calculate=()=>{
    let result=0
    switch(calculationOperator){
        case '+':
            result=parseInt(prevInput) + parseInt(currentInput)
            break
        case '-':
            result=prevInput - currentInput
            break
        case '*':
            result=prevInput * currentInput
            break
        case '/':
            result=prevInput / currentInput
            break
        default:
            return
        
    }
    currentInput=result.toString()
    calculationOperator=''
}
//Clearing screen
const clear = document.querySelector('.all_clear')
clear.addEventListener("click",()=>{
    prevInput = '0'
    calculationOperator = ''
    currentInput = '0'
    updateScreen(currentInput)

})
//Calculating percentage
const percent = document.querySelector('.percentage')
percent.addEventListener("click",()=>{
    let result=parseFloat(currentInput)/100
    currentInput=result.toString()
    updateScreen(currentInput)
    prevInput = '0'
    calculationOperator = ''
    currentInput = '0'
})


