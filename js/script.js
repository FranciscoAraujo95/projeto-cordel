const topBtn = document.querySelector("#topBtn");

topBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};
