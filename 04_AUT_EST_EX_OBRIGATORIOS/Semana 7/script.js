function goTo(link) {
    window.location.href = link
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
function increaseQty() {
    value = Number(document.getElementById("ex01-qty").value) + 1
    document.getElementById("ex01-qty").value = value
}

function decreaseQty() {
    value = Number(document.getElementById("ex01-qty").value) - 1
    document.getElementById("ex01-qty").value = value
}


// Ex 02
function changeValues() {
    let input1Value = document.getElementById("ex02-input1").value
    let input2Value = document.getElementById("ex02-input2").value
    
    document.getElementById("ex02-input1").value = input2Value
    document.getElementById("ex02-input2").value = input1Value
}

// Ex 03
function verifyFormat(value) {
    if(value[0] == "(" && value[3] == ")" && value.length == 14 && value[9] == "-") {
        let values = value.replace(/[-+()\s]/g,"")
        if(verifyNumbers(values)){
            return document.getElementById("ex03-format-result").innerText = `O número está no formato correto!`
        }
    }
    document.getElementById("ex03-format-result").innerText = `Formato inserido está incorreto!`
}
function verifyNumbers(values) {
    let isNumber = true
    values = Number(values)
    for(i=0; i < values.length; i++) {
        if(typeof values[i] !== "number"){
            isNumber = false
        }
    }
    return isNumber
}

// Ex 04
function flyPrice() {
    let peopleQty = Number(document.getElementById("ex04-qty").value)
    let flyType = document.getElementById("ex04-period").value
    console.log(flyType)
    let price

    if(peopleQty) {
        if(flyType == "diurno") {
            price = peopleQty * 200
            if(peopleQty > 50) {
                price -= price * 0.4
                document.getElementById("ex04-result").innerText = `A viagem irá custar ${price} reais, aplicado desconto de 40%.`
            }
            else {
                document.getElementById("ex04-result").innerText = `A viagem irá custar ${price} reais.`
            }
        }
        else {
            price = peopleQty * 100
            if(peopleQty > 50) {
                price -= price * 0.2 
                document.getElementById("ex04-result").innerText = `A viagem irá custar ${price} reais, aplicado desconto de 20%.`
            }
            else {
                document.getElementById("ex04-result").innerText = `A viagem irá custar ${price} reais.`
            }
        }
    }
}

// Ex 05
function generateInputs() {
    document.getElementById("ex05-inputs-section").innerHTML = ''
    let studentsQty = Number(document.getElementById("ex05-qty").value)
    let inputs = []

    if(studentsQty) {
        for(i=1; i <= studentsQty; i++) {
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

    for(i=1; i <= studentsQty; i++) {
        console.log(i)
        let grade = Number(document.getElementById(`ex05-student${i}-trial`).value)
        let homework = Number(document.getElementById(`ex05-student${i}-homework`).value)
        let average = (grade*2 + homework*3)/(2+3)
        studentAverage.push(average)

        if(!lowestTestGrade || grade < lowestTestGrade) {
            lowestTestGrade = grade
        }
        if(!highestTestGrade || grade > highestTestGrade) {
            highestTestGrade = grade
        }

        if(!lowestHomeworkGrade || homework < lowestHomeworkGrade) {
            lowestHomeworkGrade = homework
        }
        if(!highestHomeworkGrade || homework > highestHomeworkGrade) {
            highestHomeworkGrade = homework
        }

        studentsAverage += average
        testGradeAverage += grade
        homeworkAverage += homework
    }
    studentsAverage = studentsAverage/studentsQty
    testGradeAverage = testGradeAverage/studentsQty
    homeworkAverage = homeworkAverage/studentsQty

    for(i=0; i < studentsQty; i++) {
        result += `
            <div class="result-style">
                Media do estudante ${i+1}: ${studentAverage[i]}
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