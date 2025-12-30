
const scrollGuideCont = document.querySelector(".scroll-guide-region");

const scrollGuides = document.querySelectorAll(".circle");

const header = document.querySelector("header");
const aboutCont = document.querySelector(".about")
const article1 = document.querySelector(".section_article");
const article2 = document.querySelector("#proyectos");


scrollGuides[0].classList.add("scale1")

// let i;



function CircleScale(actualCircleNum){  
    // agrega escala al circulo indicada y limpia a los demas

    for (let i = 0; i < scrollGuides.length; i++){
        if (i != actualCircleNum){
            scrollGuides[i].classList.remove("scale1");
        }

        if(i == actualCircleNum){
            scrollGuides[i].classList.add("scale1");
        }
    }
    
}

var lastScrollTop = window.scrollY /* that var is for hide de scroll guide */

function hideScrollGuide(cont) {
    let scrollFromTop = window.scrollY 

    if (scrollFromTop > lastScrollTop ){
        cont.style.top = "-100px"     
    } 
    
    else {
        cont.style.top= "0px"
    }

    lastScrollTop = scrollFromTop
}

function mngScrollGuide() {    // esta es la funcion que toma los top del header, article ...

   

    let headerTop = header.getBoundingClientRect().top;
    let aboutContTop = aboutCont.getBoundingClientRect().top;
    let article1Top = article1.getBoundingClientRect().top;
    let article2Top = article2.getBoundingClientRect().top;

    let windowHeight = window.innerHeight / 3
    
    
    /* --- circle 0  --- */
    if (headerTop  < windowHeight){
        CircleScale(0)
    }
    


    /* --- circle 1 --- */

    if (aboutContTop < windowHeight){
        CircleScale(1)
    }
    


    /* --- circle 3 --- */
    if (article1Top < windowHeight){
        CircleScale(2)
    }
    

    /* --- circle 4 --- */
    if (article2Top < windowHeight){
        CircleScale(3)
    }

    
    hideScrollGuide(scrollGuideCont);

}

window.addEventListener('scroll', mngScrollGuide);








