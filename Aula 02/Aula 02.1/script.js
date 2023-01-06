// Validando CPF


function adicionaPontos() { // Adicionando a pontuacao correta de CPF
    var cpf = document.getElementById("cpf").value
    cpf = Array.from(cpf.replace(/\D+/g, ""))

    cpf.length >= 3 ? cpf.splice(3, 0, '.') : null
    cpf.length >= 6 ? cpf.splice(7, 0, '.') : null
    cpf.length >= 9 ? cpf.splice(11, 0, '-') : null

    cpf = String(cpf).replaceAll(",", "");
    (String(cpf.value).length == 11) ? cpf.value += "-" : null

    document.getElementById("cpf").value = cpf
}
function ValidaCpf() {
    var cpf = document.getElementById("cpf").value;
    isSequence = true
    cpf = Array.from(cpf.replace(/\D+/g, ""))
    for (let i = 0; i < cpf.length; i++) {
        const atual = cpf[i];
        if (atual != cpf[i - 1])
            isSequence = false
        else
            isSequence = true
    }
    if (isSequence == true)
        document.getElementById("ResultadoCpf").innerHTML = 'CPF Invalido'

    let FirstDigit = 0
    let SecondDigit = 0
    let count = 10


    cpf.forEach(element => {
        if (count >= 2) {
            FirstDigit += parseInt(element) * count
            count--
        }
    });
    FirstDigit = 11 - (FirstDigit % 11)
    if (FirstDigit > 9)
        FirstDigit = 0
    count = 11

    cpf.forEach(element => {
        if (count > 1) {
            SecondDigit += parseInt(element) * count
            count--
        }
    });
    SecondDigit = 11 - (SecondDigit % 11)

    if (SecondDigit > 9) {
        SecondDigit = 0
    }

    if (FirstDigit != cpf[cpf.length - 2] || SecondDigit != cpf[cpf.length - 1])
        document.getElementById("ResultadoCpf").innerHTML = 'CPF Invalido'
    else if (cpf < 1)
        document.getElementById("ResultadoCpf").innerHTML = 'CPF Invalido'
    else
        document.getElementById("ResultadoCpf").innerHTML = 'CPF Valido'
}

function cpf(cpf) {
    isSequence = true
    cpf = Array.from(cpf.replace(/\D+/g, ""))
    for (let i = 0; i < cpf.length; i++) {
        const atual = cpf[i];
        if (atual != cpf[i - 1])
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
            FirstDigit += parseInt(element) * count
            count--
        }
    });

    FirstDigit = 11 - (FirstDigit % 11)
    if (FirstDigit > 9)
        FirstDigit = 0
    count = 11

    cpf.forEach(element => {
        if (count > 1) {
            SecondDigit += parseInt(element) * count
            count--
        }
    });
    SecondDigit = 11 - (SecondDigit % 11)
    if (SecondDigit > 9) {
        SecondDigit = 0
    }

    if (FirstDigit != cpf[cpf.length - 2] || SecondDigit != cpf[cpf.length - 1])
        return false
    else if (cpf < 1)
        return false

    return true
}
// Gerando CPF
function GerarCpf() {
    let ValorEstado = document.getElementById("Estados").value
    let cpf = ''
    for (let i = 0; i < 8; i++)
        cpf += Math.floor(Math.random() * 10)
    cpf+=ValorEstado;
    let count = 10
    cpf = Array.from(cpf)
    let sum = 0
    cpf.forEach(element => {
        if (count >= 2) {
            sum += parseInt(element) * count
            count--
        }
    });
    cpf.push(String(11 - (sum % 11)) <= 9 ? String(11 - (sum % 11)) : '0')
    count = 11
    sum = 0
    cpf.forEach(element => {
        if (count > 1) {
            sum += parseInt(element) * count
            count--
        }
    });
    cpf.push(String(11 - (sum % 11)) <= 9 ? String(11 - (sum % 11)) : '0')
    document.getElementById("cpf").value = String(cpf).replace(/\D+/g, "")
}

function mascara(o, f) {
    v_obj = o
    v_fun = f
    setTimeout("execmascara()", 1)
}
function execmascara() {
    v_obj.value = v_fun(v_obj.value)
}

function cpf(v) {
    v = v.replace(/\D/g, "")                    //Remove tudo o que não é dígito
    v = v.replace(/(\d{3})(\d)/, "$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
    v = v.replace(/(\d{3})(\d)/, "$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
    //de novo (para o segundo bloco de números)
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2") //Coloca um hífen entre o terceiro e o quarto dígitos
    return v
}


function BuscaEstado() {
    var cpf = document.getElementById("cpf").value;
    cpf = Array.from(cpf.replace(/\D+/g, ""))
    let IdEstado = cpf[8]
    switch (IdEstado) {
        case '1':
            document.getElementById('TextEstado').innerHTML = "DF, Goias, Mato Grosso do Sul ou Tocantins";
            break;
        case '2':
            document.getElementById('TextEstado').innerHTML = "Acre, Pará, Amazonas, Amapá, Roraima ou Rondônia";
            break;
        case '3':
            document.getElementById('TextEstado').innerHTML = "Ceará, Maranhão ou Piauí";
            break;
        case '4':
            document.getElementById('TextEstado').innerHTML = "Pernambuco, Rio Grande do Norte, Paraiba ou Alagoas";
            break;
        case '5':
            document.getElementById('TextEstado').innerHTML = "Bahia ou Sergipe";
            break;
        case '6':
            document.getElementById('TextEstado').innerHTML = "Minas Gerais";
            break;
        case '7':
            document.getElementById('TextEstado').innerHTML = "Rio de Janeiro ou Espirito Santo";
            break;
        case '8':
            document.getElementById('TextEstado').innerHTML = "São Paulo";
            break;
        case '9':
            document.getElementById('TextEstado').innerHTML = "Parana ou Santa Catarina";
            break;
        case '0':
            document.getElementById('TextEstado').innerHTML = "Rio Grande do Sul";
            break;
    
        default:
            break;
    }
}

// Pett = "12278522906"
// ny = '133.036.559.36'
// cpf = "705.484.450-52"
// test = "111.111.111.11"
// document.getElementById("resultadoCpf").innerHTML = 'helo'
