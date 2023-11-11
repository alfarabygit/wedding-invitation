const stickyTop = document.querySelector(".sticky-top");
const offcanvas = document.querySelector(".offcanvas");
const audioWrapper = document.querySelector(".audio-icon");
const audioIcon = document.querySelector(".audio-icon i");
const audio = document.querySelector("#bgm");
let isPlaying = false;

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
  //localStorage.setItem("opened", "true");
  playAudio();
}

// if (!localStorage.getItem("opened")) {
//
// }

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

disableScroll();
//membuat function audio
function playAudio() {
  audioWrapper.style.display = "flex";
  audio.play();
  isPlaying = true;
}

audioWrapper.onclick = function () {
  if (isPlaying) {
    audio.pause();
    audioIcon.classList.remove("bi-disc");
    audioIcon.classList.add("bi-pause-circle");
  } else {
    audio.play();
    audioIcon.classList.add("bi-disc");
    audioIcon.classList.remove("bi-pause-circle");
  }
  isPlaying = !isPlaying;
};

//url utk undangan
const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get("n") || "";
const pronoun = urlParams.get("p") || "Bapak/Ibu/Saudara/i";
const namaContainer = document.querySelector(".hero h4 span");
namaContainer.innerText = `${pronoun} ${nama},`.replace(/ ,$/, ",");

document.querySelector("#nama").value = nama;
