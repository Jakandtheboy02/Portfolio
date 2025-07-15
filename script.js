// Loader Hide on Page Load
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  if (loader) {
    loader.style.display = "none";
  }
});

// Explore Button Observer
document.addEventListener("DOMContentLoaded", () => {
  const exploreBtn = document.querySelector('.explore-btn');
  const trigger = document.querySelector('#footer-trigger');

  if (exploreBtn && trigger) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            exploreBtn.style.opacity = 0;
            exploreBtn.style.pointerEvents = 'none';
          } else {
            exploreBtn.style.opacity = 1;
            exploreBtn.style.pointerEvents = 'auto';
          }
        });
      },
      {
        root: null,
        threshold: 0.01
      }
    );

    observer.observe(trigger);
  }

  // Contact Form Submission Handler
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name && email && message) {
        alert(`Thanks ${name}, your message has been sent!`);
        form.reset();
      } else {
        alert("Please fill in all fields.");
      }
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const filterSelect = document.getElementById("filterSelect");
  const cards = document.querySelectorAll(".project-card");

  filterSelect.addEventListener("change", () => {
    const value = filterSelect.value;

    cards.forEach(card => {
      if (value === "all" || card.classList.contains(value)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      cards.forEach(card => {
        const category = card.dataset.category;
        if (filter === "all" || category === filter) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
