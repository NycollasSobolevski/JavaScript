// Baixar Node.js para testar na saida do VSCode
// atalho saida: CTRL + SHIFT + U
// atalho rodar: CTRL + ALT + N


// console.log('Hello World!');

// const verdadeira = true;

// let nome = "Luiz"; //criando
// var nome2 = "Alberto"; //criando

// if(verdadeira){
//     let nome = "Joana"; //criando
//     var nome2 = 'Catarina'; //redeclarando
//     if(verdadeira){
//         var nome2 = 'Outro nome'; // redeclarando
//         let nome = 'Roberto'; //criando
//     }
// }
// console.log(nome,nome2);

// function sobrenome(){
//     var sobrenome = 'Fredericksen';
// }
// var nome2 = sobrenome();
// console.log(sobrenome); // erro, pois a variável foi declarada apenas na função.
// console.log(Boolean(false));
// console.log(Boolean(NaN));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(""));
// console.log(Boolean(''));
// console.log(Boolean(0));
// // Todos


// console.log("Nome" && 25 && 2.88 && "Esse vai sermostrado");    // como todas as condicoes sao verdadeiras, sera printado a ultima condicao
// console.log("Nome" && 25 && 2.88 && undefined && "Esse não vai ser mostrado");     //como nem todas as condicoes sao verdadeiras, a ultima nao verdadeira

// const pontuacaoUsuario = 1000;
// const tipoUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal'; // (condição) ? (valor verdadeiro) : (valor falso)

// console.log(tipoUsuario);


// console.log("B" + 'a' + + 'i' + 'a');


// const nums = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// var nums_filter = nums.filter((valor, indice, array) =>
//     console.log(indice, valor, array[indice]));

// console.log(nums);



// exercicio 01 

function EXC01() {
    // PT 01
    const nums = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
    var a = [1,2,3,4,5,...nums.splice(3)]
    // console.log(a)

    // PT 02
    var b = a.filter((value,index,array) => array[index] % 3 ==0) 
    // console.log(b)

    // PT 03
    var c = a.map((value,index,array) => array[index]*array[index])
    // console.log(c)

    // PT 04
    var d = a.reduce((previous,current) => current+previous) - 200
    // console.log(d)
}
// EXC01();


