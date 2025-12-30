import { openScreenImg } from "./screens.js"

let imgs = document.querySelectorAll(".gallery img")
for(let img of imgs) {
     img.addEventListener("click", e => {
          openScreenImg(img)
     })
}