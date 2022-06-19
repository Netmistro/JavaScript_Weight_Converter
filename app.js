// Constants Here
const inputElement = document.getElementById('pounds-input');
const kilogramsElement = document.querySelector('.kilograms');
const ouncesElement = document.querySelector('.ounces');
const gramsElement = document.querySelector('.grams');
const outputContainer = document.getElementById('output');

// Event Listeners Here
inputElement.addEventListener('input', (e) => {
  weight = inputElement.toLocaleString('en-US');

  outputContainer.style.visibility = 'visible';
  kilogramsElement.innerText = parseFloat(
    e.target.value * 0.453592
  ).toLocaleString('en-US');
  ouncesElement.innerText = parseFloat(e.target.value * 16).toLocaleString(
    'en-US'
  );
  gramsElement.innerText = parseFloat(e.target.value * 453.592).toLocaleString(
    'en-US'
  );
});

// Hide Container on Startup or load
window.onload = (e) => {
  outputContainer.style.visibility = 'hidden';
};

// Javascript File
