function par(numero) {
  if (numero % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(par(4));

function elefante(qtdElefantes) {
  var letra = `1 elefante incomoda muita gente \n`;

  for (var i = 2; i <= qtdElefantes; i++) {
    if (par(i)) {
      letra += `${i} elefantes \n`;
      for (let j = 1; j <= i; j++) {
        letra += `incomodam,`;
      }
      letra += `muito mais \n`;
    } else {
      letra += `${i} elefantes incomodam muita gente \n`;
    }
  }

  console.log(letra);

  for (var i = qtdElefantes; i > 1; i--) {
    if (!par(i)) {
      letra += `${i} elefantes \n`;
      for (let j = 1; j <= i; j++) {
        letra += `incomodam,`;
      }
      letra += `incomodam muito menos \n \n`;
    } else {
      letra += `${i} elefantes incomodam muita gente \n`;
    }
        letra +- '1 elefante incomoda muito menos \n'
    console.log(letra);
  }
}

elefante(100);