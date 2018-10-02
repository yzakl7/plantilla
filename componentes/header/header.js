function addCss(fileName) {
    
    var head = document.head;
    var link = document.createElement("link");
    
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = fileName;
    
    head.appendChild(link);
    }

function handleOpenMenu(e){
    e ? e.preventDefault() : null;
    var main = document.getElementById('content') ;
    var mobileTopBar = document.getElementById('top-bar-movil') ;
    var header = document.getElementById('header') ;
    if(main.getAttribute("style") !== "transform: translateX(250px);"){
        main.style.transform = "translateX(250px)";
        mobileTopBar.style.transform = "translateX(250px)";
        header.style.transform = "translateX(0px)";
    }else{
        main.style.transform = "translateX(0)";
        mobileTopBar.style.transform = "translateX(0)";
        header.style.transform = "translateX(-255px)";

    }

    // if(contentWrapper.getAttribute("style") == ""){
    //     body.style.transform = "translateX(255px)"
    // }
}