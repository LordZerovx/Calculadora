let buffer = '0';
let totalCalculado = 0;
let operacaoAnterior;

const telaCalc = document.querySelector('.Screen');

const botoes = document.querySelectorAll('.botoes-calc');

const botaoLimpar = document.querySelector('.botoes-calc-apagar');

const botaoExcluir = document.getElementById("botaoExcluir");

function atualizarTela() {
    telaCalc.textContent = buffer;
}
atualizarTela()


function calculoMatematico() {
    if(operacaoAnterior === '+') {
        totalCalculado += parseFloat(buffer);
        buffer = totalCalculado;
        atualizarTela();
    } else if(operacaoAnterior === '−'){
        totalCalculado -= parseFloat(buffer);
        buffer = totalCalculado;
        atualizarTela();
    } else if(operacaoAnterior === '×'){
        totalCalculado *= parseFloat(buffer);
        buffer = totalCalculado;
        atualizarTela();
    } else if(operacaoAnterior === '÷'){
        totalCalculado /= parseFloat(buffer);
        buffer = totalCalculado;
        atualizarTela();
    }
}

botoes.forEach(botao => {
    botao.addEventListener('click', (event) => {
        event.stopPropagation();
        let digito = event.target.textContent.trim();

        if(digito === "←") return;

        switch(digito){
            case "=":
                if(buffer === '0'){
                    return;
                } else {
                    calculoMatematico();
                    atualizarTela();
                    return;
                }
            case "+":
            case "−":
            case "×":
            case "÷":
                if(buffer === '0'){
                    return;
                } else {
                    operacaoAnterior = digito;
                    totalCalculado = parseFloat(buffer);
                    buffer = '0';
                    atualizarTela()
                    return;
                }
        }

        if(buffer === '0') {
            buffer = digito;
        } else {
            buffer += digito
            buffer.length++;
        }
        
       atualizarTela()
        
    })
})



botaoLimpar.addEventListener('click', () => {
    event.stopPropagation();
    buffer = '0';
    totalCalculado = 0;
    operacaoAnterior = null;
    atualizarTela();
})

botaoExcluir.addEventListener('click', (event) => {
    buffer = buffer.slice(0, -1) || "0";
    atualizarTela();
});