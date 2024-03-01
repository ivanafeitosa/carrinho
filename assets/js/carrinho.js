//Acessando os elementos do HTML
let tableItens = document.getElementById("table-itens");

//Importando os elementos selecionados pelo usuário
let produtosObtidos = JSON.parse(localStorage.getItem('produtosCarrinho'));

//Compondo a tabela com os elementos importados
produtosObtidos.forEach(element => {
    tableItens.innerHTML += `
    <tr>
        <td>${element.produto}</td>
        <td  class="preco">R$ ${element.preco}</td>
        <td>
            <button class="btn btn-secondary btn-sm btn-soma">+</button>
            <input type="number" class="form-control-sm text-center quantidade" value="1">
            <button class="btn btn-secondary btn-sm btn-diminui">-</button>
            <button class="btn btn-danger btn-sm" onclick="excluiProduto(${element.id})">Excluir</button>
        </td>
        <td>R$ <span class="total">${element.preco}</span></td>
    </tr> 
    `
});

//Add ao botao a funcionalidade de somar produtos
document.querySelectorAll('.btn-soma').forEach(elemento => {
    elemento.addEventListener('click', () => {
        const quantidade = elemento.parentNode.querySelector('.quantidade');
        quantidade.value = +quantidade.value + 1;
        atualizaTotal(elemento);
    });
});

//console.log(preco.textContent.substring(3,8));

document.querySelectorAll('.btn-diminui').forEach(elemento => {
    elemento.addEventListener('click', () => {
        const quantidade = elemento.parentNode.querySelector('.quantidade');
        if (quantidade.value > 1) {
            quantidade.value = +quantidade.value - 1;
        }
        atualizaTotal(elemento);
    });
});

//Atualizar total se digitado quantidade de produtos
document.querySelectorAll('.quantidade').forEach(elemento => {
    elemento.addEventListener('blur', () => atualizaTotal(elemento))
});

//Funcao que atualiza total
function atualizaTotal(elemento) {
    const linha = elemento.closest('tr');
    const preco = linha.querySelector('.preco');
    const quantidade = linha.querySelector('.quantidade');
    const total = linha.querySelector('.total');

    let resultado = +preco.textContent.substring(3, 8) * quantidade.value;
    total.innerText = resultado.toFixed(2);
};

//Funcao que apaga o produto do carrinho
function excluiProduto(id) {

    produtosObtidos = produtosObtidos.filter(produto => produto.id != id);

    localStorage.setItem('produtosCarrinho', JSON.stringify(produtosObtidos));

    reconstruirTabela();

};

//Funcao para reconstruir tabela
function reconstruirTabela() {
    tableItens.innerHTML = '';
    produtosObtidos.forEach(element => {
        tableItens.innerHTML += `
                <tr>
                    <td>${element.produto}</td>
                    <td  class="preco">R$ ${element.preco}</td>
                    <td>
                        <button class="btn btn-secondary btn-sm btn-soma">+</button>
                        <input type="number" class="form-control-sm text-center quantidade" value="1">
                        <button class="btn btn-secondary btn-sm btn-diminui">-</button>
                        <button class="btn btn-danger btn-sm" onclick="excluiProduto(${element.id})">Excluir</button>
                    </td>
                    <td>R$ <span class="total">${element.preco}</span></td>
                </tr> 
                `
    });
};