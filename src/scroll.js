const cards = document.querySelectorAll('.team-card');

const revealCards = () => {
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (cardTop < windowHeight) {
            card.classList.add('animate-reveal-x');
        }
    });
}

window.addEventListener('scroll', revealCards);
