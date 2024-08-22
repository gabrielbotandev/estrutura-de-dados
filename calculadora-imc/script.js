alert("Calculadora de IMC");

var peso = 0
var altura = 0

peso = parseFloat(prompt("Digite seu peso:"))
altura = parseFloat(prompt("Digite sua altura:"))

// calcular imc

imc = peso/(altura * altura)

// classificar imc

if (imc <= 18.5){
    alert("Você está abaixo do peso ideal");
} else if(imc >= 18.5 && imc <= 24.9){
    alert("Você está no peso ideal");
}else if(imc >= 25 && imc <= 29.9){
    alert("Você está acima do peso ideal");
}else if(imc >= 30 && imc <= 34.9){
    alert("Você está com obesidade grau I");
}else if(imc >= 35 && imc <=40){
    alert ("Você está com obesidade grau II");
}else if(imc > 40){
    alert ("Você está com obesidade grau III");
}

// resultado numérico

alert(`Seu IMC é ${imc.toFixed(2)}`)