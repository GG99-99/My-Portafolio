
const scrollGuideCont = document.querySelector(".scroll-guide-region");
const scrollGuides = document.querySelectorAll(".circle");

const conts = [
    document.querySelector("header"),
    document.querySelector("#about"),
    document.querySelector("#educacion"),
    document.querySelector("#proyectos")
]

function CircleScale(actualCircleNum){  
    // agrega escala al circulo indicada y limpia a los demas

    for (let i = 0; i < scrollGuides.length; i++){
        scrollGuides[i].classList.toggle("scale1", i == actualCircleNum)
    }
    
}

var lastScrollTop = window.scrollY/* that var is for hide de scroll guide */
function hideScrollGuide() {
    let scrollFromTop = window.scrollY

    if (scrollFromTop > lastScrollTop ){
        scrollGuideCont.style.top = "-100px"     
    } 
    
    else {
        scrollGuideCont.style.top= "0px"
    }

    lastScrollTop = scrollFromTop 
}

let observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            let index = conts.indexOf(entry.target)
            CircleScale(index)
        }
    })
}, {threshold: 0.55})

for(let cont of conts){
    observer.observe(cont)
}


window.addEventListener('scroll', hideScrollGuide);








