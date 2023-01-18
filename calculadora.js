function inserir(num){
    document.querySelector('#res').innerHTML += num
}

function zerar(){
    document.querySelector('#res').innerHTML = ""
}

function apagarUm(){
   var resultado =  document.querySelector('#res').innerHTML
   document.querySelector('#res').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular(){
    var resultado = document.querySelector('#res').innerHTML

    if(resultado){
        document.querySelector('#res').innerHTML = eval(resultado)
    }

    if(resultado.length == '0'){
        document.querySelector('#res').innerHTML = ''
        alert("Nenhuma operação para calcular")
    }
}