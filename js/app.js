console.log("Mastermind")


  const min = 1;
  const max = 9

  // - dichiariamo una variabile alla quale assegneremo come valore, la quantità di numeri da creare (ovvero 4)
  const randomNumbers = 4

  // - creiamo un array vuoto che rappresenta dove poi pusheremo i numeri
  const numbers = [];
  
  // - creiamo un ciclo while che ci servirà per riempire questo array con 4 numeri che saranno le bombe che finiranno nel numero di cella corrispondente
  // - finché la lunghezza dell'array < della quantità di numeri da creare
  while (numbers.length < randomNumbers) {
      //genera un numero casuale
      const randomNumber = Math.floor(Math.random() * max) + min;

      //nella stessa cella può finire solo una bomba, quindi nell'array non possono finire numeri doppioni
      // - SE il numero non è contenuto nell'array allora pushalo
      if (numbers.includes(randomNumber) === false) {
          numbers.push(randomNumber)
      }

  }

  console.log(numbers)