var inputElement = document.getElementById('textAreaInput');
inputElement.addEventListener('keyup', function(e) {
	theirInput = e.target.value;
	document.getElementById('number').innerHTML = theirInput.length;
});

// function logChangeToTextArea() {
//   const textArea = document.querySelector('#textArea').value.length;
//   console.log(textArea);
// }
