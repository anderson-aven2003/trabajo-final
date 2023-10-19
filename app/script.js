const menu = document.querySelector('.menu');
const pestañaMenu = document.querySelector('.contenedor-menu');
const pPrincipal = document.querySelector('#pagina-principal');
const botonChalecoB = document.querySelector('#boton-chaleco-b')
const blur1 = document.querySelector('#blur1');
const close1 = document.querySelector('.close');
const botonChaleco = document.querySelector('#boton-chaleco');
const blur2 = document.querySelector('#blur2');
const close2 = document.querySelector('#close2');
const botonMascara = document.querySelector('#boton-mascara');
const blur3 = document.querySelector('#blur3');
const close3 = document.querySelector('#close3');
const botonAudifonos = document.querySelector('#boton-audifonos');
const blur4 = document.querySelector('#blur4');
const close4 = document.querySelector('#close4');
const botonArmaduraCorporal = document.querySelector('#boton-armadura-corporal');
const blur5 = document.querySelector('#blur5');
const close5 = document.querySelector('#close5');
const botonCasco = document.querySelector('#boton-cascos');
const blur6 = document.querySelector('#blur6');
const close6 = document.querySelector('#close6');
const botonGranadas = document.querySelector('#boton-granadas');
const blur7 = document.querySelector('#blur7');
const close7 = document.querySelector('#close7');

menu.addEventListener('click', pestañaToggle);
botonChalecoB.addEventListener('click', abrirChalecoB);
close1.addEventListener('click', closeChalecoB);
botonChaleco.addEventListener('click', abrirChaleco);
close2.addEventListener('click', closeChaleco);
botonMascara.addEventListener('click', abrirMascara);
close3.addEventListener('click', closeMascara);
botonAudifonos.addEventListener('click', abrirAudifonos);
close4.addEventListener('click', closeAudifonos);
botonArmaduraCorporal.addEventListener('click', abrirArmadaCorporal);
close5.addEventListener('click', closeArmadaCorporal);
botonCasco.addEventListener('click', abrirCasco);
close6.addEventListener('click', closeCasco);
botonGranadas.addEventListener('click', abrirGranadas);
close7.addEventListener('click', closeGranadas);


function pestañaToggle() {
    pestañaMenu.classList.toggle('inactive');
}

function abrirChalecoB() {
    blur1.classList.remove('inactive');
    pPrincipal.classList.add('inactive');
}

function closeChalecoB(){
    blur1.classList.add('inactive');
    pPrincipal.classList.remove('inactive');
}

function abrirChaleco(){
    blur2.classList.remove('inactive');
    pPrincipal.classList.add('inactive');
}

function closeChaleco(){
    blur2.classList.add('inactive');
    pPrincipal.classList.remove('inactive');
}

function abrirMascara(){
    blur3.classList.remove('inactive');
    pPrincipal.classList.add('inactive');
}

function closeMascara(){
    blur3.classList.add('inactive');
    pPrincipal.classList.remove('inactive');
}

function abrirAudifonos(){
    blur4.classList.remove('inactive');
    pPrincipal.classList.add('inactive');
}

function closeAudifonos(){
    blur4.classList.add('inactive');
    pPrincipal.classList.remove('inactive');
}

function abrirArmadaCorporal(){
    blur5.classList.remove('inactive');
    pPrincipal.classList.add('inactive');
}

function closeArmadaCorporal(){
    blur5.classList.add('inactive');
    pPrincipal.classList.remove('inactive');
}

function abrirCasco(){
    blur6.classList.remove('inactive');
    pPrincipal.classList.add('inactive');
}

function closeCasco(){
    blur6.classList.add('inactive');
    pPrincipal.classList.remove('inactive');
}

function abrirGranadas(){
    blur7.classList.remove('inactive');
    pPrincipal.classList.add('inactive');
}

function closeGranadas(){
    blur7.classList.add('inactive');
    pPrincipal.classList.remove('inactive');
}
