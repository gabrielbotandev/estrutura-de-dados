// Loan and Insurance Calculator

let averageBalance = parseFloat(prompt("Enter your average balance from last year:"))
let age = parseFloat(prompt("Enter your age:"))
let credit = 0
let insurance = 0

// calculate credit

if(averageBalance <= 200){
    credit = 0
}else if(averageBalance > 200 && averageBalance <= 400 ){
    credit = averageBalance * 0.2
}else if(averageBalance > 400 && averageBalance < 601 ){
    credit = averageBalance * 0.3
}else if(averageBalance >= 601){
    credit = averageBalance * 0.4
}

// calculate insurance

if(age >= 18 && age <= 24){
    insurance = credit * 0.02
}else if(age >= 25 && age <= 35){
    insurance = credit * 0.06
}else if(age >= 36 && age <= 45){
    insurance = credit * 0.08
}else if(age >= 46 && age <= 55){
    insurance = credit * 0.1
}else if(age > 55){
    insurance = credit * 0.15
}

// results 

alert(`You got a credit of $${credit.toFixed(2)}`)
alert(`The insurance value will be $${insurance.toFixed(2)}`)
