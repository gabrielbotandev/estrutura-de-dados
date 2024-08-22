alert("Calculadora de Média e Menção");

notaUm = parseFloat(prompt("Digite a primeira nota:"));
notaDois = parseFloat(prompt("Digite a segunda nota:"));

mediaNota = (notaUm + notaDois)/2;

if(mediaNota >= 8.5){
    alert(`Média: ${mediaNota.toFixed(2)}. Sua menção é A`)
}else if(mediaNota < 8.5 && mediaNota >= 7.5){
    alert(`Média: ${mediaNota.toFixed(2)}. Sua menção é B`)
}else if(mediaNota < 7.5 && mediaNota >= 6){
    alert(`Média: ${mediaNota.toFixed(2)}. Sua menção é C`)
}else if(mediaNota < 6 && mediaNota >= 5){
    alert(`Média: ${mediaNota.toFixed(2)}. Sua menção é D`)
}else{
    alert(`Média: ${mediaNota.toFixed(2)}. Sua menção é E`)
}