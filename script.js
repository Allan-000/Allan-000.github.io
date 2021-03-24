const button =document.querySelector('#modeSwitcher');
const elements=document.querySelectorAll('.normalTheme ');
button.addEventListener("click",function(){
    for(let i=0 ; i<elements.length ;i++){
        elements[i].classList.toggle("themedTexts");
    }
    document.body.classList.toggle("bodyBackgroundColor");
})