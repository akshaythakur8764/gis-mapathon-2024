document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const offset = 50; // Adjust this offset based on your menu height
            const topPos = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

            window.scrollTo({
                top: topPos,
                behavior: 'smooth'
            });
        }
    });
});
