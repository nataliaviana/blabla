/**
 * Propriedades/Atributos
 * Métodos/Funções
 */

// let pessoa = {
//     nome: 'Joao', //propriedade
//     idade: 28,
//     cpf: '123.456.789-82',


//     // cumprimentar: function() {
//     //     console.log('Olá, pessoinha')
//     // }

//     cumprimentar() {
//         console.log('Olá, pessoinha')
//     }
// }

// console.log(`Olá, meu nome é ${pessoa.nome} e eu tenho ${pessoa.idade} anos.`)

//Maneira menos efetiva

// let p3 = {
//     nome: 'João',
//     idade: 25,
//     cpf: '33222411554'
// }

// let p4 = {
//     nome: 'Victor',
//     idade: 30,
//     cpf: '31322411578'
// }

// console.log(`Olá, meu nome é ${p.nome} e tenho ${p.idade} anos.`)

// console.log(p)

//Maneira melhor de se criar classe

class Pessoa {
    constructor(nome, idade, cpf) {
        this.nome = nome
        this.idade = idade
        this.cpf = cpf
    }

    cumprimentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
    
    static cumprimentar2() {
        console.log(`Olá`)
    }
}

let p = new Pessoa ('Marcos', 20, '123;456;789-98')
let p2 = new Pessoa ('Dayvson', 25, '132.456.798-42')
let p3 = new Pessoa ('Amanda', 22, '951.456.798-42')

const pessoas = [p, p2, p3]

for (let pessoa of pessoas) {
    pessoa.cumprimentar()
}