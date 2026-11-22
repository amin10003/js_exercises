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
        if (students[std] >= 90) {
            console.log(`${std} : ${students[std]} has ${grades[0]}, Congratulations , You won!!! `)
        } else if (students[std] >= 80 && students[std] <= 89) {
            console.log(`${std} : ${students[std]} has ${grades[1]}`)

        }else if (students[std] >= 70 && students[std] <= 79) {
            console.log(`${std} : ${students[std]} has ${grades[2]}`)

        }else if (students[std] >= 60 && students[std] <= 69) {
            console.log(`${std} : ${students[std]} has ${grades[3]}`)

        }else if (students[std] >= 50 && students[std] <= 59) {
            console.log(`${std} : ${students[std]} has ${grades[4]}`)

        } else {
            console.log(`${std} : ${students[std]} has failed`)
        }

    

    }
    
    

    
}


checkGrading()