// Selecionando os elementos do HTML que vamos usar
const valorTexto = document.getElementById('valor');
const btnDiminuir = document.getElementById('diminuir');
const btnResetar = document.getElementById('resetar');
const btnAumentar = document.getElementById('aumentar');

// Variável que guarda o número atual do contador
let contador = 0;

// Função para atualizar a cor do número (opcional, apenas para estética)
function atualizarCor() {
    if (contador > 0) {
        valorTexto.style.color = '#2ecc71'; // Verde se for positivo
    } else if (contador < 0) {
        valorTexto.style.color = '#e74c3c'; // Vermelho se for negativo
    } else {
        valorTexto.style.color = '#2c3e50'; // Azul escuro se for zero
    }
}

// Evento para o botão Aumentar
btnAumentar.addEventListener('click', () => {
    contador++;
    valorTexto.textContent = contador;
    atualizarCor();
});

// Evento para o botão Diminuir
btnDiminuir.addEventListener('click', () => {
    contador--;
    valorTexto.textContent = contador;
    atualizarCor();
});

// Evento para o botão Resetar
btnResetar.addEventListener('click', () => {
    contador = 0;
    valorTexto.textContent = contador;
    atualizarCor();
});
