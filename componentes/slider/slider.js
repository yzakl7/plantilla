var diapositiva = document.createElement('div');


var docu = document.getElementById('wl-slider')
var texto = 'werwer'


var snippet =`
<div class="text-container">
            <h3>${texto}</h3>
            <p>
                Fusionando la tradición con la modernidad,
                Galletas Dondé utiliza las tendencias actuales en tecnología
                para fortalecer vínculos con sus consumidores.
            </p>
            <a href="">Conoce más</a>
        </div>
        <div class="img-container">
            <img src="./componentes/slider/img/donde.jpg" alt="">
            <div id="indicators">
                <div onClick="sirve()" class="indicator"></div>
            </div>
        </div>`

docu.innerHTML = snippet
