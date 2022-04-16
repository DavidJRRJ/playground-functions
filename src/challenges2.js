// Desafio 11
function generatePhoneNumber(number) {
  let numTel = [...number];
  let numC = ["(", numTel[0], numTel[1],")", " ", numTel[2], numTel[3], numTel[4], numTel[5], numTel[6], "-", numTel[7], numTel[8], numTel[9], numTel[10]];
  let numAjustado;
  if (numTel.length != 11){
    return("Array com tamanho incorreto.");
  }
  else if (numTel.length == 11) {
    for (let j = 0; j < numTel.length; j++){
      let repNum = 0;
      if (numTel[j] < 0 || numTel[j] > 9){
        return("não é possível gerar um número de telefone com esses valores");
      }   
      for (let index = 0; index < numTel.length; index++){
        if (numTel[j] === numTel[index]){       
          repNum += 1;
        }        
      } 
      if (repNum > 2){
        return ("não é possível gerar um número de telefone com esses valores")
      }   
    }
  } 
  return numC.join('',',');
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > (lineB + lineC) || lineB > (lineA + lineC) || lineC > (lineA + lineB)) return(false);
  else if (lineA < Math.abs(lineC - lineB) || lineB < Math.abs(lineC - lineA) || lineC < Math.abs(lineB - lineA)) return(false);
  else return(true);
}

// Desafio 13
function hydrate(agua) {
  let regex = /\d+/g;
  let num = agua.match(regex);
  let soma = 0
  let msg; 
  for(let i = 0; i < num.length; i++){
    soma += parseInt(num[i]);
  }
  if (soma === 1) msg = soma + ' ' + 'copo de água';
  else msg = soma + ' ' + 'copos de água';
  return(msg);
}
//console.log(hydrate("Beba 1 copo de cerveja e 3 vodcas"));
module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
