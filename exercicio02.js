let temperatura = [];
let maiorTemp = -Infinity;
let indiceTemp;
for(let contador = 0; contador < 10; contador++){
    temperatura[contador] = Number(prompt(`Digite a temperatura média registrada no ${contador}° dia`));
    if(temperatura[contador] > maiorTemp){
        maiorTemp = temperatura[contador];
        indiceTemp = contador;
    }
}
console.log(`A maior temperatura registrada foi ${maiorTemp} no ${indiceTemp}° dia`);