let buffer = '0';
let totalCalculado = 0;
let operacaoAnterior;

const telaCalc = document.querySelector('.Screen');

const botoes = document.querySelectorAll('.botoes-calc');

const botaoLimpar = document.querySelector('.botoes-calc-apagar');

function atualizarTela() {
    telaCalc.textContent = buffer;
}
atualizarTela()

botoes.forEach(botao => {
    botao.addEventListener('click', (event) => {
        event.stopPropagation();
        const digito = event.target.textContent;

        if (buffer === '0') {
            buffer = digito;
        } else {
            buffer += digito;
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

botaoExcluir.addEventListener('click', () => {
   
    if (buffer.length === 1) {
        buffer = '0';
    } else {
        buffer = buffer.toString(0, buffer.length - 1);
    }
    atualizarTela();
});

console.log(buffer);
console.log(totalCalculado);
console.log(operacaoAnterior);