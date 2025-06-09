const countdown = () => {
    const endDate = new Date("2025-10-03T00:00:00");
    const now = new Date();
    const diff = endDate - now;

    if (diff <= 0) {
      document.getElementById("countdown").innerHTML = "<h2>Событие наступило!</h2>";
      return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const weeks = Math.floor(totalSeconds / (7 * 24 * 60 * 60));
    const days = Math.floor((totalSeconds % (7 * 24 * 60 * 60)) / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById("weeks").textContent = String(weeks).padStart(2, '0');
    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    const ringed = document.querySelector('.ringed');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            ringed.classList.add('visible');
          } else {
            ringed.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.5
      }
    );

    if (ringed) observer.observe(ringed);
  });

  countdown();
  setInterval(countdown, 1000);

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible'); 
          }
        });
      }, {
        threshold: 0.1 
      });
    
      document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));