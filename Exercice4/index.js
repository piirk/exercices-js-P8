document.getElementById("myButton").addEventListener("click", function() {
  // create a paragraph element under the button
  let paragraph = document.createElement("p");
  paragraph.textContent = "Bonjour, vous avez cliqué sur le bouton !";
  document.body.appendChild(paragraph);
});