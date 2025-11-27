document.querySelectorAll(".title-img-wrapper").forEach((img) => {
  img.addEventListener("mousemove", (e) => {
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const offsetX = (x - rect.width / -2) / 80;
    const offsetY = (y - rect.height / -2) / 5;

    const distanceToCenter = Math.sqrt(offsetX ** 2 + offsetY ** 2);
    const scale = 1 - Math.min(distanceToCenter / 10, 0.05);

    img.style.transform = `rotateY(${offsetX}deg) rotateX(${-offsetY}deg) scale(${scale})`;
    img.style.filter = "brightness(1.2)"; // éclaircissement pendant hover
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
    img.style.filter = "brightness(1)";
  });
});
