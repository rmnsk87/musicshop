let clicks = 0;

const guitarTele = document.getElementById("telecaster");
const resultName = guitarTele.getAttribute("name");

function increaseCartNumber() {
	clicks += 1;
	document.getElementById("clicks").innerHTML = ' ' + clicks;
	document.getElementById("show-cart-qta").innerHTML = ' ';
	document.getElementById("show-cart-list").innerHTML = '<div>' + resultName + '</div>' + '<div>' + clicks + ' pcs. </div>';


};
return clicks
window.name = clicks;
document.getElementById("clicks").innerHTML = window.name;































