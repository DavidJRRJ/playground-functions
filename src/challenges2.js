// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
