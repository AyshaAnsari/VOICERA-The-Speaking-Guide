document.addEventListener("DOMContentLoaded", () => {
    const slides = document.getElementById("slides");
    const cards = document.querySelectorAll(".card");
    const totalCards = cards.length;
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalCards;
        // Each card is 600px wide + 50px gap = 650px total movement per slide
        slides.style.transform = `translateX(-${currentIndex * 650}px)`;
    }, 2000);
});
