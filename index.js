const inputElement = document.querySelector('.textAreaBox');
const characterCountText = document.querySelector('.numberCount');
const historyButton = document.querySelector('.clearHistory');

inputElement.addEventListener('keyup', function(e) {
  userInput = e.target.value;
  characterCountText.innerHTML = userInput.length;

  // Store
  localStorage.setItem('userContent', userInput);
});

// Retrieve
inputElement.innerHTML = localStorage.getItem('userContent');

// Clear storage
historyButton.addEventListener('click', clearStorage);

function clearStorage() {
  localStorage.clear();
  inputElement.innerHTML = '';
}
