let fluxo = {
    receitas: [],
    despesas: []
}

function somar(array){
    let total = 0;

    for(let value of array) {
        total += value;
    }

    return total;
}

function saldoFamiliar(){
    const calcReceitas = somar(fluxo.receitas);
    const calcDespesas = somar(fluxo.despesas);

    let total = calcReceitas - calcDespesas;

    if (total > 0) {
        console.log('Saldo familiar positivo:' + total.toFixed(2));
    }else if (total < 0) {
        console.log('Saldo familiar negativo:' + total.toFixed(2));
    }else{
        console.log('Saldo neutro:' + total);
    }
}

saldoFamiliar();