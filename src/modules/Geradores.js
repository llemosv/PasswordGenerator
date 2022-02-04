const generateAleatoryNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const generateUppercase = () => String.fromCharCode(generateAleatoryNumber(65, 91));
const generateLowercase = () => String.fromCharCode(generateAleatoryNumber(97, 123));
const generateNumber = () => String.fromCharCode(generateAleatoryNumber(48, 58));
const symbols = ',.;~[]{}!@#$%&*()_+-=';
const generateSpecialCharacter = () => symbols[generateAleatoryNumber(0, symbols.length)];

export default function generatePassword(qtdCaracter, uppercase, lowercase, numbers, symbols) {
    const passwordArray = [];
    qtdCaracter = Number(qtdCaracter);
    if(qtdCaracter > 30) qtdCaracter = 30;

    for (let i = 0; i < qtdCaracter; i++) {
        uppercase && passwordArray.push(generateUppercase());
        lowercase && passwordArray.push(generateLowercase());
        numbers && passwordArray.push(generateNumber());
        symbols && passwordArray.push(generateSpecialCharacter());

    }

    return passwordArray.join('').slice(0, qtdCaracter);
};

generatePassword(10, true, true, true, true);