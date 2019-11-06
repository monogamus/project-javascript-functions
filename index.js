// JavaScript functions
function logName(name) {
    console.log(`Hello, ${name}!`)
}

const nameA = "Latief"
const nameB = "Roby"

logName(nameA)
logName(nameB)



// JavaScript function declarations
const checkAge = function(age) {
    if (age >= 18) {
        console.log("You are old enough")
    } else if (age < 18 && age >= 0) {
        console.log("You are still young")
    } else {
        console.log("You are not born yet")
    }
}

checkAge(10)
checkAge(25)
checkAge()



// JavaScript arrow functions
const addMarks = (text, mark, times) => {
    let newText = text

    for (let i = 0; i <= times; i++) {
        newText += mark
    }

    console.log(newText)
}

addMarks("Hello", "!", 0)
addMarks("Hello", "!", 1)
addMarks("How are you", "?", 2)
addMarks("How are you", "?", 3)



// JavaScript default parameters
const showNameWithAge = (name = "Unknown", age = 0) => {
    const nameWithAge = `${name} is ${age} year(s) old`

    return nameWithAge
}

const dean = showNameWithAge("Dean", 29)
const iqbal = showNameWithAge("Iqbal", 37)
const iman = showNameWithAge("Iman", 35)

console.log(dean)
console.log(iqbal)
console.log(iman)