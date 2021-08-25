var elInput = document.querySelector(".js-input");
var elForm = document.querySelector(".form");
var elOutput = document.querySelector(".js-output");
var elSubmit = document.querySelector(".js-submit");



var calculateFizBuzz = function () {
  var numberInput = +elInput.value;
  if (numberInput == 0) {
    elOutput.textContent = "";
  }
  else if ( numberInput % 3 == 0 && numberInput % 5 == 0){
    elOutput.textContent = "FizzBuzz";
  } else if(numberInput % 3 == 0){
    elOutput.textContent = "Fizz"
  } else if(numberInput % 5 == 0 ){
    elOutput.textContent = "Buzz";
  } else{
    elOutput.textContent = numberInput;
  }
}

elForm.addEventListener("submit", function (e) {
  e.preventDefault();
  calculateFizBuzz();
})

elInput.addEventListener("keyup", function (e) {
  e.preventDefault();
  calculateFizBuzz();
});

