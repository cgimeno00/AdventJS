function decode(message) {
    let pila = [];
    let resultado = '';

    for (let char of message) {
        if (char === '(') {
            pila.push(resultado);
            resultado = '';
        } else if (char === ')') {
            resultado = pila.pop() + resultado.split('').reverse().join('');
        } else {
            resultado += char;
        }
    }

    return resultado;
}