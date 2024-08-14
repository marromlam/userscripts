// ==UserScript==
// @namespace   confused
// @name        Marcos Romero Lamas
// @version     1
// @description removes the overlay div that asks to subscribe
// @match       *://*/*
// @grant       none
// @noframes
// @run-at      document-end
// ==/UserScript==

window.onload = function () {
  var todelete = document.getElementById("div#credential_picker_container");
  todelete.remove();
};

// useful for logging window.onload = function () {
// useful for logging   var s = document.createElement("script");
// useful for logging   s.type = "text/javascript";
// useful for logging   var code = 'alert("hello world!");';
// useful for logging   try {
// useful for logging     s.appendChild(document.createTextNode(code));
// useful for logging     document.body.appendChild(s);
// useful for logging   } catch (e) {
// useful for logging     s.text = code;
// useful for logging     document.body.appendChild(s);
// useful for logging   }
// useful for logging };

