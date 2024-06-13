document.addEventListener('DOMContentLoaded', () => {
  const amountInput = document.getElementById('amount');
  const capitalInput = document.getElementById('capital');
  const resultContainer = document.getElementById('result-container');
  const discountOutput = document.getElementById('discount');
  const calculateButton = document.getElementById('calculate-discount');

  calculateButton.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value) || 0;
    const capital = parseFloat(capitalInput.value) || 0;

    if (amount > 0 && capital > 0 && amount > capital) {
      const discount = amount - capital;
      discountOutput.value = `$${discount.toFixed(2)}`;
      resultContainer.style.display = 'block';
    } else {
      alert('Por favor, ingrese valores válidos.');
    }
  });
});
