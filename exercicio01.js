let numero = [];
let total=0;


for(let contador = 0; contador < 8; contador++){
    numero[contador] = Number(prompt("Digite um número"));
    total += numero[contador]
}
for(contador = 0; contador < 8; contador++){
    console.log(numero[contador])
}
console.log(total);