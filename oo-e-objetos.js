// Forma antiga de criar uma classe

let = celular = function() {

    this.cor = "Azul"; // O this promove uma variável em atributo, permitindo que este possa ser acessado de qualquer instancia desta classe.

    this.ligar = function() {

        return 'Ligando...';
    }

}

objeto = new celular; // criação de um objeto/instancia da classe celular

console.log(objeto.ligar());



// Nova forma com o ES6

class Celular {

    // Método Construtor
    constructor() {
        this.cor = "Azul"
    }

    // Criação de um método
    ligar() {
        return 'Ligando... hahaha'
    }
}

objeto2 = new Celular;

console.log(objeto2.ligar());