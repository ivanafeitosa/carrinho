//Acessando os elementos do HTML
let btnSoma = document.getElementById("soma");
let btnDiminui = document.getElementById("diminui");
let quantidade = document.getElementById("quantidade");
let preco = document.getElementById("preco");
let total = document.getElementById("total");
let tableItens = document.getElementById("table-itens");

// let produtos = [
//     {
//         id: 1,
//         nome: "Refrigerante",
//         preco: "12.50",
//         quantidade: "2"
//     },
//     {
//         id: 2,
//         nome: "Blusa",
//         preco: "80.00",
//         quantidade: "1"
//     }
// ];

// localStorage.setItem("produtos", JSON.stringify(produtos));

// let protudosObtidos = JSON.parse(localStorage.getItem("produtos"));
// // console.log(protudosObtidos);
// // console.log(tableItens);

// protudosObtidos.forEach(element => {
//     tableItens.innerHTML += `
//     <tr>
//         <td>${element.nome}</td>
//         <td id="preco">R$ ${element.preco}</td>
//         <td>
//             <button class="btn btn-secondary btn-sm" id="soma">+</button>
//             <input type="number" class="form-control-sm text-center" value="${element.quantidade}" id="quantidade">
//             <button class="btn btn-secondary btn-sm" id="diminui">-</button>
//         </td>
//         <td>R$ <span id="total"></span></td>
//     </tr> 
//     `
// });

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

