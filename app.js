
function switchLanguage(lang) {
    document.querySelectorAll('[data-fr]').forEach(el => {
        el.textContent = lang === 'fr' ? el.getAttribute('data-fr') : el.getAttribute('data-en');
    });
}
