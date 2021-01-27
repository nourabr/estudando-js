// DOM - Document Object Model e a arquitetura do documento html.

// Vamos fazer um teste com eventos,

// Evento de Foco de tela
window.addEventListener('focus', () => {
    console.log("Você acabou de FOCAR nesta tela.");
})

// Evento de Click no documento
document.addEventListener("click", () => {
    console.log('Você acabou de CLICAR na tela');
})

// Manipulação de Data
let timeStamp = Date.now(); // Retorna o Unix Timestamp
console.log(`Este é o Timestamp: ${timeStamp}`);

let agora = new Date(); // Instacia de Date()
console.log(`Este é o retorno padrão da classe Date instanciada: ${agora}`)
console.log(`Este é o dia: ${agora.getDate()}`); // getDate mostra o dia
console.log(`Este é o ano: ${agora.getFullYear()}`); // getFullYear mostra o ano com 4 dígitos
console.log(`Este é o mês: ${agora.getMonth()}`); // getMonth mostra o mês (de 0 à 11)
console.log(`Este é a melhor forma de mostrar data: ${agora.toLocaleDateString("pt-BR")}`); // Mostra a data conforme o padrão da linguagem/país