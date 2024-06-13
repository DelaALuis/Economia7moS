document.addEventListener('DOMContentLoaded', () => {
  const finalAmountInput = document.getElementById('finalAmount');
  const capitalInput = document.getElementById('capital');
  const interestRateInput = document.getElementById('interestRate');
  const interestGeneratedInput = document.getElementById('interestGenerated');
  const time1Input = document.getElementById('time1');
  const time2Input = document.getElementById('time2');
  const calculateButton = document.getElementById('calculate-time');

  function calculateTime() {
    const M = parseFloat(finalAmountInput.value) || 0;
    const C = parseFloat(capitalInput.value) || 0;
    const i = parseFloat(interestRateInput.value) / 100 || 0;
    const I = parseFloat(interestGeneratedInput.value) || 0;

    const time1 = (M / C - 1) / i; 
    const time2 = I / (C * i); 

    time1Input.value = time1.toFixed(2) + " años";
    time2Input.value = time2.toFixed(2) + " años";
  }

  calculateButton.addEventListener('click', calculateTime);
});
