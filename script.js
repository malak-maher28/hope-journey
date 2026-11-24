/* =========================================================
   HOPE JOURNEY – رحلة أمل | CENTRALIZED MEDIA & INTERACTIONS
   ========================================================= */

/**
 * CENTRALIZED MEDIA CONFIGURATION (`websiteMedia`)
 * Replace any URL below with your own local files when ready:
 * e.g., "assets/videos/hero.mp4" or "assets/images/about-1.jpg"
 */
const websiteMedia = {
    // 1. Hero Video (1)
    heroVideo: {
      src: "assets/videos/hero.mp4",
      poster: "assets/images/hero-poster.jpg"
    },
  
    // 2. About Us Images (2)
    aboutImages: [
      "assets/images/about-1.jpg",
      "assets/images/about-2.jpg"
    ],
  
    // 3. Service Images (4)
    serviceImages: [
      "assets/images/sensory.jpg",
      "assets/images/physical.jpg",
      "assets/images/speech.jpg",
      "assets/images/hydro.jpg"
    ],
  
    // 4. Country Videos (Single video per country card - 6 slots)
    countries: [
      {
        name: "Germany",
        video: "assets/videos/germany.mp4"
      },
      {
        name: "Saudi Arabia",
        video: "assets/videos/saudia.mp4"
      },
      {
        name: "India",
        video: "assets/videos/indian.mp4",
    },
      {
        name: "Morocco",
        video: "assets/videos/morco.mp4"
      },
      {
        name: "Sudan",
        video: "assets/videos/sudan.mp4"
      },
      {
        name: "Yemen",
        video: "assets/videos/yamen.mp4"
      }
    ],
  
    // 7. Founder Images (4)
    founderImages: [
      "assets/images/dr-shady.jpg",
      "assets/images/dr-morkos.jpg",
      "assets/images/dr-sayed.jpg",
      "assets/images/dr-esmat.jpg"
    ],
  
    // 8. Parent Feedback Images (3) & Videos (2)
    feedbackImages: [
      "assets/images/fainal1.jpg",
      "assets/images/fainal2.jpg",
      "assets/images/fainal3.jpg"
    ],
    feedbackVideos: [
      {
        src: "assets/videos/feedback-1.mp4",
        poster: "assets/images/end2.jpg"
      },
      {
        src: "assets/videos/feedback-2.mp4",
        poster: "assets/images/end1.jpg"
      }
    ],
  
    // 9. Contact Location Visual (1)
    contactLocationImage: "assets/images/egypt.jpg"
  };
  
  function populateMedia() {
    const heroVideo = document.getElementById("hero-video");
    if (heroVideo) {
      heroVideo.src = websiteMedia.heroVideo.src;
      heroVideo.poster = websiteMedia.heroVideo.poster;
    }
  
    websiteMedia.aboutImages.forEach((url, index) => {
      const img = document.getElementById(`about-img-${index + 1}`);
      if (img) img.src = url;
    });
  
    websiteMedia.serviceImages.forEach((url, index) => {
      const img = document.getElementById(`service-img-${index + 1}`);
      if (img) img.src = url;
    });
  
    websiteMedia.countries.forEach((country, index) => {
      const vid = document.getElementById(`country-video-${index + 1}`);
      if (vid) {
        vid.src = country.video;
      }
    });
  
    websiteMedia.founderImages.forEach((url, index) => {
      const img = document.getElementById(`founder-img-${index + 1}`);
      if (img) img.src = url;
    });
  
    websiteMedia.feedbackImages.forEach((url, index) => {
      const img = document.getElementById(`feedback-img-${index + 1}`);
      if (img) img.src = url;
    });
  
    websiteMedia.feedbackVideos.forEach((item, index) => {
      const vid = document.getElementById(`feedback-video-${index + 1}`);
      if (vid) {
        vid.src = item.src;
        vid.poster = item.poster;
      }
    });
  
    const locImg = document.getElementById("contact-location-img");
    if (locImg) locImg.src = websiteMedia.contactLocationImage;
  }
  
  function initNavigation() {
    const navbar = document.getElementById("navbar");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link, .btn-brand-nav");
    const navbarCollapse = document.getElementById("mainNav");
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (navbarCollapse && navbarCollapse.classList.contains("show")) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
          if (bsCollapse) bsCollapse.hide();
        }
      });
    });
  
    const sections = document.querySelectorAll("section[id]");
    window.addEventListener("scroll", () => {
      const scrollPos = window.scrollY + 140;
      sections.forEach((sec) => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");
        const activeLink = document.querySelector(`.navbar-nav a[href="#${id}"]`);
        if (activeLink) {
          if (scrollPos >= top && scrollPos < top + height) {
            document.querySelectorAll(".navbar-nav .nav-link").forEach((l) => l.classList.remove("active"));
            activeLink.classList.add("active");
          }
        }
      });
    });
  }
  
  function initContactForm() {
    const form = document.getElementById("hopeContactForm");
    const statusBox = document.getElementById("formStatusBox");
    if (!form) return;
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      form.classList.add("was-validated");
  
      if (!form.checkValidity()) {
        return;
      }
  
      const name = document.getElementById("parentName").value.trim();
      const phone = document.getElementById("parentPhone").value.trim();
      const age = document.getElementById("childAge").value.trim() || "Not specified";
      const service = document.getElementById("serviceSelect").value;
      const message = document.getElementById("parentMessage").value.trim();
  
      const whatsappText = encodeURIComponent(
        `Hello Hope Journey, I would like to ask about your services.\n\n` +
        `• Name: ${name}\n` +
        `• Phone: ${phone}\n` +
        `• Child's Age: ${age}\n` +
        `• Service: ${service}\n` +
        `• Message: ${message}`
      );
  
      const whatsappUrl = `https://wa.me/201559496076?text=${whatsappText}`;
  
      statusBox.style.display = "block";
      statusBox.innerHTML = `
        <h5 class="mb-2 fw-bold"><i class="bi bi-check-circle-fill text-success me-2"></i>Your Inquiry Is Ready!</h5>
        <p class="mb-3 small">
          Direct web form submission requires a server connection, so we have formatted your details for instant delivery via WhatsApp to our team.
        </p>
        <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">
          <i class="bi bi-whatsapp me-2"></i>Send Directly on WhatsApp Now
        </a>
      `;
    });
  }
  
  function initAnimations() {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || typeof gsap === "undefined") return;
  
    gsap.registerPlugin(ScrollTrigger);
  
    gsap.from(".hero-reveal", {
      y: 35,
      opacity: 0,
      duration: 0.9,
      stagger: 0.16,
      ease: "power3.out"
    });
  
    gsap.utils.toArray(".reveal-up").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: "top 86%", once: true },
        y: 30,
        opacity: 0,
        duration: 0.75,
        ease: "power2.out"
      });
    });
  
    gsap.utils.toArray(".reveal-left").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
        x: -35,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      });
    });
  
    gsap.utils.toArray(".reveal-right").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
        x: 35,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      });
    });
  
    document.querySelectorAll("section").forEach((section) => {
      const cards = section.querySelectorAll(".reveal-stagger");
      if (cards.length) {
        gsap.from(cards, {
          scrollTrigger: { trigger: section, start: "top 80%", once: true },
          y: 30,
          opacity: 0,
          duration: 0.65,
          stagger: 0.12,
          ease: "power2.out"
        });
      }
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    populateMedia();
    initNavigation();
    initContactForm();
    initAnimations();
  
    const yearSpan = document.getElementById("currentYear");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  });