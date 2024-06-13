document.getElementById('calculate-initial-capital').addEventListener('click', function() {
  // Obtiene los valores ingresados por el usuario
  const amount = parseFloat(document.getElementById('amount').value); // Monto final (M)
  const rate = parseFloat(document.getElementById('rate').value) / 100; // Tasa de interés (i)
  const time = parseFloat(document.getElementById('time').value); // Tiempo en meses (n)

  // Verifica si los valores ingresados son válidos
  if (!isNaN(amount) && !isNaN(rate) && !isNaN(time)) {
    // Calcula el capital inicial usando la fórmula C = M / (1 + i * (n / 12))
    const initialCapital = amount / (1 + rate * (time / 12));

    // Muestra el resultado en el campo de texto "initial-capital"
    document.getElementById('initial-capital').value = initialCapital.toFixed(2);

    // Muestra el contenedor de resultados
    document.getElementById('result-container').style.display = 'block';
  } else {
    // Muestra una alerta si los valores ingresados no son válidos
    alert('Por favor, ingresa valores válidos.');
  }
});
