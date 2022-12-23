var Calculo = ''
function Insert(num) {
    Calculo = Calculo + num
    document.getElementById('display').value = Calculo
}
function Zera() {
    Calculo = ''
    document.getElementById('display').value = Calculo
}
function Resultado() {
    Calculo = eval(Calculo)
    document.getElementById('display').value = Calculo
    Calculo=''
}

function FunctionOperation(OP) {
    Calculo+=OP
    document.getElementById('display').value = Calculo
}