console.log("Exercise 2...: check grading system")


const students = {
    moha: 56,
    ahmed: 74,
    Gedi: 98,
    Ali: 26,
    Farah: 48,
    Jimale: 88,
    Garat: 10,
}

const grades = ["A", "B", "C", "D", "E"]

function checkGrading() {
    for (std in students) {
        let score = students[std]
        if (score >= 90) {
            console.log(`${std} : ${score} has ${grades[0]}, Congratulations , You won!!! `)
        } else if (score >= 80 ) {
            console.log(`${std} : ${score} has ${grades[1]}`)

        }else if (score >= 70 ) {
            console.log(`${std} : ${score} has ${grades[2]}`)

        }else if (score >= 60 ) {
            console.log(`${std} : ${score} has ${grades[3]}`)

        }else if (score >= 50 ) {
            console.log(`${std} : ${score} has ${grades[4]}`)

        } else {
            console.log(`${std} : ${score} has failed`)
        }

    

    }
    
    

    
}


checkGrading()