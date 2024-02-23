//Acessando os elementos do cartão
let cartaoTitular = document.getElementById('card-nome');
let cartaoNumero = document.getElementById('card-numero');
let cartaoValidade = document.getElementById('card-validade');
let cartaoCvc = document.getElementById('card-cvc');
let frenteCartao = document.getElementById('frenteCard');
let versoCartao = document.getElementById('versoCard'); 
let cartaoLogo = document.getElementById('cartao-logo')

//Preenchendo o número no cartão
inputNumero.addEventListener('keyup', () => {
    inputNumero.value = inputNumero.value;
    cartaoNumero.innerText = inputNumero.value;

    if(inputNumero.value.substring(0,1) == '4') {
        cartaoLogo.src = 'assets/images/visa.png'
    } else {
        cartaoLogo.src = 'assets/images/master-card.webp'
    }
});

//Limitando a quantidade de dígitos que podem ser digitados (todo cartao tem 16 números)
inputNumero.addEventListener('keydown', () => {
    if (inputNumero.value.length <= 16) {
        inputNumero.value = inputNumero.value;
    }

    inputNumero.value = inputNumero.value.substr(0, 15); 
})

//Add mascara para colocar espaço nos número do cartao
// function mcc(v) {
//     v = v.replace(/\D/g, "");
//     return v.match(/\d{1,4}/g).join(' ');
// }

//Preenchendo o nome do titular no cartão
inputTitular.addEventListener('keyup', () => cartaoTitular.innerText = inputTitular.value.toUpperCase());

//Preenchendo a data de validade (ano) no cartão
inputAno.addEventListener('change', () => cartaoValidade.innerText = `MM/${inputAno.value.substring(2,4)}`);

//Preenchendo a data de validade (mês) no cartão
inputMes.addEventListener('change', () => {
    let mesNumbers = {
        "Janeiro": "01", 
        "Fevereiro": "02",
        "Março": "03",
        "Abril": "04",
        "Maio": "05",
        "Junho": "06",
        "Julho": "07", 
        "Agosto": "08",
        "Setembro": "09",
        "Outubro": "10",
        "Novembro": "11",
        "Dezembro": "12"
    }

    let opcaoSelecionada = inputMes.value;
    cartaoValidade.innerText = `${mesNumbers[opcaoSelecionada]}/${inputAno.value.substring(2,4)}`
});

//Preenchendo o cvc no cartão
inputCvc.addEventListener('keyup', () => cartaoCvc.innerText = inputCvc.value);

//Virando o cartao para aparecer o verso
inputCvc.addEventListener('click', () => {
    frenteCartao.classList.remove("animate__flipInY");
    frenteCartao.classList.add("animate__flipOutY");

    frenteCartao.style.display = "none"; 
    versoCartao.style.display = "block";

    versoCartao.classList.remove("animate__flipOutY");
    versoCartao.classList.add("animate__flipInY");
});

//Virando o cartao para aparecer a frente
inputCvc.addEventListener('blur', () => {
    versoCartao.classList.remove("animate__flipInY");
    versoCartao.classList.add("animate__flipOutY");

    frenteCartao.style.display = "block";
    versoCartao.style.display = "none";

    frenteCartao.classList.remove("animate__flipOutY");
    frenteCartao.classList.add("animate__flipInY");
});















