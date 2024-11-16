const mensajeTitulo = "Feliz cumpleaños, Isabedita 🎉💖"
const cajaTituloMensaje = document.querySelector(".titulo-mensaje");
let indexTituloMensaje = 0;

const mensajeMain1 = 'Amor, no puedo creer lo rápido que estás creciendo. Hoy cumples 21 años, y me siento tan feliz por ti y por todo lo que has logrado. Estoy increíblemente orgulloso de la mujer que eres, de lo mucho que te esfuerzas cada día en tu carrera, y de cómo luchas por tus sueños con esa determinación que tanto admiro.'
const cajaMainMensaje1 = document.querySelector('.main-mensaje-1');
let indexMainMensaje1 = 0;

const mensajeMain2 = 'Quiero que sepas que siempre voy a estar a tu lado, apoyándote en todo lo que necesites y siendo tu compañero en cada paso que des. Eres una persona maravillosa, y me hace feliz poder compartir esta vida contigo.'
const cajaMainMensaje2 = document.querySelector('.main-mensaje-2');
let indexMainMensaje2 = 0;

const mensajeMain3 = 'Disfruta mucho tu día, pásala increíble porque te lo mereces. Y nunca olvides lo afortunada que eres de tenerme, ¿eh? Te amo mucho, mi amor.'
const cajaMainMensaje3 = document.querySelector('.main-mensaje-3');
let indexMainMensaje3 = 0;

const containerAnimacion = document.querySelector('#container')

const velocidad = 150;

const showTextMain3 = () => {
  if (indexMainMensaje3 < mensajeMain3.length) {
    cajaMainMensaje3.textContent += mensajeMain3[indexMainMensaje3];
    cajaMainMensaje3.style.opacity = 1;
    indexMainMensaje3++;
    setTimeout(showTextMain3, velocidad); 
  }
};

const showTextMain2 = () => {
  if (indexMainMensaje2 < mensajeMain2.length) {
    cajaMainMensaje2.textContent += mensajeMain2[indexMainMensaje2];
    cajaMainMensaje2.style.opacity = 1;
    indexMainMensaje2++;
    setTimeout(showTextMain2, velocidad); 

    return
  }

  showTextMain3()
};

const showTextMain = () => {
  if (indexMainMensaje1 < mensajeMain1.length) {
    cajaMainMensaje1.textContent += mensajeMain1[indexMainMensaje1];
    cajaMainMensaje1.style.opacity = 1;
    indexMainMensaje1++;
    setTimeout(showTextMain, velocidad); 

    return
  }

  showTextMain2()
};

const showTextTitulo = () => {
  if (indexTituloMensaje < mensajeTitulo.length) {
    cajaTituloMensaje.textContent += mensajeTitulo[indexTituloMensaje];
    cajaTituloMensaje.style.opacity = 1;
    indexTituloMensaje++;
    setTimeout(showTextTitulo, 150); 

    return
  }

  showTextMain()
};

onload = () => {
  containerAnimacion.classList.remove("container");
  showTextTitulo()
};