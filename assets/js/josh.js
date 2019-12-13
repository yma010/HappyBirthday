(function ($) {
  var text = ["Happy Birthday", "Bryce", ":^)"];
  var counter = 0;
  var elem = document.getElementById("spinner-josh");
  var inst = setInterval(change, 3000);

  function change() {
    elem.innerHTML = text[counter];
    counter++;
    if (counter >= text.length) {
      counter = 0;
    }
  }
}) (jQuery);