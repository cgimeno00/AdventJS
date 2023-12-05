function findNaughtyStep(original, modified) {
  let palabra_original = [...original];
  let palabra_modificada = [...modified];
  if (palabra_modificada.length > palabra_original.length) {
    for (let i = 0; i < palabra_modificada.length; i++) {
      if (palabra_modificada[i] !== palabra_original[i]) {
        return palabra_modificada[i];
      } else {
        continue;
      }
    }
  } else {
    for (let i = 0; i < palabra_original.length; i++) {
      if (palabra_original[i] !== palabra_modificada[i]) {
        return palabra_original[i];
      } else {
        continue;
      }
    }
  }
  return "";
}
