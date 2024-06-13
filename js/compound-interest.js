document.addEventListener('DOMContentLoaded', () => {
  function calculateCompoundInterest() {
    // Obtener los valores de entrada
    const capitalInput = document.getElementById('capital');
    const rateInput = document.getElementById('rate');
    const periodsInput = document.getElementById('periods');
    const timeInput = document.getElementById('time');
    const amountOutput = document.getElementById('amount');
    const interestOutput = document.getElementById('interest');

    const capital = parseFloat(capitalInput.value) || 0;
    const rate = parseFloat(rateInput.value) / 100 || 0;
    const periods = parseFloat(periodsInput.value) || 0;
    const time = parseFloat(timeInput.value) || 0;

    // Calcular el monto total usando la fórmula de interés compuesto
    const amount = capital * Math.pow((1 + rate / periods), (periods * time));
    // Calcular el interés generado
    const interest = amount - capital;

    // Mostrar los resultados en los campos de salida
    amountOutput.value = amount.toFixed(2);
    interestOutput.value = interest.toFixed(2);
  }

  // Añadir evento al botón de calcular
  document.getElementById('calculate-button').addEventListener('click', calculateCompoundInterest);
});
