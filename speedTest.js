async function testSpeed() {
  const startTime = new Date().getTime();
  const image = new Image();
  const imageSize = 500000; // 500KB

  return new Promise((resolve) => {
    image.onload = () => {
      const endTime = new Date().getTime();
      const duration = (endTime - startTime) / 1000;
      const speedMbps = (imageSize * 8) / duration / 1024 / 1024;
      resolve(speedMbps);
    };
    image.src = "https://via.placeholder.com/1000x1000?" + Math.random();
  });
}
