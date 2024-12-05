// Seleciona todos os botões com a classe 'btn-proximo'
const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function() {
        const atual = document.querySelector('.ativo'); // Seleciona o passo atual
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo'); // Obtém o próximo passo com base no atributo 'data-proximo'

        // Remove a classe 'ativo' do passo atual
        atual.classList.remove('ativo');

        // Adiciona a classe 'ativo' ao próximo passo
        const proximoElemento = document.getElementById(proximoPasso);
        if (proximoElemento) {
            proximoElemento.classList.add('ativo');
        } else {
            console.log(`Passo com ID ${proximoPasso} não encontrado!`);
        }
    });
});
