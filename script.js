document.addEventListener("DOMContentLoaded", () => {
    const slides = document.getElementById("slides");
    const cards = document.querySelectorAll(".card");
    const totalCards = cards.length;
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalCards;
        
        // Dynamic calculation: Card width + margins + gap
        const firstCard = cards[0];
        const cardWidth = firstCard.offsetWidth;
        
        const cardStyle = window.getComputedStyle(firstCard);
        const marginLeft = parseInt(cardStyle.marginLeft) || 0;
        const marginRight = parseInt(cardStyle.marginRight) || 0;
        
        const slidesStyle = window.getComputedStyle(slides);
        const gap = parseInt(slidesStyle.gap) || 0;
        
        const totalStep = cardWidth + marginLeft + marginRight + gap;
        const totalMovement = totalStep * currentIndex;
        
        slides.style.transform = `translateX(-${totalMovement}px)`;
    }, 5000);
});
