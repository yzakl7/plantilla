

function renderAsideLinks(activePage){
    
    
    
    console.log(activePage.split("#")[1]+'-link');
    var asideLink = document.getElementById(activePage.split("#")[1]+'-link')
    asideLink.style.color = "red"
}