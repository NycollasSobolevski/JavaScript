var par = []
var impar = []

function adiciona() {
    var numero = document.querySelector('#num').value;
    if(numero % 2 == 0 && par.length<5){
        par.unshift(numero)
    }
    else if (numero % 2 != 0 && impar.length<5) {
        impar.unshift(numero)   
    }
    console.log(par + '\n' + impar);
    console.log(sla());
}

function tirar() {
    impar = [...impar,par[0]]
    par = par.splice(1)
    console.log(impar);
    console.log(par);
}
// tirar()

function sla() {
    var a =[]
    for (let index = 0; index < par.length; index++) {
        if(par[index] % index == 0)    
            a.push(par[index])
        if(impar[index] % index == 0)    
            a.push(impar[index])
    }
    return a;
}

function Resposta() {
    const Resposta = document.getElementById('resposta')
}