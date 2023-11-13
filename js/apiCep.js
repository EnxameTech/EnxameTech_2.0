const addressForm = document.querySelector("#form")
const cepInput = document.querySelector("#cep")
const ruaInput = document.querySelector("#rua")
const cidadeInput = document.querySelector("#cidade")
const bairroInput = document.querySelector("#bairro")
const ufInput = document.querySelector("#uf")

const formInput = document.querySelectorAll("[data-input]")

//validação de input


cepInput.addEventListener("keypress", (e)=>{
const onlyNunbers =/[0-9]/
const key = String.fromCharCode(e.keyCode);
  if(!onlyNunbers.test(key)){
    e.preventDefault();
    return
  }

})

cepInput.addEventListener("keyup",(e) =>{
   const inputValue = e.target.value
   if(inputValue.length == 8){
        getAdress(inputValue)
   }
})

const getAdress = async (cep)=>{


    cepInput.blur();
    const apiURL = `https://viacep.com.br/ws/${cep}/json/`
    const response = await fetch(apiURL)

    const data = await response.json()
    console.log(data)
    
     ruaInput.value = data.logradouro
     bairroInput.value = data.bairro
     cidadeInput.value = data.localidade
     ufInput.value = data.uf

   
}



