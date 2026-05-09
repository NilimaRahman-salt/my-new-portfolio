document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio Loaded Successfully!");

    const cards = document.querySelectorAll('.project-card');

    if (cards.length > 0) {
        cards.forEach(card => {
            card.style.cursor = "pointer";

            card.addEventListener('mouseenter', () => {
                card.style.transform = "scale(1.05)";
                card.style.transition = "all 0.3s ease-in-out";
                card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = "scale(1)";
                card.style.boxShadow = "none";
            });
        });
    } else {
        console.warn("No project cards found. Please check if your HTML has class='project-card'");
    }
});
