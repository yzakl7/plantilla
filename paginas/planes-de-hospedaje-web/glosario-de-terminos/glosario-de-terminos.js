function filtrarGlosario(letra){
    var glosarios = document.getElementsByClassName('glosario');
    for(var i= 0; i < glosarios.length; i++ ){
        glosarios[i].classList.add('oculto');
    }
    console.log(letra);
    console.log('glosario-'+letra);
    console.log(document.getElementById('letra'));
    console.log(document.getElementById('glosario-'+letra));
    document.getElementById('letra').innerHTML = letra;
    document.getElementById('glosario-'+letra).classList.remove('oculto')
}