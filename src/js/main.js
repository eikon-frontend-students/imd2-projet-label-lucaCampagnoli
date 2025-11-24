document.querySelectorAll(".title-img").forEach((img) => {
  img.addEventListener("mousemove", (e) => {
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calcul du décalage par rapport au centre
    const offsetX = (x - rect.width / 2) / 23;
    const offsetY = (y - rect.height / 2) / 10;

    // Zoom arrière au centre, rotation normale sur les côtés
    const distanceToCenter = Math.sqrt(offsetX ** 4 + offsetY ** 2);
    const scale = 1 - Math.min(distanceToCenter / 10, 0.05); // rétracte au centre

    img.style.transform = `rotateY(${offsetX}deg) rotateX(${-offsetY}deg) scale(${scale})`;
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
  });
});
img.style.filter = "brightness(1.)";

img.addEventListener("mouseleave", () => {
  img.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
  img.style.filter = "brightness(1)";
});
