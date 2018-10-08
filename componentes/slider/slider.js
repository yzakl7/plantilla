var slider = document.getElementById('wl-slider');

var diapositivas = [
    {
        titulo: 'HOLA! INTERNET!',
        descripcion: 'Fusionando la tradición con la modernidad, Galletas Dondé utiliza las tendencias actuales en tecnología para fortalecer vínculos con sus consumidores.',
        link: '',
        img: './componentes/slider/img/donde.jpg',
        alt:'Dondé'
    },
    {
        titulo: 'HOLO! INTERNET!',
        descripcion: 'Fusionando la tradición con la modernidad, Galletas Dondé utiliza las tendencias actuales en tecnología para fortalecer vínculos con sus consumidores.',
        link: '',
        img: './componentes/slider/img/donde.jpg',
        alt:'Dondé'
    },
    {
        titulo: 'HOLO! INTERNET!',
        descripcion: 'Fusionando la tradición con la modernidad, Galletas Dondé utiliza las tendencias actuales en tecnología para fortalecer vínculos con sus consumidores.',
        link: '',
        img: './componentes/slider/img/donde.jpg',
        alt:'Dondé'
    },
    {
        titulo: 'HOLO! INTERNET!',
        descripcion: 'Fusionando la tradición con la modernidad, Galletas Dondé utiliza las tendencias actuales en tecnología para fortalecer vínculos con sus consumidores.',
        link: '',
        img: './componentes/slider/img/donde.jpg',
        alt:'Dondé'
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
                <img src="${diapositivas[i].img}" alt="${diapositivas[i].alt}">
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
/* swipes movil */
