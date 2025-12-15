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

const imgs = document.querySelectorAll(".albums img, .diff-wrap img");

imgs.forEach((img) => {
  img.addEventListener("mousemove", (e) => {
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

    img.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  });
});

const loading = document.getElementById("loading");
const content = document.getElementById("content");

window.addEventListener("load", () => {
  // laisser le loading visible 2 secondes
  setTimeout(() => {
    loading.classList.remove("show"); // fade-out

    setTimeout(() => {
      loading.style.display = "none"; // masquer loading
      content.style.display = "block"; // montrer contenu
      content.classList.add("show"); // fade-in
    }, 600); // durée du fade CSS
  }, 2000); // durée du loading
});
