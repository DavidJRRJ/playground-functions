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
function highestCount(arrNum) { 
  let repete = 0;
  let maior = Math.max(...arrNum);
  for(let i = 0; i < arrNum.length; i++){
    if (arrNum[i] === maior){
      repete++;
    }
  }
  return(repete);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(mouse - cat1);
  let dist2 = Math.abs(mouse - cat2);
  if (dist1 < dist2) return("cat1");
  else if (dist2 < dist1) return("cat2");
  else if (dist1 === dist2) return("os gatos trombam e o rato foge");
}

// Desafio 8

function fizzBuzz(numArray) { 
  let fizzArray = [];
  for (let i = 0; i < numArray.length; i++){  
    if (numArray[i] % 3 === 0 && numArray[i] % 5 === 0) fizzArray.push('fizzBuzz');
    else if (numArray[i] % 5 === 0) fizzArray.push('buzz');
    else if (numArray[i] % 3 === 0) fizzArray.push('fizz');
    else fizzArray.push('bug!');
  }
  return(fizzArray);
}

// Desafio 9
let codifica;
function encode(codifica) {
  codifica = codifica.replace(/a/g, '1');
  codifica = codifica.replace(/e/g, '2');
  codifica = codifica.replace(/i/g, '3');
  codifica = codifica.replace(/o/g, '4');
  codifica = codifica.replace(/u/g, '5');
  return(codifica);
}
let decodifica;
function decode(decodifica) {
  decodifica = decodifica.replace(/1/g, 'a');
  decodifica = decodifica.replace(/2/g, 'e');
  decodifica = decodifica.replace(/3/g, 'i');
  decodifica = decodifica.replace(/4/g, 'o');
  decodifica = decodifica.replace(/5/g, 'u');
  return(decodifica);
}

// Desafio 10
function techList(tecnologia, nome) {
  let listaArray = [];
  tecnologia.sort();
  if (tecnologia.length === 0) return('Vazio!');
  for (let i = 0; i < tecnologia.length; i++){
    let obj = {
      tech: tecnologia[i],
      name: nome
    }
    listaArray.push(obj);
  }
  return(listaArray);
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
