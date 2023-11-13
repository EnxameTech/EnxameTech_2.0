const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required')
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    cpfValidate()
    nomeValidate()
    lastNameValidate()
    emailCheck()
    password()
    tel()
    endereco()

})

$('#cpf').mask('000.000.000-00', {reverse: true});
$('#telefone').mask('(00) 00000-0000');


function setError(index){
 campos[index].style.border = "3px solid #e6363660";
 spans[index].style.display = "block";
}



function removeError(index){
    campos[index].style.border = "";
    spans[index].style.display = "none";
}


function cpfValidate(){
    if(campos[0].value.length < 11){
     setError(0)
    }
    else{
      removeError(0)
    }
}
function nomeValidate(){
    if(campos[1].value.length < 11){
     setError(1)
    }
    else{
      removeError(1)
    }
}
function lastNameValidate(){
    if(campos[2].value.length < 11){
     setError(2)
    }
    else{
      removeError(2)
    }
}
// ***************** Não funciona*************
function sexo(){
    if(campos[3].value.length === 0){
     setError(3)
    }
    else{
      removeError(3)
    }
}
// ***************** Não funciona*************
function dataNascimento(){
    if(campos[4].value.length === 0){
     setError(4)
    }
    else{
      removeError(4)
    }
}


function emailCheck(){
    if(!emailRegex.test(campos[5].value)){
        setError(5)
    }else{
        removeError(5)
    }
}

function password(){
    if(campos[6].value.length < 6){
     setError(6)
    }
    else{
      removeError(6)
    }
}
function tel(){
    if(campos[7].value.length < 12){
     setError(7)
    }
    else{
      removeError(7)
    }
}
function endereco(){
    if(campos[8].value.length < 12){
     setError(8)
    }
    else{
      removeError(8)
    }
}

