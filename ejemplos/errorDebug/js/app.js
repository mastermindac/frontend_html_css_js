function piramide(numPisos) {
    for (let i = 0; i < numPisos; i++) {
      let piso = ' ';
      for (let j = 0; j < i; j++) {
        piso = piso + '*';
      }
      console.log(piso)
    }
  }
  
  piramide(5);