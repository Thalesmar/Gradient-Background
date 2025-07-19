const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const txtColor = document.querySelector('.txtColor');

const setGradient = () => {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

const textColorChange = () =>{
	txtColor.style.background = "linear-gradient(to right, rgba(255, 255, 255, 1), #05c6b3ff)";
	txtColor.style.webkitBackgroundClip = "text";
	txtColor.style.webkitTextFillColor = "transparent";
}

const resetTextColor = () => {
	txtColor.style.background = "";
	txtColor.style.webkitBackgroundClip = "";
	txtColor.style.webkitTextFillColor = "";
	txtColor.style.color = "red";
};


txtColor.addEventListener('mouseenter', textColorChange);

txtColor.addEventListener('mouseleave', resetTextColor);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);