const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden, .media-card, .section-title, .subsection-label');
hiddenElements.forEach((el) => observer.observe(el));