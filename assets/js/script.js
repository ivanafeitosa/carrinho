//Acessando os elementos do HTML
let btnSoma = document.getElementById("soma");
let btnDiminui = document.getElementById("diminui");
let quantidade = document.getElementById("quantidade");
let preco = document.getElementById("preco");
let total = document.getElementById("total");

//console.log(preco.textContent.substring(3,8));

//Add ao botao a funcionalidade de somar produtos
btnSoma.addEventListener('click', () => {
    quantidade.value = +quantidade.value + 1;
    atualizaTotal();
});

//Add ao botao a funcionalidade de subtrair produtos
btnDiminui.addEventListener('click', () => {
    if(quantidade.value > 1) {
        quantidade.value = +quantidade.value - 1;
    }
    atualizaTotal();    
});

//Atualizar total se digitado quantidade de produtos
quantidade.addEventListener('blur', () => {
    atualizaTotal();
});

//Funcao que atualiza total
function atualizaTotal() {
    let resultado = +preco.textContent.substring(3,8) * quantidade.value;
    total.innerText = "R$ " + resultado.toFixed(2);
};

