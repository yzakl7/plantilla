var head = document.head;
function addCss(fileName) {
    
    var link = document.createElement("link");

    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = fileName;
    
    head.appendChild(link);
}
function addJs(fileName) {
    
    var script = document.createElement("script");
    script.src = fileName;
    
    head.appendChild(script);
    }


function handleOpenMenu(e){
    e ? e.preventDefault() : null;
    // var main = document.getElementById('content') ;
    // var mobileTopBar = document.getElementById('top-bar-movil') ;
    var header = document.getElementById('header') ;
    // var footer = document.getElementById('footer');
    console.log(header.getAttribute("style"));
    if(!header.getAttribute("style") || header.getAttribute("style") == "transform: translateX(-255px);"){
        // main.style.transform = "translateX(250px)";
        // footer.style.transform = "translateX(250px)";
        // mobileTopBar.style.transform = "translateX(250px)";
        header.style.transform = "translateX(0px)";
    }else{
        // main.style.transform = "translateX(0)";
        // footer.style.transform = "translateX(0)";
        // mobileTopBar.style.transform = "translateX(0)";
        header.style.transform = "translateX(-255px)";

    }

    // if(contentWrapper.getAttribute("style") == ""){
    //     body.style.transform = "translateX(255px)"
    // }
}

function gotoLink(e){
    e.preventDefault();
    window.location = 'https://cp.mipanelhost.com/domainchecker.php'
}