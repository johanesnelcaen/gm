
document.getElementById('voirPlusBtn').addEventListener('click', function() {
    var contenu = document.getElementById('voir-plus');
    if (contenu.style.display === 'none') {
      contenu.style.display = 'block';
      this.textContent = 'Voir moins';  // Change le texte du bouton
    } else {
      contenu.style.display = 'none';
      this.textContent = 'Voir plus';  // Réinitialise le texte du bouton
    }
  });

  
    document.addEventListener('DOMContentLoaded', function() {
      var options = {
        strings: ["Coucou, ça roule ?", "Bienvenue sur notre site web !" , "Nous , on est motivé !"],
        typeSpeed: 50, // Vitesse de frappe (en millisecondes)
        backSpeed: 25, // Vitesse d'effacement (en millisecondes)
        loop: true // Pour répéter indéfiniment
      };
  
      var typed = new Typed("#typed-output", options);
    });
  

    document.addEventListener('DOMContentLoaded', function() {
        const titreElements = document.querySelectorAll('.titre');
        const hiddenElements = document.querySelectorAll('.hidden');
    
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        titreElements.forEach(element => {
            observer.observe(element);
            
        });
        hiddenElements.forEach(element => {
            observer.observe(element);
            
        });

    });
    
      
  window.addEventListener('load', () => {
    const swiper = new Swiper('.slide-container', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        }
      }
    });
  });
  window.addEventListener('load', () => {
  const container = document.querySelector('.slide-container');
  console.log(container);
  if (!container) {
    console.error("Swiper container introuvable");
    return;
  }
  // init Swiper...
});




     
