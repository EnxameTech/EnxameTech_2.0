const form = document.getElementById('loadim');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required')
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
form.addEventListener("submit", (e)=>{
    emailCheck()
    emailValidate()

})

// Adcionar erro no input
function setError(index){
 campos[index].style.border = "3px solid #e6363660";
 spans[index].style.display = "block";
}

// tira erro no input

function removeError(index){
    campos[index].style.border = "";
    spans[index].style.display = "none";
}



function emailCheck(){
    if(!emailRegex.test(campos[0].value)){
        setError(0)
    }else{
        removeError(0)
    }
}



function emailValidate(){
    if(campos[1].value.length < 4){
     setError(1)
    }
    else{
      removeError(1)
    }
}