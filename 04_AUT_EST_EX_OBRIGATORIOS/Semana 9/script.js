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
}

// Ex 05
function generateInputs() {
    document.getElementById("ex05-inputs-section").innerHTML = ''
    let studentsQty = Number(document.getElementById("ex05-qty").value)
    let inputs = []

    if (studentsQty) {
        for (i = 1; i <= studentsQty; i++) {
            inputs.push(
                `
                    <div class="input-container">
                        <label for="ex05-student${i}">
                            Nota Prova do Aluno ${i}
                        </label>
                        <input id="ex05-student${i}-trial" 
                            type="text" 
                            class="input-style"  
                        >
                        <label for="ex05-student${i}-homework">
                            Nota Trabalho do Aluno ${i}
                        </label>
                        <input id="ex05-student${i}-homework" 
                            type="text" 
                            class="input-style"  
                        >
                    </div>
                `
            )
        }
        inputs.forEach(input => {
            document.getElementById("ex05-inputs-section").innerHTML += input
        })
        document.getElementById("ex05-inputs-section").innerHTML += `<button id="ex05-button" onclick="calculateGrades()">Calcular</button>`
    }
}

function calculateGrades() {
    let studentsQty = Number(document.getElementById("ex05-qty").value)
    let studentAverage = []
    let studentsAverage = 0
    let testGradeAverage = 0
    let homeworkAverage = 0
    let lowestTestGrade = 0
    let highestTestGrade = 0
    let lowestHomeworkGrade = 0
    let highestHomeworkGrade = 0
    let result = ''

    for (i = 1; i <= studentsQty; i++) {
        console.log(i)
        let grade = Number(document.getElementById(`ex05-student${i}-trial`).value)
        let homework = Number(document.getElementById(`ex05-student${i}-homework`).value)
        let average = (grade * 2 + homework * 3) / (2 + 3)
        studentAverage.push(average)

        if (!lowestTestGrade || grade < lowestTestGrade) {
            lowestTestGrade = grade
        }
        if (!highestTestGrade || grade > highestTestGrade) {
            highestTestGrade = grade
        }

        if (!lowestHomeworkGrade || homework < lowestHomeworkGrade) {
            lowestHomeworkGrade = homework
        }
        if (!highestHomeworkGrade || homework > highestHomeworkGrade) {
            highestHomeworkGrade = homework
        }

        studentsAverage += average
        testGradeAverage += grade
        homeworkAverage += homework
    }
    studentsAverage = studentsAverage / studentsQty
    testGradeAverage = testGradeAverage / studentsQty
    homeworkAverage = homeworkAverage / studentsQty

    for (i = 0; i < studentsQty; i++) {
        result += `
            <div class="result-style">
                Media do estudante ${i + 1}: ${studentAverage[i]}
            </div>
        `
    }
    document.getElementById("ex05-result").innerHTML = result

    document.getElementById("ex05-result").innerHTML += `
        <div class="result-style">
            Media dos estudantes: ${studentsAverage}
        </div>
        <div class="result-style">
            Media das provas: ${testGradeAverage}
        </div>
        <div class="result-style">
            Media das trabalhos: ${homeworkAverage}
        </div>
        </div>
        <div class="result-style">
            Menor nota de prova: ${lowestTestGrade}
        </div>
        <div class="result-style">
            Menor nota de trabalho: ${lowestHomeworkGrade}
        </div>
        <div class="result-style">
            Maior nota de prova: ${highestTestGrade}
        </div>
        <div class="result-style">
            Maior nota de trabalho: ${highestHomeworkGrade}
        </div>

    `
}