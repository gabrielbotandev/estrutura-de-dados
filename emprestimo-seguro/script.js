alert("Calculadora de Empréstimo e Seguro")

var saldoMedio = parseFloat(prompt("Digite seu saldo médio do ano passado:"))
var idade = parseFloat(prompt("Digite sua idade"))
var credito = 0
var seguro = 0

// calcular crédito

if(saldoMedio <= 200){
    credito = 0
}else if(saldoMedio > 200 && saldoMedio <= 400 ){
    credito = saldoMedio * 0.2
}else if(saldoMedio > 400 && saldoMedio < 601 ){
    credito = saldoMedio * 0.3
}else if(saldoMedio >= 601){
    credito = saldoMedio * 0.4
}

// calcular seguro 

if(idade >= 18 && idade <= 24){
    seguro = credito * 0.02
}else if(idade >= 25 && idade <= 35){
    seguro = credito * 0.06
}else if(idade >= 36 && idade <= 45){
    seguro = credito * 0.08
}else if(idade >= 46 && idade <= 55){
    seguro = credito * 0.1
}else if(idade > 55){
    seguro = credito * 0.15
}

// resultados 

alert(`Você conseguiu um crédito de R$${credito.toFixed(2)}`)
alert(`O valor do seguro será de R$${seguro.toFixed(2)}`)
alert(`O valor total a ser devolvido para o banco será de R$${(credito + seguro).toFixed(2)}`)
