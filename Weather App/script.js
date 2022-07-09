function showCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#input-group");
  alert(`Your password is ${cityInput.value}`);
  let h2 = document.innerHTML("h2");
  h2.innerHTML = "${cityInput.value}";
}
let showCity = document.querySelector("#password-form");
passwordForm.addEventListener("submit", showCity);
