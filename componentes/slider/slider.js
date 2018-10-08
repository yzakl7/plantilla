var slider = document.getElementById('wl-slider');

var diapositivas = [
    {
        titulo: 'HOLA! INTERNET!',
        descripcion: 'Fusionando la tradición con la modernidad, Galletas Dondé utiliza las tendencias actuales en tecnología para fortalecer vínculos con sus consumidores.',
        link: 'https://www.weblogica.mx/sitio-web/galletas-donde/',
        img: './componentes/slider/img/donde.jpg',
        alt:'Dondé'
    },
    {
        titulo: 'ESTRENANDO SITIO WEB',
        descripcion: 'Creamos para Mazda Sureste un sitio web creativo y funcional, al mismo nivel de las grandes marcas.',
        link: 'https://www.weblogica.mx/sitio-web/mazda-sureste-sitio-web/',
        img: './componentes/slider/img/mazda.jpg',
        alt:'Mazda'
    },
    


]
/* Reder de diapositivas */
for(var i = 0; i < diapositivas.length; i++){
    var 
        indicators = document.getElementById('indicators'),
        slide = document.createElement('div'),
        indicator = document.createElement('div'),
        snippet =`
            <div class="text-container">
                <h3>${diapositivas[i].titulo}</h3>
                <p>
                    ${diapositivas[i].descripcion}
                </p>
                <a href="${diapositivas[i].link}">Conoce más</a>
            </div>
            <div class="img-container">
                <img src="${diapositivas[i].img}" alt="${diapositivas[i].alt}"
                onclick="document.location='${diapositivas[i].link}';return false;">
            </div>
        `
    indicator.setAttribute('onClick' ,'showSlide('+i+')')
    indicator.classList = 'indicator'
    indicator.setAttribute('id', 'indicator-'+i)
    
    indicators.appendChild(indicator)


    slide.classList.add('diapositiva');
    if(i!=0){
        slide.classList.add('hidden');
    }
    slide.setAttribute("id", "diapositiva-"+i);
    slide.setAttribute("draggable","true");
    // slide.id('diapositiva-'+i);
    slide.innerHTML = snippet;

    slider.appendChild(slide);
}


/* Animaciones de cambio de diapositiva */
var current, previous, loop

function showSlide(n){
    current = n;
    if(typeof previous != 'number'){
        previous = 0
    }
    if(current != previous){
        if(current > previous){
            document.getElementById('diapositiva-'+previous).classList = 'diapositiva toRight'
            document.getElementById('diapositiva-'+current).classList = "diapositiva fromLeft"
            document.getElementById('indicator-'+previous).style.background = '#666666'
            document.getElementById('indicator-'+current).style.background = '#01bfe3'
        }else{
            document.getElementById('indicator-'+previous).style.background = '#666666'
            document.getElementById('indicator-'+current).style.background = '#01bfe3'
            document.getElementById('diapositiva-'+previous).classList = 'diapositiva toLeft'
            document.getElementById('diapositiva-'+current).classList = "diapositiva fromRight"
        }
    }else{
        document.getElementById('indicator-'+current).style.background = '#01bfe3'
    }
    previous = n;
    if(n < diapositivas.length-1){
        n++
    }else{
        n=0
    }
    clearTimeout(loop)
    loop = setTimeout(
        function(){
            showSlide(n)
        },5000
    )
}


showSlide(0)



/* swipes para movil */
const _C = document.getElementById('wl-slider');

let ii = 0, x0 = null;



function unify(e) {	
    clearTimeout(loop)
    return e.changedTouches ? e.changedTouches[0] : e 
};

function lock(e) { x0 = unify(e).clientX };

function move(e) {
	if(x0 || x0 === 0) {
		let dx = unify(e).clientX - x0, s = Math.sign(dx);

        if((ii > 0 || s < 0) )
            if(current != diapositivas.length-1){
                showSlide(current+1)
            }
        x0 = null

        if((ii < 0 || s > 0) )
            if(current != 0){
                showSlide(current-1)
                clearTimeout(loop)
            }
        x0 = null
	}
};

_C.addEventListener('mousedown', lock, false);
_C.addEventListener('touchstart', lock, false);

_C.addEventListener('mouseup', move, false);
_C.addEventListener('touchend', move, false);