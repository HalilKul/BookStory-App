// Mobil menü için script
document.addEventListener('DOMContentLoaded', function() {
    // HTML'e mobil menü butonunu ekle
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        // Mobil menü butonu oluştur (sadece mobil görünümde gösterilecek)
        const mobileMenuBtn = document.createElement('div');
        mobileMenuBtn.className = 'mobile-menu-btn';
        mobileMenuBtn.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;
        
        navbar.insertBefore(mobileMenuBtn, navbar.querySelector('.nav-links'));
        
        mobileMenuBtn.addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('show');
        });
    }
    
    // Scroll olayını dinle ve navbar'ı güncelle
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });
    
    
    const body = document.querySelector('body');
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.id = 'scroll-top';
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.title = 'Yukarı Çık';
    body.appendChild(scrollTopBtn);
    
    // Scroll butonu görünümü
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });
    
    // Scroll butonu tıklama
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    
    const logo = document.querySelector('.logo');   
    if (logo) {
        logo.addEventListener('click', function() {       
            window.location.href = 'index.html';
        });   
        logo.style.cursor = 'pointer';
    }
});

// Ana menüdeki Kitaplar linkine tıklandığında trend kitaplar bölümüne kaydırma yapacak kod
document.addEventListener('DOMContentLoaded', function() {
    // Ana menüdeki "Kitaplar" linkini bul
    const kitaplarLink = document.querySelector('.nav-links a[href="#"]');
    
    if (kitaplarLink && kitaplarLink.textContent === 'Kitaplar') {
        kitaplarLink.addEventListener('click', function(e) {
            e.preventDefault(); // Varsayılan link davranışını engelle
            if (window.location.pathname === '/' || window.location.pathname.includes('index.html')) {
                const trendingSection = document.querySelector('.trending');
                if (trendingSection) {
                    trendingSection.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                window.location.href = 'index.html#trending';
            }
        });
    }
});

// Ana menü linkleri için kaydırma fonksiyonları
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Her bir link için kontrol et
    navLinks.forEach(function(link) {
        if (link.textContent === 'Kitaplar') {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                if (window.location.pathname === '/' || window.location.pathname.includes('index.html')) {
                    const trendingSection = document.querySelector('.trending');
                    if (trendingSection) {
                        trendingSection.scrollIntoView({ behavior: 'smooth' });
                    }
                } else {
                    window.location.href = 'index.html#trending';
                }
            });
        } 
        else if (link.textContent === 'Kategoriler') {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                if (window.location.pathname === '/' || window.location.pathname.includes('index.html')) {
                    const categoriesSection = document.querySelector('.categories');
                    if (categoriesSection) {
                        categoriesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                } else {
                    window.location.href = 'index.html#categories';
                }
            });
        }
    });
});
