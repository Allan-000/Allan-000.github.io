//creating variables
const multiplyInputs=document.querySelectorAll(".multiInputs");
const multiResult=document.querySelector(".multiResult");

const divisionInputs=document.querySelectorAll(".divInputs");
const divResult=document.querySelector(".divResult");

const additionInputs=document.querySelectorAll(".addInputs");
const addResult=document.querySelector(".addResult");

const subtractionInputs=document.querySelectorAll(".subInputs"); 
const subResult=document.querySelector(".subResult")
//the calculating button
const button=document.querySelector(".calculate")

button.addEventListener("click",()=>{
    for(let i = 0; i<multiplyInputs.length ;i++){
        multiResult.textContent=multiplyInputs[0].value*multiplyInputs[1].value;
        divResult.textContent=divisionInputs[0].value/divisionInputs[1].value;
        addResult.textContent=parseInt(additionInputs[0].value)+parseFloat(additionInputs[1].value);
        subResult.textContent=subtractionInputs[0].value-subtractionInputs[1].value;
    }
})