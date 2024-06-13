document.getElementById('calculate-interest-rate').addEventListener('click', function() {
  // Obtiene los valores ingresados por el usuario
  const amount = parseFloat(document.getElementById('amount').value); // Monto final (M)
  const capital = parseFloat(document.getElementById('capital').value); // Capital inicial (C)
  const time = parseFloat(document.getElementById('time').value); // Tiempo en meses (n)

  // Verifica si los valores ingresados son válidos
  if (!isNaN(amount) && !isNaN(capital) && !isNaN(time)) {
    // Calcula la tasa de interés usando la fórmula I = (M / C - 1) / n
    const interestRate = (amount / capital - 1) / time;

    // Muestra el resultado en el campo de texto "interest-rate"
    document.getElementById('interest-rate').value = (interestRate * 100).toFixed(2) + '%';

    // Muestra el contenedor de resultados
    document.getElementById('result-container').style.display = 'block';
  } else {
    // Muestra una alerta si los valores ingresados no son válidos
    alert('Por favor, ingresa valores válidos.');
  }
});
