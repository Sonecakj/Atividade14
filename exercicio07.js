let soma = 0
let numero = [
    [],
    [],
    []
];

for(let linha = 0; linha < 3; linha++){
    for(let coluna = 0; coluna < 3; coluna++){
        numero[linha][coluna] = Number(prompt(`Digite um valor para a posição[${linha}][${coluna}]`));
    }
}

for(let linha = 0; linha < 3; linha++){
    for(let coluna = 0; coluna < 3; coluna++){
        if(linha === coluna){
            soma += numero[linha][coluna]; 
        }
    }
}

console.log(soma);