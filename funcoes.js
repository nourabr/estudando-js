// Exemplo de funções 

// Função comum
function calcular(valor1, valor2, operador) {
    return eval(`${valor1} ${operador} ${valor2}`);
}

let resultado = calcular(50, 57, '*');

console.log(`Este é o resultado da função Calcular: ${resultado}`);

// Função anônima
let resultado2 = (function(valor1, valor2, operador) {
    return eval(`${valor1} ${operador} ${valor2}`);
})(50, 5, '+');

console.log(`Este é o resultado da função anônima: ${resultado2}`);

// Arrow Function

let dividir = (a, b) => {
    return a / b;
}

console.log(`Este é o resultado da Arrow Function Dividir: ${dividir(50,2)}`);