const video = document.getElementById("video-player");
const playBtn = document.getElementById("play-btn");
const progressBar = document.getElementById("progress-bar");

// Reproducir o pausar el video
playBtn.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    playBtn.textContent = "Pause";
  } else {
    video.pause();
    playBtn.textContent = "Play";
  }
});

// Actualizar la barra de progreso
video.addEventListener("timeupdate", function () {
  const progress = (video.currentTime / video.duration) * 100;
  progressBar.value = progress;
});

// Actualizar el tiempo del video al cambiar la barra de progreso
progressBar.addEventListener("input", function () {
  const time = (progressBar.value / 100) * video.duration;
  video.currentTime = time;
});
