/*
    OBJETIVO - Quando clicarmos no botão temos que mostrar as imagem de fundo correspondente.
*/


//- passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagemCarrossel = document.querySelectorAll('.imagem');

//- passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        //- passo 3 - desmarcar o botão selecionado anterior
        desativarBotaoSelecionado();

        //- passo 4 - marcar o botão clicado como se estivesse selecionada
        selecionarBotaoCarrossel(botao);

        //- passo 5 - esconder a imagem ativa de fundo anterior
        esconderImagemAtiva();


        //- passo 6 - fazer aparecer a imagem correspondente ao botão clicado
        mostrarImagemDeFundo(indice);
    })
})
function mostrarImagemDeFundo(indice) {
    imagemCarrossel[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    console.log(imagemAtiva.classList.remove('ativa'));
}

function desativarBotaoSelecionado() {
    const botaSelecionado = document.querySelector('.selecionado');
    botaSelecionado.classList.remove('selecionado');
}

