function comissaoFrios(){
    var qtdMuss = document.getElementById('muss').value;
    var qtdPres = document.getElementById('pres').value;
    var qtdMort = document.getElementById('mort').value;
    var qtdPdp = document.getElementById('pdp').value;

    var 
    totalVendas, totalCom,
    vlrMuss, vlrPres, vlrMort, vlrPdp, 
    comMuss, comPres, comMort, comPdp = 0;

    //Total de vendas

    vlrMuss = qtdMuss * 55.00
    vlrPres = qtdPres * 33.00
    vlrMort = qtdMort * 23.00
    vlrPdp = qtdPdp * 85.00

    totalVendas = vlrMuss + vlrPres + vlrMort + vlrPdp

    //Comissão

    comMuss = vlrMuss * 0.07
    comPres = vlrPres * 0.04
    comMort = vlrMort * 0.08
    comPdp = vlrPdp * 0.02

    totalCom = comMuss + comPres + comMort + comPdp
    
    alert("Seu total de vendas é R$" + totalVendas)
    alert("Seu total de comissão é R$" + totalCom)
}