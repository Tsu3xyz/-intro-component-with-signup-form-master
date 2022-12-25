const inputs = document.querySelectorAll(".input");
const formBoxes = document.querySelectorAll(".form-box");
const btn = document.querySelector(".btn-submit");

btn.addEventListener("click", () => {
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value == "") {
      formBoxes[i].classList.add("show");
    } else {
      formBoxes[i].classList.remove("show");
    }
  }
});
