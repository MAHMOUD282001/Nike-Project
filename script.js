let menu = document.querySelector("#menu-bar");

let navbar = document.querySelector(".navbar");

menu.addEventListener("click", () =>{
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
})

window.onscroll = () =>{
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
}

let slides = document.querySelectorAll(".slide-container");
let index = 0;

function next(){
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}

function prev(){
    slides[index].classList.remove("active");
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add("active");
}


document.querySelectorAll(".featured-image-1").forEach(img =>{
    img.addEventListener("click",()=>{
        let src = img.getAttribute("src");
        document.querySelector(".big-image-1").src = src
    })
})

document.querySelectorAll(".featured-image-2").forEach(img =>{
    img.addEventListener("click",()=>{
        let src = img.getAttribute("src");
        document.querySelector(".big-image-2").src = src
    })
})

document.querySelectorAll(".featured-image-3").forEach(img =>{
    img.addEventListener("click",()=>{
        let src = img.getAttribute("src");
        document.querySelector(".big-image-3").src = src
    })
})



