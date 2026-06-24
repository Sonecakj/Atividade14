let numero = [
    [],
    [],
    []
];

for(let linha = 0; linha < 3; linha++){
    for(let coluna = 0; coluna < 3; coluna++){
        numero[linha][coluna] = prompt(`Digite o valor para a posição [${linha}][${coluna}]`);
    }
}
console.table(numero)