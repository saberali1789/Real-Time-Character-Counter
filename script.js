const textarea =document.getElementById('textarea');
const totalCounter = document.getElementById('total-counter');
const remainingCounter = document.getElementById('remaining-counter');

updateCounter();

textarea.addEventListener('keyup', () => {
  updateCounter();
})


function updateCounter(){
  totalCounter.innerText = textarea.value.length;
  remainingCounter.innerText = textarea.getAttribute('maxLength') - textarea.value.length;

}

