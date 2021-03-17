const elements=document.querySelectorAll('.text-center');
const button=document.querySelector('#themeButton');
if (button){
button.addEventListener("click", function(){
    for( let i=0 ; i<elements.length ; i++){
        elements[i].classList.toggle("darkTheme")
    }
    document.body.classList.toggle("darkBackground")
})
}
