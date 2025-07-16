
function switchLanguage(lang) {
    document.querySelectorAll('[data-fr]').forEach(el => {
        el.textContent = lang === 'fr' ? el.getAttribute('data-fr') : el.getAttribute('data-en');
    });
}
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('intro').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }, 3200);
});
