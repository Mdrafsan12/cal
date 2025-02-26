// Tag select

const height = document.getElementById('height')
const weight = document.getElementById('weight')
const button = document.getElementById('submit');
const result = document.getElementById('result');

// Mean Function

button.addEventListener('click', function(){
  let newHeight = parseFloat(height.value);
  let newWeight = parseFloat(weight.value);
  newHeight = newHeight / 100;
  let sqrMiter = newHeight * newHeight;
  let BMI = newWeight / sqrMiter;
  result.textContent = BMI.toFixed(2);
   
  if (result.textContent < 18.6) {
    result.style.background = '#ffeaa7';
  } else if (result.textContent < 24.9) {
    result.style.background = '#55efc4';
  }else {
    result.style.background = '#d63031';
   }
})
  


// Form

let form = document.getElementById('form')


form.addEventListener('submit', function(e){
 e.preventDefault();
})