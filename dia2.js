function manufacture(gifts, materials) {
    var sePuedenFabricar = [];
  
    for (let i = 0; i < gifts.length; i++) {
      var palabra = gifts[i];
  
      // Verifica si cada carácter de la palabra está presente en los materiales
      if ([...palabra].every(caracter => materials.includes(caracter))) {
        // Si todos los caracteres de la palabra están presentes, agrega la palabra a la lista de regalos fabricados
        sePuedenFabricar.push(palabra);
      }
    }
  
    return sePuedenFabricar;
  }
  
  // Ejemplo de uso
  var regalos = ["toy", "boat", "car"];
  var materiales = "toyotabccar";
  
  var regalosFabricados = manufacture(regalos, materiales);
  console.log(regalosFabricados);
  