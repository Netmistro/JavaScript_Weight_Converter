// Constants Here
const inputElement = document.getElementById('pounds-input');
const kilogramsElement = document.querySelector('.kilograms');
const ouncesElement = document.querySelector('.ounces');
const gramsElement = document.querySelector('.grams');
const outputContainer = document.getElementById('output');

// Event Listeners Here
inputElement.addEventListener('input', (e) => {
  console.log(e.target.value);
  if (e.target.value === '' || e.target.value === '0') {
    // If value is null, hide container
    outputContainer.style.visibility = 'hidden';
  } else {
    // Make container visible
    outputContainer.style.visibility = 'visible';
    // Perform calculations
    kilogramsElement.innerText = parseFloat(
      e.target.value * 0.453592
    ).toLocaleString('en-US');
    ouncesElement.innerText = parseFloat(e.target.value * 16).toLocaleString(
      'en-US'
    );
    gramsElement.innerText = parseFloat(
      e.target.value * 453.592
    ).toLocaleString('en-US');
  }
});

// Hide Container on Startup or load
window.onload = (e) => {
  outputContainer.style.visibility = 'hidden';
};
