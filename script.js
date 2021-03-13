let texts =document.querySelectorAll('.text-center');// alle headers en paragrafen selecteren
function changeBgColor(){
    document.body.style.backgroundColor="#2e3238";
    //de kleur veranderen van de headers (dark mode)
    for(let i = 0; i< texts.length ;i++){
        texts[i].style.color="white";
    }
}
function getNormalModeBack(){
    document.body.style.backgroundColor="white";
    //de kleur veranderen van de headers (normal mode)
    for(let i = 0; i< texts.length ;i++){
        texts[i].style.color="#202020";
    }
}


