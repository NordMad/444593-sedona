var toggleButton = document.querySelector(".toggle-button");
var modalSearch = document.querySelector(".modal-search");

toggleButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalSearch.classList.toggle("modal-toggle");
});

modalSearch.classList.toggle("modal-toggle");