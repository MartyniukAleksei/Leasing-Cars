document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".tabs-btn").forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      const path = event.currentTarget.dataset.path;
      document.querySelectorAll(".tabs-content-item").forEach(function (cont) {
        cont.classList.remove("tabs-content-item-active");
      });
      document.querySelectorAll(".tabs-btn").forEach(function (cont) {
        cont.classList.remove("tabs-btn-active");
      });
      event.target.classList.add("tabs-btn-active");
      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add("tabs-content-item-active");
    });
  });
});
