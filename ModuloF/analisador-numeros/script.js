

var num = document.getElementById('txtn')
var select = document.getElementById('num')
var numero = Number(num.value)
var res = document.getElementById('resultado')
let valores = []

function isNumero(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    } else {
        return false
    }

}

function inLista (n,l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }

}


function adicionar(){

    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text= `Valor ${num.value} adicionado`
        select.appendChild(item)
        res.innerHTML =''

    } else{
        window.alert('Número inválido ou já adicionado')
    }
    num.value=''
    num.focus()
}
function finalizar(){
        if(valores.length == 0){
            window.alert('Favor adicionar números validos')

        }else{
            let total = valores.length
            let max = Math.max(...valores)
            let min = Math.min(...valores)
            let soma = 0
            let media = 0
            
            
            for(let pos in valores){
                soma+=valores[pos]
            }
            media = soma/total
            

            res.innerHTML = ''
            res.innerHTML += `O total de números adiconados é de ${total}`
            res.innerHTML += `<br>O maior valor informado é de ${(max)}`
            res.innerHTML += `<br>O maior valor informado é de ${(min)}`
            res.innerHTML += `<br>A soma dos valores é de  ${(soma)}`
            res.innerHTML += `<br>A média dos valores é de  ${(media)}`

        }
    

}
    
    
    
    /*foi criada duas funções, a primeiria isNumero, para verificar se o numero do input vai atender as condições da primeira função, e a segunda, inLista, vai verificar se os valores adicionadas ja se encotram na lista de valroes que esta sendo criada. O código só funcionara se ambas as funções tiverem retorno TRUE das funções anteriores, atenção no sinal de exclamação no !inlista, ele faz a função de negativo, assim como testes logicos !=*/


    /*if (num.value == 0 || num.value>100){
        window.alert('[ERRO] Digite um numero entre 1 e 100')
    } else{ 
        
        valores.push(num.value)
        let item = document.createElement('option')
        item.text= `Valor ${num.value} adicionado`
        select.appendChild(item)
        
        
        
        
    }*/



