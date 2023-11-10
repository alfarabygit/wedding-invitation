const stickyTop = document.querySelector(".sticky-top");
const offcanvas = document.querySelector(".offcanvas");

offcanvas.addEventListener("show.bs.offcanvas", function () {
  stickyTop.style.overflow = "visible";
});
offcanvas.addEventListener("hidden.bs.offcanvas", function () {
  stickyTop.style.overflow = "hidden";
});

//fungsi utk membuat enable/disable scroll
const rootElement = document.querySelector(":root");
function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(screenTop, scrollLeft);
  };

  rootElement.style.scrollBehavior = "auto";
}

function enableScroll() {
  window.onscroll = function () {};
  rootElement.style.scrollBehavior = "smooth";
  localStorage.setItem("opened", "true");
}

if (!localStorage.getItem("opened")) {
  disableScroll();
}

//script form google sheet ketika sudah mengisi kehadiran pesta pernikahan
window.addEventListener("load", function () {
  const form = document.getElementById("my-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      alert("Konfirmasi Kehadiran Berhasil Terkirim!");
    });
  });
});
