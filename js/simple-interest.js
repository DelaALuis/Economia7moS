document.addEventListener('DOMContentLoaded', () => {
  const capitalInput = document.getElementById('capital');
  const rateInput = document.getElementById('rate');
  const timeInput = document.getElementById('time');
  const amountInput = document.getElementById('amount');
  const interestInput = document.getElementById('interest');
  const calculateBtn = document.getElementById('calculate-btn');

  // Función para calcular el monto total y el interés generado
  function calculate() {
    const capital = parseFloat(capitalInput.value) || 0;
    const rate = parseFloat(rateInput.value) / 100 || 0;
    const time = parseFloat(timeInput.value) || 0;

    // Fórmula para calcular el monto total M = C(1 + i * n)
    const amount = capital * (1 + rate * (time / 12));
    // Fórmula para calcular el interés generado I = M - C
    const interest = amount - capital;

    // Actualizar los campos de resultado con los valores calculados
    amountInput.value = amount.toFixed(2);
    interestInput.value = interest.toFixed(2);
  }

  // Agregar evento de clic al botón "Calcular"
  calculateBtn.addEventListener('click', calculate);
});
