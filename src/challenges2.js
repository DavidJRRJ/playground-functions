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
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
