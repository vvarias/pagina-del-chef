document.querySelectorAll('.faq h3').forEach(faq => {
    faq.addEventListener('click', () => {
        faq.nextElementSibling.style.display = faq.nextElementSibling.style.display === 'block' ? 'none' : 'block';
    });
});

document.querySelector('.menu-btn').addEventListener('click', () => {
    const nav = document.querySelector('header nav');
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
});