function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    const sectionTop = section.offsetTop;
    const scrollY = window.scrollY || window.pageYOffset;
    const distance = sectionTop - scrollY;
    const duration = 1000; // время анимации в миллисекундах
    let start = null;
  
    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      window.scrollTo(0, easeInOutQuad(progress, scrollY, distance, duration));
      if (progress < duration) {
        requestAnimationFrame(step);
      }
    }
  
    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }
  
    requestAnimationFrame(step);
  }