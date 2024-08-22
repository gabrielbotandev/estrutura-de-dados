alert("Calculadora de Média de Altura")

var numJogadores = parseInt(prompt("Digite a quantidade de jogadores"))
var media = 0
var altura = [];

var somaAltura = 0

for (var i = 0; i < numJogadores; i++) {
    altura[i] = parseFloat(prompt("Digite a altura do jogador " + (i + 1)));

    somaAltura = somaAltura + altura[i];
}

media = somaAltura / numJogadores

console.log(altura)
alert(`Média de altura dos jogadores: ${media.toFixed(2)}`)