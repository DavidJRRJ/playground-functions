// Desafio 1
function compareTrue(a, b) {
  if(a == true && b == true) return(true);
  else if (a == false && b == false) return(false);
  else return(false);
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return(area);
}

// Desafio 3
function splitSentence(frase) {
  let arrayText = frase.split(" ");
  return(arrayText);
}

// Desafio 4
function concatName(arrName) {
  const first = arrName[0];
  arrName.reverse();
  const last = arrName[0]; 
  let result = [];
  result.push(last, first);
  return(result.join(", "));
}

// Desafio 5
function footballPoints(wins, ties) {
  let win = wins * 3;
  let tie = ties * 1;
  resultJogos = win + tie;
  return(resultJogos);
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
