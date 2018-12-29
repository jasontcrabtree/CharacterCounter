console.log("app is ready");
var inputElement = document.getElementById("textAreaInput");
inputElement.addEventListener("keyup", function(e) {
  theirInput = e.target.value;
  document.getElementById("text").innerHTML = theirInput.length;
});
