let result =0;
let number1 = parseInt( prompt("enter your first number :"))
let operator = prompt("choose an operatin to perform +-/*")
let number2 = parseInt( prompt("enter your second number :"))
if(operator == '+'){
    result = number1 + number2;
    alert(result)
}
else if(operator == '-'){
    result = number1 - number2;
    alert(result)
}
else if(operator == '/'){
    result = number1 / number2;
    alert(result)
}
else{
    result = number1 * number2;
    alert(result)
}

