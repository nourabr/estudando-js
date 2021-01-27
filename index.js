var olaMundo = "Olá meu jovem!";

// Imprime informações no console do navegador
console.log(olaMundo);

let a = 10;
const b = "10";


console.log(a == b && typeof b == "string"); // Compara o valor de a com de b e verifica se o tipo da variável b é string

// Exemplo de Switch

//  let farol = 'amarelo';

// switch (farol) {
//     case 'verde':
//         console.log('Siga!');
//         break;

//     case 'amarelo':
//         console.log("Atenção!");
//         break;

//     case 'vermelho':
//         console.log('Pare!');
//         break;

//     default:
//         alert(farol + ' Não é uma cor válida de Farol. Tente novamente com uma das cores: Verde, Amarelo ou Vermelho.');
// }

// Exemplo de template string

let temperatura = 16

function Clima() {
    if (temperatura > 22) {
        return 'Bem quente!'
    } else {
        return 'Frio'
    }
}

console.log(`Hoje está ${temperatura} graus, o clima está ${Clima()}`)