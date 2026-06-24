let soma1 = 0;
let soma2 = 0;
let soma3 = 0;
let pontuacao = [
    [], [], [], [],
    [], [], [], [],
    [], [], [], []
];

for(let linha = 0 ; linha < 3; linha++){
    
    for(let coluna = 0; coluna < 4; coluna++){
    pontuacao[linha][coluna] = Number(prompt("Digite um valor"));
    }
}

for(let linha = 0 ; linha < 1; linha++){
    
    for(let coluna = 0; coluna < 4; coluna++){
soma1 +=pontuacao[linha][coluna];
    }
}

console.log(soma1);

for(let linha = 1 ; linha < 2; linha++){
    
    for(let coluna = 0; coluna < 4; coluna++){
soma2 +=pontuacao[linha][coluna];
    }
}

console.log(soma2);

for(let linha = 2 ; linha < 3; linha++){
    
    for(let coluna = 0; coluna < 4; coluna++){
soma3 +=pontuacao[linha][coluna];
    }
}

console.log(soma3);