import Menu from "./Dom/Menu.js";
import lightNav from "./Dom/light.js";
import scrollBtn from "./Dom/boton_scroll.js";

const d = document;

d.addEventListener("DOMContentLoaded",(e)=>{
    Menu("#mobile-menu",".navbar");
    lightNav();
    scrollBtn(".scroll-btn");
})