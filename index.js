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

// Set CC Value from local storage
characterCountText.innerHTML = inputElement.value.length;

// Clear storage
historyButton.addEventListener('click', clearStorage);
function clearStorage() {
  localStorage.clear();
  inputElement.value = '';
}

function copyTextFunction() {
  // Select the text field content declared above
  inputElement.select();

  // Copy the text inside the text field
  document.execCommand('copy');
}

// Change copy button text on click
const copyButton = document.querySelector('.CopyTextButton');

function copyButtonAnimation(e) {
  const el = e.currentTarget;
  el.textContent = ' Copied!';
  el.classList.add('button--bounce');
  setTimeout(function() {
    el.classList.remove('button--bounce');
    el.textContent = 'Copy Text';
  }, 300);
}

copyButton.addEventListener('click', copyButtonAnimation);
