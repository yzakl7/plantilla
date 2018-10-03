"use strict";
var cadena =  window.location.pathname,
    subCadena = cadena.split('/')[2],
    pages = document.getElementsByClassName("pagina"),
    aside = document.getElementById('aside'),
    asideContent = aside.innerHTML;
    subCadena ? null : subCadena = 'home';

function renderPage(url){
  var asideLink, activePage = document.getElementById(url?url:subCadena);
  
  console.log(url?url:subCadena);

  for(var i=0; i < pages.length; i++){ 
    pages[i].classList.remove('active');
  }
  
  activePage.classList.add('active'); 

  /* render aside */
  aside && activePage.id === "home" ? aside.innerHTML = "" : aside.innerHTML = asideContent;

  activePage.id ? asideLink = document.getElementById(activePage.id.split('#')[0]+'-link'):null ;
  asideLink?asideLink.style.display = 'flex':null;

  console.log(asideLink);

;}

function handleRedirect(url,aside){
  window.history.pushState( url, url,'./'+url);
  renderPage(url);
  aside?null:handleOpenMenu(); // para que no se ejecute abrir o cerrar menu al redireccionar desde el aside
}

window.onpopstate = function(event) {
  cadena =  window.location.pathname
  subCadena = cadena.split('/')[2];
  renderPage();
}

renderPage();