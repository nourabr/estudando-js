// Criar um sistema de pedidos com OO de uma pizzaria

class Pizza {

    constructor() {
        this.nome = ['Margerita', 'Mussarela', 'Calabresa', 'Toscana', 'Parmesão'];
        this.tipo = ['Brotinho', 'Convencional', 'Grande'];
        this.preco = [19.90, 25.90, 35, 58.70];
    }

    cardapio() {

        console.log(`Estas são as opções de pizzas:`);

        this.nome.forEach(function(value, index) {
            console.log(`Opção ${index +1}: ${value};`)
        });

        return 'Escolha uma opção'

    }

    imprimirPedido(nNome, nTipo, nPreco) {

        let nome = this.nome[nNome];
        let tipo = this.tipo[nTipo];
        let preco = this.preco[nPreco];

        console.log('Este é o seu pedido:');
        console.log(`Uma ${nome} do tipo ${tipo}. Fica R$ ${preco}.`)
    }

}

objeto = new Pizza();

// console.log(objeto.cardapio());
console.log(objeto.imprimirPedido(1, 2, 2))