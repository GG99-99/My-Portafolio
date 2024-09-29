
const scrollGuideCont = document.querySelector(".scroll-guide_grand-father-cont");

const scrollGuide = document.querySelectorAll(".scroll-guide-cont__scroll-guide__circle");

const header = document.querySelector("header");
const aboutCont = document.querySelector(".about-cont")
const article1 = document.querySelector(".edu-cont");



scrollGuide[0].classList.add("scale1")

let i;

function circleAndScale(i, list){
    for (let id in list){
        if (id == i){
            list[id].classList.add("scale1");
            return
        }
    }
}

function removeCircleScale(e1, e2, list){
    list[e1].classList.remove("scale1");
    

    list[e2].classList.remove("scale1");
    
}

var lastScrollTop = window.scrollY /* that var is for hide de scroll guide */

function hideScrollGuide(lst, cont) {
    let scrollFromTop = window.scrollY 

    if (scrollFromTop > lst ){
        cont.style.top = "-100px"     
    } 
    
    else {
        cont.style.top= "0px"
    }

    lastScrollTop = scrollFromTop
}


window.addEventListener('scroll', 
function () {    // esta es la funcion que toma los top del header, article ...

   

    let headerTop = header.getBoundingClientRect().top;
    let aboutContTop = aboutCont.getBoundingClientRect().top;
    let article1Top = article1.getBoundingClientRect().top;
    let windowHeight = window.innerHeight / 3
    
    
    /* --- circle 1  --- */
    if (headerTop  < windowHeight){
        circleAndScale(0, scrollGuide)
        removeCircleScale(1,2,scrollGuide)
    }
    /* --- circle 1  end --- */


    /* --- circle 2 --- */

    if (aboutContTop < windowHeight){
        circleAndScale(1, scrollGuide)
        removeCircleScale(0,2,scrollGuide)
    }
    /* --- circle 2  end --- */


    /* --- circle 3 --- */
    if (article1Top < windowHeight){
        circleAndScale(2, scrollGuide)
        removeCircleScale(0,1,scrollGuide)
        

    
    }
    
    hideScrollGuide(lastScrollTop, scrollGuideCont);

}

);








