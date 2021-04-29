import hamburgerMenu from "./dom/menu_hamburguesa.js";
import {digitalClock, alarm} from "./dom/reloj.js";
import {shortcuts, moveBall} from "./dom/teclado.js";
import countdown from "./dom/cuenta_regresiva.js";
import scrollTopButton from "./dom/boton_scroll_top.js";
import darkTheme from "./dom/tema_oscuro.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import webCam from "./dom/deteccion_webcam.js";
import getGeolocation from "./dom/geolocalizacion.js";
import searchFilters from "./dom/filtro_busquedas.js";
import draw from "./dom/sorteo-digital.js";
import slider from "./dom/carrusel_slider.js";
import scrollSpy from "./dom/scroll_espia.js";
import smartVideo from "./dom/video_intelignte.js";
import contactFormValidations from "./dom/validaciones_formularios.js";
import speechReader from "./dom/narrador.js";

const d = document;

d.addEventListener("DOMContentLoaded",(e) =>{
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#detener-reloj");
    alarm("assets/car-alarm.mp3","#activar-alarma","#detener-alarma");
    countdown("countdown", "January 01, 2022 00:00:00","Feliz Año Nuevo!!!!!!")
    scrollTopButton(".scroll-top-btn")
    responsiveMedia("youtube",
                    "(min-width: 1024px)",
                    `<a href="https://www.youtube.com/watch?v=liTRIMHU9Ac" target="_blank" rel="nooponer">Ver Video</a>`,
                     `<iframe width="560" height="315" src="https://www.youtube.com/embed/liTRIMHU9Ac" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    
    responsiveMedia("gmaps",
                    "(min-width: 1024px)",
                    `<a href="https://goo.gl/maps/AJ9r6pR4TPnqqZoM9" target="_blank" rel="nooponer">Ver Mapa</a>`,
                    `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13135.394835785937!2d-58.3651371!3d-34.607987!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdf53d1e7b723133c!2sPuente%20de%20La%20Mujer!5e0!3m2!1ses!2sar!4v1615004462525!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`);

    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    webCam("webcam");
    getGeolocation("geolocation");
    searchFilters(".card-filter",".card");
    draw("#winner-btn",".player");
    slider();
    scrollSpy();
    smartVideo();
    contactFormValidations();

});


d.addEventListener("keydown", e => {
    shortcuts(e);
    moveBall(e,".ball",".stage");
})

darkTheme(".dark-theme-btn","dark-mode");
networkStatus();
speechReader();