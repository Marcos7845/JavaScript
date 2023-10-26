let num = [0,4,2,5,10,9,8]
let a = 6

num.push(a)
/*
for(pos = 0; pos<num.length;pos++){
console.log(`O elemento de posição ${pos} tem o valor de ${num[pos]}`)}
*/

for(let pos in num){
    console.log(`O elemento de posição ${pos} tem o valor de ${num[pos]}`)
}

