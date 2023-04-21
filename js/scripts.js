window.onload = function() {
  function getAndSetFormValues() {
    const shoutInput = document.querySelector("input").value;
    document.querySelector("p").innerText = shoutInput.toUpperCase();
  }
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    getAndSetFormValues();
    document.querySelector("div.hidden").removeAttribute("class")
  }
}