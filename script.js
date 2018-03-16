var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("#feelinLucky");

function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function generateRandomColor() {
	// generates random color string of '#XXXXXX' format and returns it
	var color = '#'
	var hexes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

	for (var i = 0; i < 6; i++) {
		color += hexes[Math.floor(Math.random() * hexes.length)];
	}
	return color;
}

setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

button.addEventListener('click', function() {
	color1.value = generateRandomColor();
	color2.value = generateRandomColor();
	setGradient();
});