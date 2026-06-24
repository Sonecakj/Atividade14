let matrizA = [[], []];
let matrizB = [[], []];
let matrizC = [[], []];

for(let linha = 0; linha < 2; linha++){
    for(let coluna = 0; coluna < 3; coluna++){
        matrizA[linha][coluna] = Number(prompt(`MatrizA: Digite um valor na posição [${linha}][${coluna}]`));
    }
}

for(let linha = 0; linha < 2; linha++){
    for(let coluna = 0; coluna < 3; coluna++){
        matrizB[linha][coluna] = Number(prompt(`MatrizB: Digite um valor na posição [${linha}][${coluna}]`));
    }
}

for(let linha = 0; linha < 2; linha++){
    for(let coluna = 0; coluna < 3; coluna++){
        matrizC[linha][coluna] = matrizA[linha][coluna] + matrizB[linha][coluna];
    }
}

console.table(matrizC);