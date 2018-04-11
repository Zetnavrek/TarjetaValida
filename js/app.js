do{ var card = prompt("Ingresa los 16 digitos de la tarjeta.");
}while(isNaN(card) || (card.length !== 16));
var array = []; //Se guarda el numero

  for(var i = card.length -1; i >= 0; i--){
    array.push(parseInt(card[i]));
  }
  console.log(array);
  console.log(isValidCard(card));

  function isValidCard(){
    var sumPairs = 0;
    for (var k = 1; k <= array.length -1; k += -2){
      var mult = array[k] *= 2;
      if(mult > 9){
        sumPairs = sumPairs + (Number(mult.toString().charAt(0)) + Number (mult.toString().charAt(1)));
      }else{
        sumPairs += mult;
      }

      console.log(mult);
      console.log(array);
    }
    console.log("Suma pares " + sumPairs);
    var sumaImpares = 0;
    for(var m = 0; m <= array.length -1; m += 2){
      sumaImpares += array[m];
   }
   console.log("suma impares " + sumaImpares);
   var sumaTotal = sumPairs + sumaImpares;
   console.log("Suma total " + sumaTotal);
   if (sumaTotal % 10 === 0){
     return "tarjeta es valida";
   }else{
     return "tu tarjeta es invalida";
   }
  }
isValidCard(card):
