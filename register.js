
        document.addEventListener('DOMContentLoaded', function() {
            const registerForm = document.getElementById('register-form');
            
            if (registerForm) {
                registerForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    const firstName = document.getElementById('firstName').value;
                    const lastName = document.getElementById('lastName').value;
                    const email = document.getElementById('email').value;
                    const password = document.getElementById('password').value;
                    const confirmPassword = document.getElementById('confirmPassword').value;
                    
                    // Şifre eşleşme kontrolü
                    if (password !== confirmPassword) {
                        alert('Şifreler eşleşmiyor!');
                        return;
                    }
                    
                    // Burada kayıt işlemi yapılacak (backend bağlantısı)
                    console.log('Kayıt denemesi:', { firstName, lastName, email, password });
                    
                    // Başarılı kayıt simülasyonu
                    alert('Kayıt başarılı! Giriş sayfasına yönlendiriliyorsunuz.');
                    window.location.href = 'login.html';
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
