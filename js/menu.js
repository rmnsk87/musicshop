function OpenBurgerMenu() {
  const topNav = document.getElementById("menu-contain");
  if (topNav.className === "main_nav") {
    topNav.className += " responsive";
  } else {
    topNav.className = "main_nav";
  }
}
