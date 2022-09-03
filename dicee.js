var n1 = Math.floor( Math.random() * 6 ) + 1;
document.querySelector(".img1").setAttribute( "src", "images/dice" + n1 + ".png" );
var n2 = Math.floor( Math.random() * 6 ) + 1;
document.querySelector(".img2").setAttribute( "src", "images/dice" + n2 + ".png" );
if ( n1 > n2 ) {
  document.querySelector("h1").textContent = "Mellizo wins 🚩"
}
else if ( n1 < n2 ) {
  document.querySelector("h1").textContent = "🚩 Melliza wins"
}
else {
  document.querySelector("h1").textContent = "Draw !"
}
