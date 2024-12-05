function generarFibonacci() {
    const n = parseInt(document.getElementById('numero').value);
    const resultadoElemento = document.getElementById('resultado');
  
    if (isNaN(n) || n < 0) {
      resultadoElemento.textContent = "Por favor, introduce un número válido mayor o igual a 0.";
      return;
    }
  
    const fibonacci = [];
    if (n >= 0) fibonacci.push(0);
    if (n >= 1) fibonacci.push(1);
  
    while (true) {
      const siguiente = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
      if (siguiente > n) break;
      fibonacci.push(siguiente);
    }
  
    resultadoElemento.textContent = "Secuencia: " + fibonacci.join(", ");
  }
  