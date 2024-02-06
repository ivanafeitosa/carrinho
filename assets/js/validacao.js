//Acessando os elementos do HTML
let inputNumero = document.getElementById('numero');
let inputTitular = document.getElementById('titular');
let inputCvc = document.getElementById('cvc');
let inputCpf = document.getElementById('cpf');
let inputMes = document.getElementById('mes');
let inputAno = document.getElementById('ano');

//Validando numero do cartao
inputNumero.addEventListener('blur', validaNumero);

function validaNumero() {
    if(inputNumero.value.length == 19) {
        inputNumero.classList.remove('is-invalid');
    } else {
        inputNumero.classList.add('is-invalid');
    }
}

//Validando nome do titular do cartao
inputTitular.addEventListener('blur', validaTitular);

function validaTitular() {
    if(inputTitular.value.length >= 10 && inputTitular.value.length <= 15) {
        inputTitular.classList.remove('is-invalid');
    } else {
        inputTitular.classList.add('is-invalid');
    }
}

//Criando lista do select do ano de vencimento do cartao
let anoAtual = new Date().getFullYear();

for (let i= 0; i<=9; i++) {
    inputAno.innerHTML += `<option ${i}">${anoAtual + i}</option>`
}

//Criando lista do select do mes de vencimento do cartao
let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

for(let i= 0; i<=11; i++) {
    inputMes.innerHTML += `<option ${i}">${meses[i]}</option>`
}

//Validando CVC do cartao
inputCvc.addEventListener('blur', validaCvc);

function validaCvc() {
    if(inputCvc.value.length == 3) {
        inputCvc.classList.remove('is-invalid');
    } else {
        inputCvc.classList.add('is-invalid');
    }
} 

//Validando CPF do cartao
inputCpf.addEventListener('blur', validaCpf);

function validaCpf() {
    let soma = 0;
    let resto;

    if(inputCpf.value == "00000000000" || inputCpf.value == "") {
        inputCpf.classList.add('is-invalid');
    } else {
        //console.log(inputCpf.value);
        //inputCpf.classList.remove('is-invalid');

        for(i=1; i<=9; i++) {
            soma = soma + parseInt(inputCpf.value.substring(i-1, i)) * (11 - i);
            resto = (soma * 10) % 11;
        }

        if(resto == 10 || resto == 11) {
            resto = 0;
        }

        if(resto != parseInt(inputCpf.value.substring(9, 10))) {
            inputCpf.classList.add('is-invalid');
        }

        soma = 0;

        for(i=1; i<=10; i++) {
            soma = soma + parseInt(inputCpf.value.substring(i-1, i)) * (12 - i);
            resto = (soma * 10) % 11;
        }

        if(resto == 10 || resto == 11) {
            resto = 0;
        }

        if(resto != parseInt(inputCpf.value.substring(10, 11))) {
            inputCpf.classList.add('is-invalid');
        } else {
            inputCpf.classList.remove('is-invalid');
        }
    }
}









