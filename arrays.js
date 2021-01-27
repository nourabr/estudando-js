// Trabalhando com Arrays

// Declaração
let carros = ["Escort", "Uno", "Civic", new Date(), 50, 70.5, function() { return 'Função Executada' }, 90] // Em Javascript o array pode ter vários tipos: String, number, class, function etc

console.log(carros); // Mostra array
console.log(carros.length); // Mostra o tamanho do array
console.log(carros[2]); // Mostra a posição indexada desejada
console.log(carros[3].toLocaleDateString("pt-BR")); // Podemos inclusive fazer isso
console.log(carros[6]()); // Podemos até executar a função com ou sem parâmetros

// Percorrer um Array
carros.forEach(function(value, index) { // A função passa o valor e o index como parâmetros
    console.log(index, value);
});