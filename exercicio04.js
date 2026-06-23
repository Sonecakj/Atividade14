let notas = [];
let alunos = 0;
let soma = 0;
for(let contador = 0; contador < 5; contador++){
    notas[contador] = Number(prompt(`Digite a média da nota do ${contador}° aluno`));
    soma += notas[contador];
}

let media = soma / 5;

for(let contador = 0; contador < 5; contador++){
    if(notas[contador] >= media){
        alunos++;
    }
}
console.log(`A quantidade de alunos que ficaria acima ou na da media foram ${alunos}`);
    