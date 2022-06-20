function returnPage() {
    window.history.back()
}

let lastExercise
function changeExercise(value) {
    if (lastExercise) {
        document.getElementById(lastExercise).hidden = true
    }
    else {
        document.getElementById("exercise1").hidden = true
    }
    document.getElementById(value).hidden = false
    lastExercise = value
}

// Ex 01
function verifyHundred() {
    value = Number(document.getElementById("ex01-number").value)

    if (value >= 100 && value <= 999) {
        document.getElementById("ex01-result").innerText = `O número da centena é ${String(value)[0]}.`
    }
    else {
        document.getElementById("ex01-result").innerText = "Número inválido."
    }
}

// Ex 02
function sumNumbers() {
    let value = document.getElementById("ex02-number").value
    let sum = 0

    if (Number(value) >= 0) {
        for (i = 0; i < value.length; i++) {
            sum += Number(value[i])
        }

        document.getElementById("ex02-result").innerText = `O resultado é ${sum}.`
    }
    else {
        document.getElementById("ex02-result").innerText = `O valor deve ser um número positivo.`
    }
}

// Ex 03
function orderNames() {
    let names = document.getElementById("ex03-names").value
    names = names.split(/,\s+/)

    let resultText = ``

    if (names.length == 3) {
        for (i = 0; i <= 2; i++) {
            if (names[i + 1] < names[i]) {
                let aux = names[i]
                names[i] = names[i + 1]
                names[i + 1] = aux
                i = -1
            }
        }
        for (i = 0; i < 3; i++) {
            if (i < 2) {
                resultText += `${names[i]}, `
            }
            else {
                resultText += `e ${names[i]}`
            }
        }
        document.getElementById("ex03-result").innerText = `O resultado dos nomes ordenados é ${resultText}.`
    }
}

// Ex 04
function showFibonacci() {
    let n = Number(document.getElementById("ex04-number").value)
    let fibonacci = []
    let resultText = ``
    if (n > 0) {
        for (i = 0; i < n; i++) {
            if (i <= 1) {
                fibonacci.push(1)
            }
            else {
                fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2])
            }

            if (n == 1) {
                resultText += `${fibonacci[i]}`
            }
            else if (n == 2 && i == 0) {
                resultText += `${fibonacci[i]} `
            }
            else if (i < n - 1 && n != 2) {
                resultText += `${fibonacci[i]}, `
            }
            else {
                resultText += `e ${fibonacci[i]}`
            }
        }


        document.getElementById("ex04-result").innerText = `O resultado da sequência fibonacci é ${resultText}.`
    }
    else {
        document.getElementById("ex04-result").innerText = `Valor Inválido.`
    }
}

// Ex 05
function getInterval() {
    let min = Number(document.getElementById("ex05-value1").value)
    let max = Number(document.getElementById("ex05-value2").value)
    let prime = []
    let resultText = ``

    if(max - min >= 0 && max >=2) {
        for (i = min; i <= max; i++) {
            if (i > 1) {
                if (isPrime(i)) {
                    prime.push(i)
                }
            }
        }
        for (i = 0; i < prime.length; i++) {
            if (i < prime.length-1) {
                resultText += `${prime[i]}, `
            }
            else {
                resultText += prime[i]
            }
        }
    
        document.getElementById("ex05-result").innerText = `O resultado é a sequencia dos primos ${resultText}.`
    }
    else {
        document.getElementById("ex05-result").innerText = `Valores inválidos.`
    }
}

function isPrime(n) {
    for (d = 2; d < n; d++) {
        if (n % d == 0) {
            return false
        }
    }
    return true
}