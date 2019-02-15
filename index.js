var inputElement = document.getElementById('textAreaInput');
inputElement.addEventListener('keyup', function(e) {
	theirInput = e.target.value;
	document.getElementById('number').innerHTML = theirInput.length;
});
