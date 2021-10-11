let clicks = 0;
function increaseCartNumber() {
	clicks += 1;
	document.getElementById("clicks").innerHTML = ' ' + clicks;
	document.getElementById("show-cart-qta").innerHTML = ' ';
	document.getElementById("show-cart-list").innerHTML = '<div> In Your cart: ' + '<b class="goldetex">' + clicks + '</b> guitar </div>';

};





















