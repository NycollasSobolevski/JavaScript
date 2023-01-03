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


// Validando CPF

function ValidaCpf() {
    var cpf =  document.getElementById("cpf").value;
    isSequence = true
    cpf = Array.from(cpf.replace(/\D+/g, ""))
    
    for (let i = 0; i < cpf.length; i++) {
        const atual = cpf[i];
        if(atual != cpf[i-1])
            isSequence = false
        else
            isSequence = true
    }
    if (isSequence == true) 
        return false
    
    var FirstDigit = 0
    var SecondDigit = 0
    let count = 10


    cpf.forEach(element => {
        if (count >= 2) {
            FirstDigit += parseInt(element)*count
            count--
        }
    });
    FirstDigit = 11 - (FirstDigit % 11)
    if (FirstDigit > 9)
        FirstDigit = 0
    count = 11
    
    cpf.forEach(element => {
        if (count > 1) {
            SecondDigit += parseInt(element)*count
            count--
        }
    });
    SecondDigit = 11 - (SecondDigit % 11)

    if (SecondDigit > 9) {
        SecondDigit = 0
    }


    // ----------- teste -----------
    console.log(cpf);
    console.log(FirstDigit);
    console.log(SecondDigit);
    console.log('Sequencia' + isSequence);
    
    if (FirstDigit != cpf[cpf.length - 2] || SecondDigit != cpf[cpf.length - 1])
        document.getElementById("ResultadoCpf").innerHTML = 'CPF Invalido'
    else
        document.getElementById("ResultadoCpf").innerHTML = 'CPF Valido'
}

if (ValidaCpf(cpf) == false) {
    console.log('falso');
}
// Pett = "12278522906"
// ny = '133.036.559.36'
// cpf = "705.484.450-52"
// test = "111.111.111.11"
// document.getElementById("resultadoCpf").innerHTML = 'helo'

