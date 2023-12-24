// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Highlight the clicked section in the navigation
        document.querySelectorAll('a').forEach(link => link.classList.remove('current'));
        this.classList.add('current');
    });
});

// Highlight the current section in the navigation on scroll
document.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;

    document.querySelectorAll('section').forEach(section => {
        const offset = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= offset && scrollPosition < offset + height) {
            document.querySelectorAll('a').forEach(link => link.classList.remove('current'));
            document.querySelector(`a[href="#${section.id}"]`).classList.add('current');
        }
    });
});
