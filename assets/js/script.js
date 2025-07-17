'use strickt';

/**
 * add event on multiple elements
 */
const addEventOnElement = function ( elements , eventType , callback){
        for (let i = 0 , len = elements.length; i < len ; i++) {
                elements[i].addEventListener(eventType,callback);               
        }        
}


/**
 * mobile navbar
 * navbar will show after clicking menu button
 */

const navbar = document.querySelector( "[data-navbar]" );
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]")

const toggleNav = function() {
        navbar.classList.toggle("active");
        this.classList.toggle("active");
}

navToggler.addEventListener ( "click" , toggleNav)


const navClose = () => {
        navbar.classList.remove("active")
        navToggler.classList.remove("active")
}

addEventOnElement(navLinks , "click" , navClose);

/**
 * header 
 * header will active after scrolled down to 100px of screen
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll" , function(){
        header.classList[ this.window.scrollY > 100 ? "add" : "remove"]("active");
})




/**
 * button hover ripple effect
 */

const buttons = document.querySelectorAll("[data-btn]");

const buttonHoverRipple  = function(event) {
        this.style.setProperty("--top", `${event.offsetY}px`)
        this.style.setProperty("--left", `${event.offsetX}px`)
}


addEventOnElement(buttons,"mousemove" ,buttonHoverRipple)