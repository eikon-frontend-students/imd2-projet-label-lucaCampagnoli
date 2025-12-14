document.querySelectorAll(".trav").forEach((link) => {
  const img = link.querySelector("img"); // l'image à l'intérieur

  link.addEventListener("mousemove", (e) => {
    const rect = link.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const offsetX = (x - rect.width / -3) / 80;
    const offsetY = (y - rect.height / -3) / 8;

    img.style.transform = `rotateY(${offsetX}deg) rotateX(${-offsetY}deg) scale(1.05)`;
    img.style.filter = "brightness(1.5)";
  });

  link.addEventListener("mouseleave", () => {
    img.style.transform = "rotateY(-20deg) rotateX(30deg) scale(1)";
    img.style.filter = "brightness(1.2)";
  });
});
