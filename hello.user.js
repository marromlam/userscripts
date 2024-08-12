// ==UserScript==
// @name      PWA-Everything
// @author    Marcos Romero
// @version   0.0.1
// @match     *://*/*
// @grant     none
// @run-at    document-idle
// @noframes
// ==/UserScript==

var addedElement = document.createElement('p');
addedElement.appendChild(document.createTextNode('Hello, world!'));

var body = document.body;
body.insertBefore(addedElement, body.firstChild);
