// Ana sayfa ve genel site fonksiyonları
document.addEventListener('DOMContentLoaded', function () {
    // Kategorilere tıklama işlevi
    const categoryCards = document.querySelectorAll('.category-card');
    if (categoryCards) {
        categoryCards.forEach(card => {
            card.addEventListener('click', function () {
                const categoryName = this.querySelector('h3').textContent;

                alert(`${categoryName} kategorisi şu anda erişilebilir değil.`);

            });
        });
    }

    // Mobil menü için hamburger menüsü
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function () {
            navLinks.classList.toggle('show');
        });
    }

    // Kitap incele butonları için hover efekti
    const bookCards = document.querySelectorAll('.book-card');
    if (bookCards) {
        bookCards.forEach(card => {
            const infoSection = card.querySelector('.book-info');
            const btn = card.querySelector('.btn');

            if (infoSection && btn) {
                card.addEventListener('mouseenter', function () {
                    btn.style.opacity = '1';
                });

                card.addEventListener('mouseleave', function () {
                    btn.style.opacity = '0.8';
                });
            }
        });
    }

    // Giriş yap ve üye ol butonları
    const loginBtn = document.querySelector('.navbar .btn-outline');
    const signupBtn = document.querySelector('.navbar .btn-primary');

    if (loginBtn && signupBtn) {
        loginBtn.addEventListener('click', function () {
            window.location.href = "login.html";
        });

        signupBtn.addEventListener('click', function () {
            window.location.href = "register.html";
        });
    }
    // Fiyatlandırma kartları için hover efekti
    const pricingCards = document.querySelectorAll('.pricing-card');
    if (pricingCards) {
        pricingCards.forEach(card => {
            card.addEventListener('mouseenter', function () {
                this.querySelector('.btn').classList.add('btn-hover');
            });

            card.addEventListener('mouseleave', function () {
                this.querySelector('.btn').classList.remove('btn-hover');
            });
        });
    }

    // Sayfanın başına kaydırma butonu
    const scrollTopBtn = document.getElementById('scroll-top');
    if (scrollTopBtn) {
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 300) {
                scrollTopBtn.style.display = 'block';
            } else {
                scrollTopBtn.style.display = 'none';
            }
        });

        scrollTopBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// Tab sistemi için fonksiyon
function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    if (tabButtons.length > 0 && tabContents.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function () {
                tabButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                // İlgili içeriği göster
                const tabId = this.getAttribute('data-tab');
                tabContents.forEach(content => {
                    content.classList.remove('active');
                    if (content.id === tabId) {
                        content.classList.add('active');
                    }
                });
            });
        });
    }
}

// Sesli kitap oynatıcısı için fonksiyonlar
function setupAudioPlayer() {
    const playBtn = document.querySelector('.play-btn');
    const progressBar = document.querySelector('.progress');
    const timeDisplay = document.querySelector('.time');

    if (playBtn && progressBar && timeDisplay) {
        let isPlaying = false;

        playBtn.addEventListener('click', function () {
            if (isPlaying) {
                this.innerHTML = '►';
                isPlaying = false;
            } else {
              
                this.innerHTML = '❚❚';
                isPlaying = true;

              
                simulatePlayback();
            }
        });

        // Oynatmayı simüle eden fonksiyon
        function simulatePlayback() {
            let progress = 30; 
            let currentTime = 88; 
            const totalTime = 300; 

            updateProgress(progress, currentTime, totalTime);

           
            if (isPlaying) {
                const interval = setInterval(() => {
                    if (!isPlaying) {
                        clearInterval(interval);
                        return;
                    }

                    progress += 0.1;
                    currentTime += 0.3;

                    if (progress >= 100 || currentTime >= totalTime) {
                        clearInterval(interval);
                        playBtn.innerHTML = '►';
                        isPlaying = false;
                        progress = 0;
                        currentTime = 0;
                    }

                    updateProgress(progress, currentTime, totalTime);
                }, 300);
            }
        }

        
        function updateProgress(percent, current, total) {
            progressBar.style.width = `${percent}%`;
            timeDisplay.textContent = `${formatTime(current)} / ${formatTime(total)}`;
        }

        function formatTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${minutes}:${secs < 10 ? '0' + secs : secs}`;
        }
    }
}

// Kitap arama fonksiyonu
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');

    if (searchInput && searchBtn) {
        searchBtn.addEventListener('click', function () {
            const query = searchInput.value.trim();
            if (query.length > 0) {
                alert(`'${query}' için arama özelliği henüz aktif değil.`);
                
            }
        });

        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                const query = this.value.trim();
                if (query.length > 0) {
                    alert(`'${query}' için arama özelliği henüz aktif değil.`);
                   
                }
            }
        });
    }
}


document.addEventListener('DOMContentLoaded', function () {
    setupTabs();
    setupAudioPlayer();
    setupSearch();
});
// Özellik kartları için hover efekti
document.addEventListener('DOMContentLoaded', function () {
    const featureCards = document.querySelectorAll('.feature-card');

    if (featureCards) {
        featureCards.forEach(card => {
            card.addEventListener('mouseenter', function () {
                this.classList.add('active');
            });

            card.addEventListener('mouseleave', function () {
                this.classList.remove('active');
            });
        });
    }
});

// CTA (Call to Action) bölümü için fonksiyon
function toggleHeroSection() {
    const heroSection = document.querySelector('.hero');

    if (heroSection) {
        heroSection.innerHTML = `
            <div class="container">
                <h1>Binlerce sesli kitaba sınırsız erişim</h1>
                <p>İstediğiniz zaman, istediğiniz yerde, en sevdiğiniz kitapları dinleyin. Sınırsız hikayelerle dolu dünyaya hoş geldiniz.</p>
                <button class="btn btn-primary btn-lg">14 Gün Ücretsiz Deneyin</button>
            </div>
        `;

        
        heroSection.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=80')`;
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const ctaButton = document.querySelector('.cta .btn-light');

    if (ctaButton) {
        ctaButton.addEventListener('click', toggleHeroSection);
    }
});