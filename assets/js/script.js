//Acessando os elementos do HTML
let produtos = document.getElementById("grupo_cards");
let navBar = document.getElementById("nav-bar");
let btnDark = document.getElementById("dark-light");
let body = document.getElementById('body');
let icon = document.getElementById('icon');
let nomeBtn = document.getElementById('nome-botao');
let btnCar = document.getElementById('btn-car');
let iconCarrinho = document.getElementById('icon-carrinho');
let inputSearch = document.getElementById('search');

//Filtrando na tabela de produtos
inputSearch.addEventListener('keyup', () => {
  produtos.innerHTML = '';

  const produtosFiltrados = cards.filter(product => product.produto.toLowerCase().includes(inputSearch.value.toLowerCase()));
  produtosFiltrados.forEach(item => {
    produtos.innerHTML += `
    <div class="card" style="width: 18rem;">
      <img src="${item.imagem}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${item.produto}</h5>
        <p class="card-text">${item.preco}</p>
        <a href="#" class="btn btn-primary btn-comprar" onclick="addProduto(${item.id})" id = "${item.id}">Go somewhere</a>
      </div>
      </div>
    `
  });

});

//Preenchendo a página com cards vindos da API fake
let cards = [];
fetch('http://localhost:3000/produtos')
  .then(response => response.json())
  .then(products => {
    cards = products;
    products.forEach(item => {
      produtos.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="${item.imagem}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${item.produto}</h5>
      <p class="card-text">${item.preco}</p>
      <a href="#" class="btn btn-primary btn-comprar" onclick="addProduto(${item.id})" id = "${item.id}">Go somewhere</a>
    </div>
    </div>
    `
    })
  });


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
function addProduto(id) {
  cards.forEach(card => {
    if (card.id == id) {
      let salvosCarrinho = JSON.parse(localStorage.getItem('produtosCarrinho'));
      salvosCarrinho.push(card);
      // console.log(salvosCarrinho)
      localStorage.setItem('produtosCarrinho', JSON.stringify(salvosCarrinho));
      console.log(JSON.parse(localStorage.getItem('produtosCarrinho')));
      // console.log(card);        
    }
  });
};

//Mantendo a página com os produtos carregados no carrinho
if (localStorage.getItem('produtosCarrinho')) {

} else {
  let produtosCarrinho = [];
  localStorage.setItem('produtosCarrinho', JSON.stringify(produtosCarrinho))
};