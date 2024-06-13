document.addEventListener('DOMContentLoaded', () => {
  const amountInput = document.getElementById('amount');
  const rateInput = document.getElementById('rate');
  const timeInput = document.getElementById('time');
  const resultContainer = document.getElementById('result-container');
  const initialCapitalOutput = document.getElementById('initial-capital');
  const calculateButton = document.getElementById('calculate-initial-capital');

  calculateButton.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value) || 0;
    const rate = parseFloat(rateInput.value) / 100 || 0;
    const time = parseFloat(timeInput.value) || 0;
    
    const monthsToYears = time / 12;
    const denominator = Math.pow(1 + rate, monthsToYears);
    const initialCapital = amount / denominator;

    initialCapitalOutput.value = initialCapital.toFixed(2);
    resultContainer.style.display = 'block';
  });
});
