function callAlert() {
    alert("Hello world");
  }
  function phone(){
    alert("this is phone you clicked");
  }


  let counterValue = 0;

function updateCounter() {
  document.getElementById("counter").innerText = counterValue;
}

function increaseCounter() {
  counterValue++;
  updateCounter();
}

function decreaseCounter() {
  counterValue--;
  updateCounter();
}
