document.addEventListener('DOMContentLoaded', () => {
  const amountInput = document.getElementById('amount');
  const initialCapitalInput = document.getElementById('initial-capital');
  const timeInput = document.getElementById('time');
  const resultContainer = document.getElementById('result-container');
  const interestRateOutput = document.getElementById('interest-rate');
  const calculateButton = document.getElementById('calculate-interest-rate');

  calculateButton.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value) || 0;
    const initialCapital = parseFloat(initialCapitalInput.value) || 0;
    const time = parseFloat(timeInput.value) || 0;

    if (initialCapital > 0 && time > 0) {
      const monthsToYears = time / 12;
      const interestRate = Math.pow(amount / initialCapital, 1 / monthsToYears) - 1;

      interestRateOutput.value = (interestRate * 100).toFixed(2) + '%';
      resultContainer.style.display = 'block';
    } else {
      alert('Por favor, ingrese valores válidos.');
    }
  });
});
