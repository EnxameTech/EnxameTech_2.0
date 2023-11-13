var valueDisplay = document.querySelectorAll(".enum")
var interval = 4000;

valueDisplay.forEach(valueDisplay => {
    let  startValue = 0; 
    let endValue = parseInt(valueDisplay.getAttribute("data-val"))
    let duration = Math.floor(interval / endValue)
    let counter = setInterval(function(){
        startValue += 1;
        valueDisplay.textContent =startValue;
        if(startValue ==endValue){
            clearInterval(counter)
        }
    },duration)
})



const modal = document.getElementById('myModal');
const openModalButton = document.querySelector('.menu li:nth-child(5) a'); // O quinto item do menu (Sair)
const closeModalButton = document.getElementById('closeModal');

openModalButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModalButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
