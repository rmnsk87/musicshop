function OpenBurgerMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "main_nav") {
    x.className += " responsive";
  } else {
    x.className = "main_nav";
  }
}
