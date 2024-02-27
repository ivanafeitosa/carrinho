//Acessando os elementos do HTML
let produtos = document.getElementById("grupo_cards");
let navBar = document.getElementById("nav-bar");
let btnDark = document.getElementById("dark-light");
let body = document.getElementById('body');
let icon = document.getElementById('icon');
let nomeBtn = document.getElementById('nome-botao');
let btnCar = document.getElementById('btn-car');
let iconCarrinho = document.getElementById('icon-carrinho');

//Carregando os cards
let cards = [
  {
    id: 1,
    nome: "Refrigerante",
    descricao: "Descrição do refrigerante",
    imagem: "assets/images/produtos/fogao_embutido.webp",
    preco: "10.00"
  },
  {
    id: 2,
    nome: "Pizza",
    descricao: "Descrição da pizza",
    imagem: "assets/images/produtos/fogao_embutido.webp",
    preco: "39.50"
  },
  {
    id: 3,
    nome: "Smartphone",
    descricao: "Descrição do smartphone",
    imagem: "assets/images/produtos/fogao_embutido.webp",
    preco: "2500.00"
  },
  {
    id: 4,
    nome: "Cerveja",
    descricao: "Descrição da cerveja",
    imagem: "assets/images/produtos/fogao_embutido.webp",
    preco: "7.00"
  },
  {
    id: 5,
    nome: "Chocolate",
    descricao: "Descrição do chocolate",
    imagem: "assets/images/produtos/fogao_embutido.webp",
    preco: "6.50"
  },
  {
    id: 6,
    nome: "Laptop",
    descricao: "Descrição do laptop",
    imagem: "assets/images/produtos/fogao_embutido.webp",
    preco: "5000.00"
  },
  {
    id: 7,
    nome: "Café",
    descricao: "Descrição do café",
    imagem: "assets/images/produtos/fogao_embutido.webp",
    preco: "5.50"
  },
  {
    id: 8,
    tipo: "Hamburguer",
    descricao: "Descrição do hambúrguer",
    imagem: "assets/images/produtos/fogao_embutido.webp",
    preco: "35.80"
  },
  {
    id: 9,
    nome: "Fones de Ouvido",
    descricao: "Descrição dos fones de ouvido",
    imagem: "assets/images/produtos/fogao_embutido.webp",
    preco: "8.50"
  },
  {
    id: 10,
    nome: "Chá",
    descricao: "Descrição do chá",
    imagem: "assets/images/produtos/fogao_embutido.webp",
    preco: "2.20"
  }
];

for (let i = 0; i < cards.length; i++) {
  produtos.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="${cards[i].imagem}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${cards[i].nome}</h5>
      <p class="card-text">${cards[i].descricao}</p>
      <a href="#" class="btn btn-primary btn-comprar" id = "${cards[i].id}">Go somewhere</a>
    </div>
    </div>
    `
};

//Add modo dark-light ao clicar no botão
btnDark.addEventListener('click', () => {
  if (localStorage.getItem('darkMode') == 'true') {
    lightMode();
  } else {
    darkMode();
  }

});

//Mantendo a página com a último modo setado antes de ser recarregada
if (localStorage.getItem('darkMode') == 'true') {
  darkMode();
} else {
  lightMode();
};

//Funcao modo dark
function darkMode() {
  //Configuracoes navbar
  navBar.classList.add('bg-dark');
  navBar.setAttribute("data-bs-theme", "dark");

  //Configuracoes do background da página
  body.classList.remove('white-mode');
  body.classList.add('dark-mode');

  //Configuracoes dos cards
  document.querySelectorAll('.grupo_cards .card').forEach(elemento => {
    elemento.classList.add("text-bg-dark");
  });

  //Configurando o botão do modo dark 
  nomeBtn.innerText = "Modo claro";
  icon.src = "assets/images/icones/brightness-high.svg";
  btnDark.classList.remove("btn-light");
  btnDark.classList.add("btn-dark");

  //Configurando o botao do carrinho
  iconCarrinho.src = "assets/images/icones/cart-white.svg";
  btnCar.classList.remove("btn-light");
  btnCar.classList.add("btn-dark");


  //Variavel sendo setado no local storage
  localStorage.setItem('darkMode', 'true');
};

//Funcao modo light
function lightMode() {
  navBar.classList.remove('bg-dark');
  navBar.removeAttribute('data-bs-theme');

  body.classList.remove('dark-mode');
  body.classList.add('white-mode');

  document.querySelectorAll('.grupo_cards .card').forEach(elemento => {
    elemento.classList.remove("text-bg-dark");
  });

  nomeBtn.innerText = "Modo escuro";
  icon.src = "assets/images/icones/brightness-high-fill.svg";
  btnDark.classList.remove("btn-dark");
  btnDark.classList.add("btn-light");

  iconCarrinho.src = "assets/images/icones/cart-black.svg";
  btnCar.classList.remove("btn-dark");
  btnCar.classList.add("btn-light");

  localStorage.setItem('darkMode', 'false');
};

//Add os produtos no localstorage
let produtosCarrinho = [];
localStorage.setItem('produtosCarrinho', JSON.stringify(produtosCarrinho))
document.querySelectorAll('.btn-comprar').forEach(elemento => {
  elemento.addEventListener('click', () => {   

    cards.forEach(card => {
      if(card.id == elemento.id) {
        let salvosCarrinho = JSON.parse(localStorage.getItem('produtosCarrinho'));
        salvosCarrinho.push(card);
        // console.log(salvosCarrinho)
        localStorage.setItem('produtosCarrinho', JSON.stringify(salvosCarrinho));
        console.log(JSON.parse(localStorage.getItem('produtosCarrinho')));
        // console.log(card);        
      }
    });
  });
});