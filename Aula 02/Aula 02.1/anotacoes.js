// function Produto(nome, preco, estoque) {
//     this.nome = nome;
//     this.preco = preco;
//     this.estoque = estoque;
// }
// const p1 = new Produto("Camiseta", 20, 3);
// console.log(p1.estoque);
// p1.estoque = 500;
// console.log(p1.estoque);



// function Produto(nome, preco, estoque) {
//     this.nome = nome;
//     this.preco = preco;
//     Object.defineProperty(this, 'estoque', {
//         enumerable: false, // Define se a chave pode ser mostrada junto das outras chaves
//         value: estoque, // Define o valor da chave
//     });
// }
// const p1 = new Produto("Camiseta", 20, 3);

// console.log(Object.keys(p1));




// ----------------------------------   //usando defineProperties   -------------------------------------
// function Produto(nome, preco, estoque) {
//     Object.defineProperties(this, {
//         nome: {
//             enumerable: true,
//             value: nome,
//             writable: false,
//             configurable: false
//         },
//         preco: {
//             enumerable: true,
//             value: preco,
//             writable: true,
//             configurable: false
//         },
//         estoque: {
//             enumerable: true,
//             value: estoque,
//             writable: true,
//             configurable: false
//         }
//     });
// }

// const p1 = new Produto("Camiseta", 20, 3);
// const p2 = new Produto("Blusinha", 59.90, 30);

// console.log(p1);
// console.log(p2);


// ----------------------------------   //usando get/setter   -------------------------------------


// function Produto(nome, preco, estoque) {
//     this.nome = nome;
//     this.preco = preco;
//     Object.defineProperty(this, 'estoque', {
//         enumerable: true,
//         configurable: false,
//         get: () => {
//             return estoque
//         },
//         set: (valor) => {
//             if (typeof (valor) !== 'number') {
//                 throw new TypeError("Valor inválido");
//             }
//             estoque = valor;
//         }
//     });
// }


// const p1 = new Produto("Camiseta", 20, 3);

// console.log(p1.estoque);
// p1.estoque = 500;
// console.log(p1.estoque);
// p1.estoque = "Não_é_número"; // quando se e diferente de algum numero ele estora um erro propositalmente


// ----------------------------------   //usando object.assign()   -------------------------------------


// console.log("\n\n");
// const produto = { nome: "Produto", preco: 1.8 };
// const caneca = Object.assign({}, produto);

// caneca.nome = "Caneca";

// produto.preco = 10;
// console.log(produto);
// console.log(caneca);


// ----------------------------------   //usando Object.getOwnPropertyDescriptor( )   -------------------------------------

// const produto = { nome: "Produto", preco: 1.8 };

// console.log(produto);
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));



// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------   //usando Object.entries( )   -------------------------------------

// const produto = { nome: "Produto", preco: 1.8 };

// console.log(produto);
// for (let [chave, valor] of Object.entries(produto)) {
// console.log(chave, valor);
// }
