let codigo = [];
let encontrado = false;

for(let contador = 0; contador < 10; contador++){
    codigo[contador] = Number(prompt(`Digite o valor da posição ${contador}`));
    
}
let busca = Number(prompt("Qual código você deseja rastrear?"));

for(let contador = 0; contador <10; contador++){
    if(codigo[contador] === busca){
        console.log(`Código encontrado na ${contador}° posição`);
        encontrado = true
        break;
    }
}
if(encontrado === false){
        console.log(`Código não encontrado`);
    }
