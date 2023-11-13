const showLoadingButton = document.getElementById('showLoadingButton');

 console.log()

showLoadingButton.addEventListener('click', () => {
  const loadingOverlay = document.createElement('div');
  loadingOverlay.classList.add('loading-overlay');

  const loadingSpinner = document.createElement('div');
  loadingSpinner.classList.add('loading-spinner');

  loadingOverlay.appendChild(loadingSpinner);
  document.body.appendChild(loadingOverlay);


  setTimeout(() => {
    loadingOverlay.remove(); 

    window.location.href = "http://127.0.0.1:5500/EnxameTech_2.0/dashbord-home.html"; 
}, 2000); 
}); 

