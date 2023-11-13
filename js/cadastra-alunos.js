// const showLoadingButton = document.getElementById('showLoadingButton');



// showLoadingButton.addEventListener('click', () => {
//   const loadingOverlay = document.createElement('div');
//   loadingOverlay.classList.add('loading-overlay');

//   const loadingSpinner = document.createElement('div');
//   loadingSpinner.classList.add('loading-spinner');

//   loadingOverlay.appendChild(loadingSpinner);
//   document.body.appendChild(loadingOverlay);

//   // Simula um atraso de 2 segundos (pode ser removido em um ambiente real)
//   setTimeout(() => {
//     loadingOverlay.remove(); 

//     window.location.href = "http://127.0.0.1:5500/EnxameTech_2.0/dashbord-home.html"; // Substitua com a URL desejada
// }, 2000); // Redireciona após 2 segundos (tempo igual ao tempo do seu setTimeout)
// }); 




const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;




nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar()
  
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar()

  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

 const progress = document.getElementById("yourProgressBarId");

// Assuming progressActive is an array of active steps and progressSteps is an array of all steps
const currentStepIndex = progressActive.indexOf(currentStep); // Replace currentStep with your actual variable representing the current step

// Calculate the width based on the current step
progress.style.width = (currentStepIndex / (progressSteps.length - 1)) * 100 + "%";
}