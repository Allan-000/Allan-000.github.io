const hamburgerBtn=document.querySelector(".hamburger");
const sideBar=document.querySelector("aside");
const extendedlogos=document.querySelectorAll("aside ul li img");
const followParagraph=document.querySelector(".volg-h3");
hamburgerBtn.addEventListener("click",()=>{
    followParagraph.classList.toggle("volg-h3-extended")
    sideBar.classList.toggle("aside-extended")
    for(let i=0 ; i<extendedlogos.length;i++){
        extendedlogos[i].classList.toggle("logo-extended");
    }
}
)
const navToggler=document.querySelector(".nav-toggler")
const nav=document.querySelector(".main-navbar")
const navUl=document.querySelector("nav ul")

navToggler.addEventListener('click',()=>{
    nav.classList.toggle("extended-nav")
    navUl.classList.toggle("extended-ul")
})


