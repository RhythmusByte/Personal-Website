const swiper = new Swiper(".swiper", {
  
  direction: "horizontal",
  loop: true,

  
  pagination: {
    el: ".swiper-pagination",
  },

  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const menuIcon = document.querySelector(".menu-icon");
const navItems = document.querySelector(".nav-items");
const closeIcon = document.querySelector(".close-icon");
const navItemLinks = document.querySelectorAll(".nav-items ul li");
const mainNav = document.querySelector("nav.main-nav");
const sections = document.querySelectorAll("section");
const dots = document.querySelectorAll(".dots .dot");

menuIcon.addEventListener("click", () => {
  navItems.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  navItems.classList.remove("active");
});

navItemLinks.forEach((li, i) => {
  li.style.transitionDelay = `${i * 150}ms`;
});

navItemLinks.forEach((i) => {
  i.addEventListener("click", () => {
    navItems.classList.remove("active");
  });
});

const removeActiveClass = () => {
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
};

window.addEventListener("scroll", () => {
  let windowTop = window.scrollY;

  sections.forEach((section) => {
    let offset = section.offsetTop - 200;
    let height = section.offsetHeight - 200;
    let id = section.getAttribute("id");

    if (windowTop >= offset && windowTop < offset + height) {
      let currentDot = document.querySelector(`.dots a[href="#${id}"]`);
      removeActiveClass();
      currentDot.classList.add("active");
    } else if (windowTop < 300) {
      removeActiveClass();
      dots[0].classList.add("active");
    }
  });

  if (windowTop > 100) {
    mainNav.style.padding = "8px 0";
  } else {
    mainNav.style.padding = "16px 0";
  }
});

// Animated Text

const texts = ["Akhil", "Developer", "Blogger", "Akhil"];
  let currentTextIndex = 0;
  let currentCharIndex = 0;
  const dynamicTextElement = document.getElementById("dynamic-text");
  function animateText() {
   
    if (currentTextIndex >= texts.length) return;

    dynamicTextElement.textContent += texts[currentTextIndex].charAt(currentCharIndex);
    currentCharIndex++;
    
    if (currentCharIndex >= texts[currentTextIndex].length) {
      setTimeout(() => {
        eraseText();
      }, 1000); 
    } else {
      setTimeout(animateText, 50); 
    }
  }

  function eraseText() {
    if (currentTextIndex === texts.length - 1 && currentCharIndex === texts[currentTextIndex].length) {
        return; 
    }
    
    let text = dynamicTextElement.textContent;
    text = text.slice(0, -1);
    dynamicTextElement.textContent = text;
    
    if (text.length === 0) {
        currentCharIndex = 0;
        currentTextIndex++;
        if (currentTextIndex < texts.length) {
            setTimeout(animateText, 1000);
        }
    } else {
        setTimeout(eraseText, 50); 
    }
}

  animateText();  
