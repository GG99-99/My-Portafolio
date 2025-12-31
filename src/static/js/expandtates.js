
let btnExpand = document.querySelector("#ttl-pt")
let tatesSection = document.querySelector("#personal-tates")
let arrow = document.querySelector("#ttl-pt img")

function expandTates(){
     tatesSection.classList.toggle("expand", !tatesSection.classList.contains("expand"))
     arrow.classList.toggle("rotate", tatesSection.classList.contains("expand"))
}

btnExpand.addEventListener("click", e => {
     expandTates()
})