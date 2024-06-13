document.addEventListener('DOMContentLoaded', () => {
  const value1Input = document.getElementById('value1');
  const value2Input = document.getElementById('value2');
  const value3Input = document.getElementById('value3');
  const result1Input = document.getElementById('result1');
  const result2Input = document.getElementById('result2');

  function calculate() {
    const value1 = parseFloat(value1Input.value) || 0;
    const value2 = parseFloat(value2Input.value) || 0;
    const value3 = parseFloat(value3Input.value) || 0;
    
    const result1 = value1 + value2; // Cambia esto por tu fórmula contable
    const result2 = value2 * value3; // Cambia esto por otra fórmula contable

    result1Input.value = result1;
    result2Input.value = result2;
  }

  value1Input.addEventListener('input', calculate);
  value2Input.addEventListener('input', calculate);
  value3Input.addEventListener('input', calculate);
});
