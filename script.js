window.addEventListener('DOMContentLoaded', () => {

// Show the loader immediately
  document.body.classList.add('loading');

  // Set a timeout to hide the loader after 1 second (1000ms)
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 1000); // 1 second


  const icon = document.querySelector('.icon-scale');
  const slogan = document.getElementById('slogan');


  // Step 1: Start icon scale
  setTimeout(() => {
    icon.classList.add('icon-scale');
  }, 100);

  // Step 2: Slide-up animation for the slogan
  setTimeout(() => {
    slogan.classList.remove('opacity-0');
    slogan.classList.add('animate-slide-up');
  }, 2500); // Start after the icon animation



// Wait for 4 seconds and then fade out the overlay
setTimeout(() => {
  const overlay = document.getElementById('introOverlay');
  overlay.classList.add('opacity-0');

  // Wait for the transition to finish before removing it completely
  overlay.addEventListener('transitionend', () => {
    overlay.style.display = 'none';
  });
}, 4500);

// Responsive navbar
const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');

  menuBtn.addEventListener('click', () => {
    // Toggle visibility
    mobileMenu.classList.toggle('hidden');

    // Toggle icon between hamburger and close
    if (mobileMenu.classList.contains('hidden')) {
      menuIcon.classList.remove('fa-times');
      menuIcon.classList.add('fa-bars');
    } else {
      menuIcon.classList.remove('fa-bars');
      menuIcon.classList.add('fa-times');
    }
  });

  // Close menu on link click
  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      menuIcon.classList.remove('fa-times');
      menuIcon.classList.add('fa-bars');
    });
  });










  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = encodeURIComponent(document.getElementById('name').value);
    const email = encodeURIComponent(document.getElementById('email').value);
    const message = encodeURIComponent(document.getElementById('message').value);
    
    const phoneNumber = "918318162415"; // WhatsApp number without +
    const fullMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${fullMessage}`, '_blank');
  });

  function sendGmail() {
    const name = encodeURIComponent(document.getElementById('name').value);
    const email = encodeURIComponent(document.getElementById('email').value);
    const message = encodeURIComponent(document.getElementById('message').value);

    const subject = encodeURIComponent("Contact Form Inquiry");
    const body = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    
    window.location.href = `mailto:gaurlegalservice@gmail.com?subject=${subject}&body=${body}`;
  }


const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add the class to trigger animation
      entry.target.classList.add('visible');

      // Stop observing once the element has been animated
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

// Select all elements that you want to animate
const elements = document.querySelectorAll('.animated-element');

// Observe each element
elements.forEach(element => {
  observer.observe(element);
});


});
