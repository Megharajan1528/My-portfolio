// Smooth nav scrolling
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    // if anchor is a section id
    const href = this.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Toggle skills list visibility
const toggleBtn = document.getElementById("toggleSkillsBtn");
const skillsList = document.getElementById("skillsList");

toggleBtn.addEventListener("click", () => {
  skillsList.classList.toggle("hidden");

  // Change button text dynamically
  if (skillsList.classList.contains("hidden")) {
    toggleBtn.textContent = "Show Skills";
  } else {
    toggleBtn.textContent = "Hide Skills";
  }
});



// Small helper: collapse mobile nav (if you later add a mobile toggle)

