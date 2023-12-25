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

// JavaScript for Back-to-Top Button
document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("back-to-top-btn");

    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    }

    btn.addEventListener("click", function () {
        topFunction();
    });

    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    }
});


