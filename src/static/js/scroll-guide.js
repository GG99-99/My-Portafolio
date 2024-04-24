

const scrollGuide = document.querySelectorAll(".scroll-guide-cont__scroll-guide");
const innerCircleGuide = ' <div class="scroll-guide-cont__scroll-guide__circle"></div>';
const header = document.querySelector("header");
const aboutCont = document.querySelector(".about-cont")
const article1 = document.querySelector(".edu-cont");


scrollGuide[0].innerHTML = innerCircleGuide
scrollGuide[0].classList.add("scale1")


/*
function circleAndScale(i){
    for (id in scrollGuide){
          
    }
}
*/




window.addEventListener('scroll', 
function () {    // esta es la funcion que toma los top del header, article ...
    let headerTop = header.getBoundingClientRect().top;
    let aboutContTop = aboutCont.getBoundingClientRect().top;
    let article1Top = article1.getBoundingClientRect().top;
    let windowHeight = window.innerHeight / 3

    
    /* --- circle 1  --- */
    if (headerTop  < windowHeight){
        scrollGuide[0].innerHTML = innerCircleGuide
        scrollGuide[0].classList.add("scale1")

        scrollGuide[1].innerHTML = ""
        scrollGuide[1].classList.remove("scale1")
    }
    /* --- circle 1  end --- */


    /* --- circle 2 --- */

    if (aboutContTop < windowHeight){
        scrollGuide[1].innerHTML = innerCircleGuide
        scrollGuide[1].classList.add("scale1")


        scrollGuide[0].innerHTML = ""
        scrollGuide[2].innerHTML = ""

        scrollGuide[0].classList.remove("scale1")
        scrollGuide[2].classList.remove("scale1")
    }
    /* --- circle 2  end --- */


    /* --- circle 3 --- */
    if (article1Top < windowHeight){
        scrollGuide[2].innerHTML = innerCircleGuide
        scrollGuide[2].classList.add("scale1")


        scrollGuide[1].innerHTML = ""
        scrollGuide[1].classList.remove("scale1")
        

    
    }
    
    

}

);






