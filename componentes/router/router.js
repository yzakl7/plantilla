"use strict";
var cadena =  window.location.pathname,
    subCadena = cadena.split('/')[2];

var pages = document.getElementsByClassName("pagina");

function renderPage(url){
  var activePage = document.getElementById(url?url:subCadena);

  for(var i=0; i < pages.length; i++){ 
    pages[i].classList.remove('active');
  }
  
  activePage.classList.add('active'); 
;}

function handleRedirect(url){
  window.history.pushState( url, url,'./'+url);
  renderPage(url);
  handleOpenMenu();
}

window.onpopstate = function(event) {
  cadena =  window.location.pathname
  subCadena = cadena.split('/')[2];
  renderPage();
}

renderPage();