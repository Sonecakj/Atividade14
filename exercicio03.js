let alunos = [];
for(let contador = 0; contador < 6; contador++){
    alunos[contador] = prompt(`Digite o nome do ${contador}° aluno`);
}
for(let contador = 5; contador >= 0; contador--){
    console.log(alunos[contador]);
}