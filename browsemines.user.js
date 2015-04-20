// ==UserScript==
// @name         Minethings - Browse Mines in sidebar
// @author       Eustache
// @namespace    minethings
// @version      0.1
// @description  Japhet removed the 'Browse Mines' button from the topbar for some reason. This adds it to the sidebar.
// @match        http://*.minethings.com
// @match        http://*.minethings.com/*
// @match        http://*.minethings.com/*/*
// @match        http://*.minethings.com/*/*/*
// @grant        none
// ==/UserScript==


liBrowse = document.createElement('li');
aBrowse = document.createElement('a');
aBrowse.href = "/mine_types/browse/";
aBrowse.innerHTML = "Browse Mines";
liBrowse.appendChild(aBrowse);

ul = document.getElementById("navlist");
ul.insertBefore(liBrowse, ul.getElementsByTagName("li")[2]);
