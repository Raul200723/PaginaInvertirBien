"use strict";

/* ==========================================================
   InvertirBien.es
   main.js
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    iniciarCabecera();

    iniciarBotonArriba();

    iniciarMenuActivo();

    iniciarAnimaciones();

    iniciarFaq();

    iniciarFormulario();

});

/* ==========================================================
   CABECERA
========================================================== */

function iniciarCabecera(){

    const header = document.querySelector("header");

    if(!header) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 40){

            header.style.boxShadow="0 10px 25px rgba(0,0,0,.12)";

        }else{

            header.style.boxShadow="0 2px 10px rgba(0,0,0,.08)";

        }

    });

}

/* ==========================================================
   BOTÓN SUBIR
========================================================== */

function iniciarBotonArriba(){

    const boton=document.createElement("a");

    boton.id="backToTop";

    boton.href="#";

    boton.innerHTML="↑";

    boton.title="Volver arriba";

    boton.style.display="none";

    document.body.appendChild(boton);

    window.addEventListener("scroll",()=>{

        if(window.scrollY>400){

            boton.style.display="flex";

        }else{

            boton.style.display="none";

        }

    });

    boton.addEventListener("click",(e)=>{

        e.preventDefault();

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

/* ==========================================================
   MENÚ ACTIVO
========================================================== */

function iniciarMenuActivo(){

    const pagina=location.pathname.split("/").pop();

    const enlaces=document.querySelectorAll("nav a");

    enlaces.forEach(enlace=>{

        if(enlace.getAttribute("href")===pagina){

            enlace.style.color="#0f766e";

            enlace.style.fontWeight="700";

        }

    });

}

/* ==========================================================
   FAQ
========================================================== */

function iniciarFaq(){

    const detalles=document.querySelectorAll("details");

    detalles.forEach(detalle=>{

        detalle.addEventListener("toggle",()=>{

            if(detalle.open){

                detalles.forEach(otro=>{

                    if(otro!==detalle){

                        otro.open=false;

                    }

                });

            }

        });

    });

}

/* ==========================================================
   ANIMACIONES
========================================================== */

function iniciarAnimaciones(){

    const elementos=document.querySelectorAll("section,.card,article");

    const observer=new IntersectionObserver((entradas)=>{

        entradas.forEach(entrada=>{

            if(entrada.isIntersecting){

                entrada.target.animate(

                    [

                        {

                            opacity:0,

                            transform:"translateY(40px)"

                        },

                        {

                            opacity:1,

                            transform:"translateY(0)"

                        }

                    ],

                    {

                        duration:700,

                        fill:"forwards"

                    }

                );

                observer.unobserve(entrada.target);

            }

        });

    },{

        threshold:0.1

    });

    elementos.forEach(el=>{

        observer.observe(el);

    });

}

/* ==========================================================
   FORMULARIO
========================================================== */

function iniciarFormulario(){

    const formulario=document.querySelector("form");

    if(!formulario) return;

    formulario.addEventListener("submit",(e)=>{

        const nombre=formulario.querySelector("input[name='nombre']");

        const email=formulario.querySelector("input[name='email']");

        const mensaje=formulario.querySelector("textarea");

        if(nombre && nombre.value.trim().length<2){

            alert("Introduce tu nombre.");

            e.preventDefault();

            return;

        }

        if(email && !email.value.includes("@")){

            alert("Introduce un correo válido.");

            e.preventDefault();

            return;

        }

        if(mensaje && mensaje.value.trim().length<10){

            alert("Escribe un mensaje un poco más largo.");

            e.preventDefault();

            return;

        }

    });

}

/* ==========================================================
   SCROLL SUAVE
========================================================== */

document.querySelectorAll("a[href^='#']").forEach(enlace=>{

    enlace.addEventListener("click",(e)=>{

        const destino=document.querySelector(

            enlace.getAttribute("href")

        );

        if(destino){

            e.preventDefault();

            destino.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* ==========================================================
   AÑO AUTOMÁTICO
========================================================== */

const anio=document.getElementById("year");

if(anio){

    anio.textContent=new Date().getFullYear();

}

console.log("InvertirBien.es cargado correctamente.");