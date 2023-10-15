const menu = document.querySelector('.menu');
const pestañaMenu = document.querySelector('.contenedor-menu');

const botonChalecoB = document.querySelector('#boton-chaleco-b');
const cajaChalecosB = document.querySelector('.blur1');

const pPrincipal = document.querySelector('#pagina-principal');

const botonDeChaleco = document.querySelector('#boton-chaleco');
const cajaChaleco = document.querySelector('.blur2');

const botonMascara = document.querySelector('#boton-mascara');
const cajaMascara = document.querySelector('.blur3');

const botonAudifono = document.querySelector('#boton-audifonos');
const cajaAudifonos = document.querySelector('.blur4');

const botonArmadura = document.querySelector('#boton-armadura-corporal');
const cajaCorporales = document.querySelector('.blur5');

const botonCascos = document.querySelector('#boton-cascos');
const cajaCascos = document.querySelector('.blur6');

const botonGranadas = document.querySelector('#boton-granadas');
const cajaGranadas = document.querySelector('.blur7');

const close = document.querySelector('.close');
const close2 = document.querySelector('#close2');
const close3 = document.querySelector('#close3');
const close4 = document.querySelector('#close4');
const close5 = document.querySelector('#close5');
const close6 = document.querySelector('#close6');
const close7 = document.querySelector('#close7');


menu.addEventListener('click', pestañaToggle);
botonChalecoB.addEventListener('click', cajaChalecosBAdd);
botonDeChaleco.addEventListener('click', chalecosAdd);
botonMascara.addEventListener('click', mascaraAdd);
botonAudifono.addEventListener('click', audifonosAdd);
botonArmadura.addEventListener('click', armadurasAdd);
botonCascos.addEventListener('click', cascosAdd);
botonGranadas.addEventListener('click', granadasAdd);

close.addEventListener('click', closeArmamento);
close2.addEventListener('click', closeChaleco);
close3.addEventListener('click', closeMascara);
close4.addEventListener('click', closeAudifono);
close5.addEventListener('click', closeCorporales);
close6.addEventListener('click', closeCascos);
close7.addEventListener('click', closeGranadas);

function pestañaToggle(){
    pestañaMenu.classList.toggle('inactive');
}

function cajaChalecosBAdd(){
    cajaChalecosB.classList.remove('inactive');
    pPrincipal.classList.add('inactive');
}

function chalecosAdd(){
    cajaChaleco.classList.remove('inactive');
    pPrincipal.classList.add('inactive');
}

function mascaraAdd() {
    cajaMascara.classList.remove('inactive');
    pPrincipal.classList.add('inactive');
}

function audifonosAdd(){
    cajaAudifonos.classList.remove('inactive');
    pPrincipal.classList.add('inactive');
}

function armadurasAdd(){
    cajaCorporales.classList.remove('inactive');
    pPrincipal.classList.add('inactive'); 
}

function cascosAdd(){
    cajaCascos.classList.remove('inactive');
    pPrincipal.classList.add('inactive');
}

function granadasAdd(){
    cajaGranadas.classList.remove('inactive');
    pPrincipal.classList.add('inactive');
}






function closeArmamento(){
    cajaChalecosB.classList.add('inactive');
    pPrincipal.classList.remove('inactive');
}
function closeChaleco(){
    cajaChaleco.classList.add('inactive');
    pPrincipal.classList.remove('inactive');
}

function closeMascara(){
    cajaMascara.classList.add('inactive');
    pPrincipal.classList.remove('inactive');
}

function closeAudifono(){
    cajaAudifonos.classList.add('inactive');
    pPrincipal.classList.remove('inactive');
}

function closeCorporales(){
    cajaCorporales.classList.add('inactive');
    pPrincipal.classList.remove('inactive');
}

function closeCascos(){
    cajaCascos.classList.add('inactive');
    pPrincipal.classList.remove('inactive');
}

function closeGranadas(){
    cajaGranadas.classList.add('inactive');
    pPrincipal.classList.remove('inactive');
}