function redirect() {
    window.location.href = "registro.html";
}
document.querySelector('.menu-btn').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});