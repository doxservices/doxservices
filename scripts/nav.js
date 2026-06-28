(function () {
    const hamburger = document.querySelector('.hamburger');
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    const navLinks = document.querySelector('.nav-links');
    if (!hamburger || !navLinks) return;

    const OPEN = '<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>';
    const CLOSE = '<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>';

    hamburger.addEventListener('click', function () {
        const isOpen = navLinks.classList.toggle('active');
        if (hamburgerIcon) hamburgerIcon.innerHTML = isOpen ? OPEN : CLOSE;
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            navLinks.classList.remove('active');
            if (hamburgerIcon) hamburgerIcon.innerHTML = CLOSE;
        });
    });
}());
