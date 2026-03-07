(function () {
    var INTERVAL = 4500;

    document.addEventListener('DOMContentLoaded', function () {
        var slideshow = document.querySelector('.slideshow');
        if (!slideshow) return;

        var slides = slideshow.querySelectorAll('.slide');
        var dotsContainer = slideshow.querySelector('.slide-dots');
        var current = 0;
        var timer;

        // Build dots
        slides.forEach(function (_, i) {
            var dot = document.createElement('span');
            dot.className = 'dot' + (i === 0 ? ' active' : '');
            dot.addEventListener('click', function () { goTo(i); resetTimer(); });
            dotsContainer.appendChild(dot);
        });

        var dots = dotsContainer.querySelectorAll('.dot');

        function goTo(n) {
            slides[current].classList.remove('active');
            dots[current].classList.remove('active');
            current = (n + slides.length) % slides.length;
            slides[current].classList.add('active');
            dots[current].classList.add('active');
        }

        function next() { goTo(current + 1); }
        function prev() { goTo(current - 1); }

        function resetTimer() {
            clearInterval(timer);
            timer = setInterval(next, INTERVAL);
        }

        slideshow.querySelector('.slide-next').addEventListener('click', function () { next(); resetTimer(); });
        slideshow.querySelector('.slide-prev').addEventListener('click', function () { prev(); resetTimer(); });

        timer = setInterval(next, INTERVAL);
    });
}());
