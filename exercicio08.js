let matriz = [
    [],
    [],
    [],
    []
];

for(let linha = 0; linha < 4; linha++){
    for(let coluna = 0; coluna < 4; coluna++){
        if(linha === coluna){
            matriz[linha][coluna] = 1;
        }
        else{
            matriz[linha][coluna] = 0;
        }
    }
}
console.table(matriz);