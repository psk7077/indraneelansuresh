(function () {
    var PREF_KEY = 'siteLang';
    var DEFAULT  = 'en';

    function applyLang(lang) {
        // Show/hide content blocks
        document.querySelectorAll('[lang="en"]').forEach(function (el) {
            el.style.display = (lang === 'en') ? '' : 'none';
        });
        document.querySelectorAll('[lang="ta"]').forEach(function (el) {
            el.style.display = (lang === 'ta') ? '' : 'none';
        });

        // Update button states
        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        localStorage.setItem(PREF_KEY, lang);
    }

    document.addEventListener('DOMContentLoaded', function () {
        var saved = localStorage.getItem(PREF_KEY) || DEFAULT;
        applyLang(saved);

        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            btn.addEventListener('click', function () {
                applyLang(this.dataset.lang);
            });
        });
    });
}());
