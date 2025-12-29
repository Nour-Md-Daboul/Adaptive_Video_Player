const video = document.getElementById("video");

function setQuality(q) {
  video.src = `videos/video_${q}.mp4`;
  video.play();
  document.getElementById("info").innerText = "Manual Quality: " + q + "p";
}
