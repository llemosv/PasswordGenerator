import generatePassword from "./Geradores";

const divResult = document.querySelector('.senha-gerada');
let inputSizePassword = document.querySelector('.ipt-qtde');
const chkUppercase = document.querySelector('.chk-maiusculas');
const chkLoweercase = document.querySelector('.chk-minusculas');
const chkNumbers = document.querySelector('.chk-numeros');
const chkSymbols = document.querySelector('.chk-simbolos');
const buttonGenerate = document.querySelector('.gerar-senha');

const geraSenha = () => {
    buttonGenerate.addEventListener('click', () => {
        divResult.innerHTML = generate();
    })
}

function generate() {
    const password = generatePassword(inputSizePassword.value, chkUppercase.checked, chkLoweercase.checked, chkNumbers.checked, chkSymbols.checked);
    return password || 'Informe as opções desejadas';
}

export {geraSenha};
