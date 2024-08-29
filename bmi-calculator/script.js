alert("BMI Calculator");

let weight = parseFloat(prompt("Enter your weight:"))
let height = parseFloat(prompt("Enter your height:"))

// calculate bmi

bmi = weight/(height * height)

// classify bmi

if (bmi <= 18.5){
    alert("You are underweight");
} else if(bmi >= 18.5 && bmi <= 24.9){
    alert("You are at your ideal weight");
}else if(bmi >= 25 && bmi <= 29.9){
    alert("You are over your ideal weight");
}else if(bmi >= 30 && bmi <= 34.9){
    alert("You have grade I obesity");
}else if(bmi >= 35 && bmi <=40){
    alert ("You have grade II obesity");
}else if(bmi > 40){
    alert ("You have grade III obesity");
}

// numeric result

alert(`Your BMI is ${bmi.toFixed(2)}`)