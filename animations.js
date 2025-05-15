// Animowany terminal - Typed.js
    var typed = new Typed('#typed', {
      strings: [
        "C:\\Users\\Mikolaj> ipconfig\nIPv4 Address. . . . . . . . . . . : 192.168.1.100",
        "C:\\Users\\Mikolaj> ping google.com\nReply from 142.250.74.14: bytes=32 time=15ms TTL=117",
        "C:\\Users\\Mikolaj> whoami\nmikolaj\\administrator"
      ],
      typeSpeed: 40,
      backSpeed: 20,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '_'
    });

    // Przełącznik trybu Dark/Light
    const toggleBtn = document.getElementById('toggleThemeBtn');
    toggleBtn.addEventListener('click', () => {
      // Lepsze podejście to toggle'owanie klasy na body
      document.body.classList.toggle('light-theme'); 
      const isLight = document.body.classList.contains('light-theme');
      toggleBtn.setAttribute('aria-pressed', isLight);
      toggleBtn.textContent = isLight ? '☀️' : '🌙';
    });


    // Animacja dla osi czasu - pojawienie się elementów
    const observerTimeline = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('timeline-item-visible');
        } else {
        }
      });
    }, { threshold: 0.2 }); 

    document.addEventListener('DOMContentLoaded', () => {
      // Obserwowanie elementów osi czasu
      document.querySelectorAll('.timeline-item').forEach(item => {
        observerTimeline.observe(item);
      });

      // Obserwator dla sekcji nauki
      const observerLearning = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Animacja elementów nauki
            document.querySelectorAll('#learning .learning-item').forEach((el, index) => {
              el.style.opacity = '0'; 
              el.style.transform = 'translateY(30px)'; 
              setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'; 
              }, 200 * index);
               el.style.transition = 'none'; 
            });
            observerLearning.unobserve(entry.target); 
          }
        });
      }, { threshold: 0.3 }); 

      // Obserwuj sekcję nauki
      observerLearning.observe(document.getElementById('learning'));

      // Animacja dla kart specjalizacji (Kompetencje Techniczne)
      document.querySelectorAll('.specialization-card').forEach((card, index) => {
        card.style.setProperty('--card-index', index);
      });

      // Obserwator dla sekcji specjalizacji (teraz Kompetencje Techniczne)
      const observerSpec = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Animacja pasków wypełnienia
            document.querySelectorAll('#kompetencje .meter-fill').forEach(el => {
              el.style.width = '0%'; 
              // Wymuszenie reflow, aby reset zadziałał
              el.offsetWidth;
              setTimeout(() => {
                el.style.width = el.getAttribute('data-level') + '%';
              }, 300); 

            });
            // Opcjonalna animacja pojawiania się dla related-tools
             document.querySelectorAll('#kompetencje .related-tools').forEach((el, index) => {
                 el.style.opacity = '0'; 
                 el.style.transform = 'translateY(20px)'; 
                  // Wymuszenie reflow
                 el.offsetWidth;
                 setTimeout(() => {
                     el.style.opacity = '1';
                     el.style.transform = 'translateY(0)';
                     el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out'; 
                 }, 500 + 150 * index); 
                 el.style.transition = 'none'; 
             });


            observerSpec.unobserve(entry.target); 
          }
        });
      }, { threshold: 0.3 }); 

      // Obserwuj sekcję Kompetencje Techniczne
      observerSpec.observe(document.getElementById('kompetencje')); 
    });