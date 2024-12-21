document.addEventListener('DOMContentLoaded', () => {
    // Grab data from URL
    const urlParams = new URLSearchParams(window.location.search);
    const firstName = urlParams.get('firstName');
    const lastName  = urlParams.get('lastName');
    const email     = urlParams.get('email');
  
    const buttons = document.querySelectorAll('.category-button');
    const motivationTextBar = document.getElementById('motivation-text-bar');
    const motivationText = document.getElementById('motivation-text');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
  
    // Some motivational text for each category
    const motivationMap = {
      Physical: "Challenge your body and feel stronger every day!",
      Social: "Connect with friends and build meaningful relationships.",
      Emotional: "Embrace your emotions and grow from within.",
      Spiritual: "Find inner peace and nurture your soul.",
      Creative: "Unleash your imagination and create something beautiful.",
      Travel: "Explore new horizons and broaden your perspective."
    };
  
    // Hover events: show/hide text
    buttons.forEach(button => {
      const category = button.getAttribute('data-category');
  
      button.addEventListener('mouseenter', () => {
        motivationText.textContent = motivationMap[category] || '';
        motivationTextBar.style.opacity = '1';
      });
  
      button.addEventListener('mouseleave', () => {
        motivationTextBar.style.opacity = '0';
      });
  
      // Click event: pass all data (firstName, lastName, email) + chosen category to Page 3
      button.addEventListener('click', () => {
        // e.g. "Social" -> "Social/index.html"
        const folderName = category; // Make sure folder matches
        const nextPage   = `${folderName}/index.html`;
  
        const url = `${nextPage}?firstName=${encodeURIComponent(firstName)}`
                  + `&lastName=${encodeURIComponent(lastName)}`
                  + `&email=${encodeURIComponent(email)}`
                  + `&social=${encodeURIComponent(category)}`;
  
        window.location.href = url;
      });
    });
  
    // Dark mode toggle
    darkModeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      darkModeToggle.textContent = body.classList.contains('dark-mode') ? '☀' : '☾';
    });
  
    // Typing animation
    const typedTextSpan = document.getElementById('typed-text');
    const cursorSpan = document.getElementById('cursor');
  
    const textArray = [
      "Welcome to Your Challenge Journey",
      "Be Bold",
      "Push Your Limits",
      "Discover Yourself"
    ];
    const typingDelay = 100;
    const erasingDelay = 80;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;
  
    function type() {
      if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        setTimeout(erase, newTextDelay);
      }
    }
  
    function erase() {
      if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 500);
      }
    }
  
    // Start the typing effect
    setTimeout(type, 1000);
  });
  