async function autoMode() {
  document.getElementById("info").innerText = "Testing speed...";

  const speed = await testSpeed();
  let quality;

  if (speed < 1) {
    quality = 240;
  } else if (speed < 3) {
    quality = 480;
  } else {
    quality = 720;
  }

  setQuality(quality);

  document.getElementById("info").innerText =
    "Auto Mode | Speed: " +
    speed.toFixed(2) +
    " Mbps | Quality: " +
    quality +
    "p";
}
