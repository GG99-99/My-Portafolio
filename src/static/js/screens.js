
function openScreen(screen){
     screen.classList.add("active")
     
     
}

function closeScreen(screen){
     screen.classList.remove("active")
     
}


// screens para imagenes

let screenImg = document.querySelector(`.screen[data-screen="img"]`)
export function openScreenImg(imgElm){
     openScreen(screenImg)
     screenImg.innerHTML = "";
     let imgCopy = imgElm.cloneNode(true)
     screenImg.appendChild(imgCopy)
}

function closeScreenImg(){
     closeScreen(screenImg)
     screenImg.innerHTML = "";
}

screenImg.addEventListener('click', e => {
     if(e.target === e.currentTarget) closeScreenImg();
})




// screens of projects
let body = document.querySelector('body')

let projectBtns = document.querySelectorAll(".card.ofProject")
projectBtns.forEach(btn => {
     btn.addEventListener('click', e =>{

          let screen = document.querySelector(`.screen[data-screen="${btn.dataset.screen}"]`)
          openScreen(screen)
          body.style.overflow = "hidden";
     })
     
})

let btnOuts = document.querySelectorAll(".icon-box.out")
btnOuts.forEach((btn) => {
     btn.addEventListener('click', (e) =>{

          let screen = document.querySelector(`.screen[data-screen="${btn.dataset.screen}"]`) 
          closeScreen(screen)
          body.style.overflow = "auto";
     })
})

