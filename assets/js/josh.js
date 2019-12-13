(function ($) {
  var text = ["Happy Birthday", "Bryce", ":^)"];
  var counter = 0;
  var elem = document.getElementById("spinner-josh");
  var inst = setInterval(change, 4000);

  function change() {
    elem.innerHTML = text[counter] || text[counter-1];
    counter++;
    if (counter >= text.length + 1) {
      counter = 0;
    }
  }
}) (jQuery);