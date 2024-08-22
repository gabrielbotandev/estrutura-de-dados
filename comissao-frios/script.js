alert("Calculadora de Comissão de Frios")

function comissaoFrios(){
    var qtdMuss = document.getElementById('muss').value;
    var qtdPres = document.getElementById('pres').value;
    var qtdMort = document.getElementById('mort').value;
    var qtdPdp = document.getElementById('pdp').value;

    var 
    totalVendas, totalCom,
    vlrMuss, vlrPres, vlrMort, vlrPdp, 
    comMuss, comPres, comMort, comPdp = 0;

    // calcular total de vendas

    vlrMuss = qtdMuss * 55.00
    vlrPres = qtdPres * 33.00
    vlrMort = qtdMort * 23.00
    vlrPdp = qtdPdp * 85.00

    totalVendas = vlrMuss + vlrPres + vlrMort + vlrPdp

    // calcular comissão

    comMuss = vlrMuss * 0.07
    comPres = vlrPres * 0.04
    comMort = vlrMort * 0.08
    comPdp = vlrPdp * 0.02

    totalCom = comMuss + comPres + comMort + comPdp

    // resultados
    
    alert(`Seu total de vendas é R$${totalVendas.toFixed(2)}`)
    alert(`Sua comissão será de R$${totalCom.toFixed(2)}`)
}