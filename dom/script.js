// const caixa = document.querySelector('[caixa1]');
//selecionar as tags do html
//não passar nenhum parâmetro selecionar a div que criou o html

//const texto = document.querySelector('div.caixa p');
//p dentro de uma div que tem a classe caixa

//const caixa = document.querySelector('.caixa');

//const caixa = document.querySelectorAll('.caixa');
//console.log(caixa);

//const botao = document.querySelector('button');
//const transformaEmTomate = () => {
//    caixa[0].classList.add('tomato')
//}

//botao.onclick = transformaEmTomate;

const hamburger = document.querySelector('[menu-button]');
const menuItens = document.querySelector('[menu-itens]');

const toggleMenu = () => {
    //console.log('funcionei');
    menuItens.classList.toggle('esconde');
}
//toggle altera o valor. como se fosse um botao que liga e desliga

hamburger.onclick = toggleMenu;