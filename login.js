document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Burada giriş işlemi yapılacak (backend bağlantısı)
            console.log('Giriş denemesi:', { email, password });
            
            // Başarılı giriş simülasyonu
            alert('Giriş başarılı! Ana sayfaya yönlendiriliyorsunuz.');
            window.location.href = 'index.html';
        });
    }
    
    // Logo tıklaması ile ana sayfaya dönüş
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.style.cursor = 'pointer';
        logo.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
});