// console.log('hello');

// function myFunction() {
// 	var x = document.getElementById('copyTextInput').value;
// 	console.log(x);
// }

// var textArea = document.getElementById

function copyTextFunction() {
	// Get the text field
	var copyText = document.getElementById('textAreaInput');

	// Select the text field
	copyText.select();

	// Copy the text inside the text field
	document.execCommand('copy');

	// alert('Copied the text: ' + copyText.value);
}
