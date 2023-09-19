"use strict";

document.getElementById("calcForm").addEventListener("submit", function (event) {
  event.preventDefault();
  var ca = parseInt(document.getElementById("ca").value);
  var a = parseInt(document.getElementById("a").value);
  var r = parseInt(document.getElementById("r").value);
  var cr = parseInt(document.getElementById("cr").value);
  document.getElementById("ratio").value = ca + 0.5 * a + ":" + (3 + 1.5 * (cr + 0.5 * r));
  ca + 0.5 * a >= 3 + 1.5 * (cr + 0.5 * r) ? document.getElementById("ratio").style.setProperty("color", "rgb(15, 224, 15)") : document.getElementById("ratio").style.setProperty("color", "red");
});