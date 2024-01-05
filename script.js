document.getElementById('check-btn').addEventListener('click', () => {
  const userInput = document.getElementById('text-input').value.toLowerCase();
  const resultDiv = document.getElementById('result');

  if (userInput === '') {
    alert('Please input a word');
  } else {
    const cleanedInput = userInput.replace(/[^a-z0-9]/g, '');
    const reversedInput = cleanedInput.split('').reverse().join('');

    if (cleanedInput === reversedInput) {
      resultDiv.textContent = `${userInput} is a palindrome`;
    } else {
      resultDiv.textContent = `${userInput} is not a palindrome`;
    }
  }
});
