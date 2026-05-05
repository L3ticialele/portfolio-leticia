function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

const elements = document.querySelectorAll('.hidden');

window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
});

particlesJS("particles-js", {
  particles: {
    number: {
      value: 60
    },
    color: {
      value: ["#7b2cbf", "#9d4edd", "#c77dff"]
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5
    },
    size: {
      value: 3
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#c77dff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      }
    }
  }
});

const skills = document.querySelectorAll('.progress');

function animateSkills() {
  skills.forEach(skill => {
    const rect = skill.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      skill.style.width = skill.getAttribute('data-width');
    }
  });
}

window.addEventListener('scroll', animateSkills);

function revealOnScroll() {
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.style.top = e.clientY + 'px';
  cursor.style.left = e.clientX + 'px';
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

