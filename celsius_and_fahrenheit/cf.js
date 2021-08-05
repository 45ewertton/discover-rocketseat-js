function transGrau(grau){
    const celsiusExists = grau.toUpperCase().includes('C');
    const fahrenheitExists = grau.toUpperCase().includes('F');

    //fluxo de erro
    if(!celsiusExists && !fahrenheitExists){
        throw new Error('Grau não identificado!!!');
    }

    //fluxo ideal

    let grauAtualizado = Number(grau.toUpperCase().replace('F', ''));
    let formula = fahrenheit => (fahrenheit - 32) * 5/9;
    let novoSimbolo = 'C';
    
    //fluxo alternativo

    if(celsiusExists){
        grauAtualizado = Number(grau.toUpperCase().replace('C', ''));
        formula = celsius => celsius * 9/5 + 32;
        novoSimbolo = 'F';
    }

    return formula(grauAtualizado) + novoSimbolo;
}

//Selecione valores para testar os fluxos de conversões e o fluxo de erro (por padrão coloquei a letra X)

try {
    console.log(transGrau('F'));
    console.log(transGrau('C'));
    console.log(transGrau('X'));
} catch (error) {
    console.log(error.message);
}