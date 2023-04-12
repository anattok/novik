// burger menu
const burger = document.querySelector(".burger");
const checkInput = document.querySelector(".chk");

checkInput.addEventListener("change", (evt) => {
  burger.classList.add("burger--active");
  if (!evt.currentTarget.checked) {
    burger.classList.remove("burger--active");
  }
});
