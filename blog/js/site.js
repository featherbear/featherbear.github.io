document
  .querySelector(".navbar-burger")
  .addEventListener("click", function() {
    this.classList.toggle("is-active");
    document.getElementById(this.dataset.target).classList.toggle("is-active");
  });
