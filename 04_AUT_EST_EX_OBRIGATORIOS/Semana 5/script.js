function returnPage() {
    window.history.back()
}

let lastExercise
function changeExercise(value) {
    if(lastExercise) {
        document.getElementById(lastExercise).hidden = true
    }
    else {
        document.getElementById("exercise1").hidden = true
    }
    document.getElementById(value).hidden = false
    lastExercise = value
}

// Ex 01
function calculate() {
    let value1 = Number(document.getElementById("ex01-value1").value)
    let value2 = Number(document.getElementById("ex01-value2").value)
    let operator = document.getElementById("operators").value
    let result
    
    switch (operator) {
        case "+":
            result = value1 + value2
            break;
    
        case "-":
            result = value1 - value2
            break
        case "*":
            result = value1 * value2
            break
        case "/":
            result = value1 / value2
            break
        case "//":
            result = Math.floor(value1/value2)
            break
        case "%":
            result = value1 % value2
            break
        default:
            break;
    }

    document.getElementById("ex01-result").innerText = `O resultado é: ${result}`
}

function generateBills(){
    const result = document.getElementById("ex02-result")
    result.innerHTML = ""
    let bills100
    let bills50
    let bills20
    let bills10
    let bills5
    let bills2
    let bills1
    let remaining = document.getElementById("ex02-value").value
    console.log(remaining)
    
    if(remaining >= 100) {
        bills100 = parseInt(remaining/100)
        remaining = remaining%100
        let divBills100 = document.createElement("div")
        divBills100.setAttribute("id", "ex02-bills100")
        result.appendChild(divBills100)
        if(bills100 > 1) {
            document.getElementById("ex02-bills100").innerHTML = `Você recebeu ${bills100} notas de 100 reais.`
        }
        else {
            document.getElementById("ex02-bills100").innerHTML = `Você recebeu ${bills100} nota de 100 reais.`
        }
    }
    if(remaining >= 50) {
        bills50 = parseInt(remaining/50)
        remaining = remaining%50
        let divBills50 = document.createElement("div")
        divBills50.setAttribute("id", "ex02-bills50")
        result.appendChild(divBills50)
        if(bills50 > 1) {
            document.getElementById("ex02-bills50").innerHTML = `Você recebeu ${bills50} notas de 50 reais.`
        }
        else {
            document.getElementById("ex02-bills50").innerHTML = `Você recebeu ${bills50} nota de 50 reais.`
        }
    }
    if(remaining >= 20) {
        bills20 = parseInt(remaining/20)
        remaining = remaining%20
        let divBills20 = document.createElement("div")
        divBills20.setAttribute("id", "ex02-bills20")
        result.appendChild(divBills20)
        if(bills20 > 1) {
            document.getElementById("ex02-bills20").innerHTML = `Você recebeu ${bills20} notas de 20 reais.`
        }
        else {
            document.getElementById("ex02-bills20").innerHTML = `Você recebeu ${bills20} nota de 20 reais.`
        }
    }
    if(remaining >= 10) {
        bills10 = parseInt(remaining/10)
        remaining = remaining%10
        let divBills10 = document.createElement("div")
        divBills10.setAttribute("id", "ex02-bills10")
        result.appendChild(divBills10)
        if(bills10 > 1) {
            document.getElementById("ex02-bills10").innerHTML = `Você recebeu ${bills10} notas de 10 reais.`
        }
        else {
            document.getElementById("ex02-bills10").innerHTML = `Você recebeu ${bills10} nota de 10 reais.`
        }
    }
    if(remaining >= 5) {
        bills5 = parseInt(remaining/5)
        remaining = remaining%5
        let divBills5 = document.createElement("div")
        divBills5.setAttribute("id", "ex02-bills5")
        result.appendChild(divBills5)
        if(bills5 > 1) {
            document.getElementById("ex02-bills5").innerHTML = `Você recebeu ${bills5} notas de 5 reais.`
        }
        else {
            document.getElementById("ex02-bills5").innerHTML = `Você recebeu ${bills5} nota de 5 reais.`
        }
    }
    if(remaining >= 2) {
        bills2 = parseInt(remaining/2)
        remaining = remaining%2
        let divBills2 = document.createElement("div")
        divBills2.setAttribute("id", "ex02-bills2")
        result.appendChild(divBills2)
        if(bills2 > 1) {
            document.getElementById("ex02-bills2").innerHTML = `Você recebeu ${bills2} notas de 2 reais.`
        }
        else {
            document.getElementById("ex02-bills2").innerHTML = `Você recebeu ${bills2} nota de 2 reais.`
        }
    }
    if(remaining >= 1) {
        bills1 = parseInt(remaining/1)
        remaining = remaining%1
        let divBills1 = document.createElement("div")
        divBills1.setAttribute("id", "ex02-bills1")
        result.appendChild(divBills1)
        if(bills1 > 1) {
            document.getElementById("ex02-bills1").innerHTML = `Você recebeu ${bills1} notas de 1 reais.`
        }
        else {
            document.getElementById("ex02-bills1").innerHTML = `Você recebeu ${bills1} nota de 1 reais.`
        }
    }
}

// Ex03
function findValue() {
    let string = document.getElementById("ex03-value1").value
    let keyValue = Number(document.getElementById("ex03-value2").value)
    let numbers = []
    let number = ''

    for(i=0; i < string.length; i++) {
        if(string[i] != ',') {
            if(string[i] != ' ') {
                number += string[i]
                if(i == string.length - 1) {
                    numbers.push(Number(number))
                }
            }
        }
        else {
            numbers.push(Number(number))
            number = ''
        }
    }

    for(i=0; i < numbers.length; i++) {
        for(j=0; j < numbers.length - 1; j++) {
            if(numbers[j] >= numbers[j+1]) {
                let temp = numbers[j]
                numbers[j] = numbers[j+1]
                numbers[j+1] = temp
            }
        }
    }
    let newString = []

    numbers.forEach((number, index) => {
        if(index != 0) {
            newString.push(' '+ number)
        }
        else {
            newString.push(number)
        }
    });
    document.getElementById("ex03-result").innerHTML = `
        <div>Lista ordanada: ${newString}</div>
        <div>O valor foco é o ${numbers.indexOf(keyValue)+1}º número.</div>
    `
}