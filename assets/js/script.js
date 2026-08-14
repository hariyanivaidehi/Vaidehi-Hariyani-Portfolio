'use strict';

// Element toggle utility function
const elementToggleFunc = function (elem) { 
  if (elem) elem.classList.toggle("active"); 
}

// 1. Sidebar toggle functionality (for mobile viewports)
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", function () { 
    elementToggleFunc(sidebar); 
  });
}

// 2. Testimonials modal functionality (with safety checks)
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const testimonialsModalFunc = function () {
  if (modalContainer && overlay) {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
  }
}

if (testimonialsItem.length > 0 && modalContainer && overlay && modalCloseBtn) {
  testimonialsItem.forEach(item => {
    item.addEventListener("click", function () {
      const avatar = this.querySelector("[data-testimonials-avatar]");
      const title = this.querySelector("[data-testimonials-title]");
      const text = this.querySelector("[data-testimonials-text]");
      
      if (modalImg && avatar) {
        modalImg.src = avatar.src;
        modalImg.alt = avatar.alt;
      }
      if (modalTitle && title) modalTitle.innerHTML = title.innerHTML;
      if (modalText && text) modalText.innerHTML = text.innerHTML;

      testimonialsModalFunc();
    });
  });

  modalCloseBtn.addEventListener("click", testimonialsModalFunc);
  overlay.addEventListener("click", testimonialsModalFunc);
}

// 3. Contact Form Submission & Input Validation
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

if (form && formBtn) {
  // Input validation listener
  formInputs.forEach(input => {
    input.addEventListener("input", function () {
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  });

  // Fetch API Post submission
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const nameInput = form.querySelector('[name="fullname"]');
    const emailInput = form.querySelector('[name="email"]');
    const messageInput = form.querySelector('[name="message"]');

    if (!nameInput || !emailInput || !messageInput) return;

    // UI Feedback state
    formBtn.setAttribute("disabled", "");
    const buttonTextSpan = formBtn.querySelector("span");
    const originalText = buttonTextSpan ? buttonTextSpan.textContent : "Send Message";
    if (buttonTextSpan) buttonTextSpan.textContent = "Sending...";

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: nameInput.value,
          email: emailInput.value,
          message: messageInput.value
        })
      });

      const result = await response.json();
      if (result.success) {
        alert("Success! Your message was sent successfully.");
        form.reset();
      } else {
        alert("Failed to send message: " + (result.error || "Please try again later."));
      }
    } catch (error) {
      console.error("Contact form error:", error);
      alert("Could not reach backend. Message was not sent. Please try again.");
    } finally {
      if (buttonTextSpan) buttonTextSpan.textContent = originalText;
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      }
    }
  });
}

// 4. Scroll Snapping Smooth Scroll & Active Navbar Link Synchronization
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("article[data-page]");

// Nav Link click smooth scrolling
navigationLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const pageName = this.getAttribute("data-page");
    const targetPage = document.querySelector(`article[data-page="${pageName}"]`);
    
    if (targetPage) {
      targetPage.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Scroll IntersectionObserver to sync navbar links
const pageObserverOptions = {
  root: null,
  rootMargin: "-25% 0px -55% 0px", // Trigger when section occupies mid-viewport
  threshold: 0
};

const pageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const pageName = entry.target.getAttribute("data-page");
      
      navigationLinks.forEach(link => {
        if (link.getAttribute("data-page") === pageName) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  });
}, pageObserverOptions);

pages.forEach(page => pageObserver.observe(page));

// 5. Scroll Entrance Animations using IntersectionObserver
const animObserverOptions = {
  root: null,
  rootMargin: "0px 0px -60px 0px", // Trigger slightly before element comes in full view
  threshold: 0.1
};

const animObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      animObserver.unobserve(entry.target); // Trigger only once
    }
  });
}, animObserverOptions);

// Observe all elements with .scroll-anim class
const animElements = document.querySelectorAll(".scroll-anim");
animElements.forEach(el => animObserver.observe(el));

// 6. Dynamic Projects Loading from Backend API
async function loadDynamicProjects() {
  const projectListContainer = document.querySelector(".project-list");
  if (!projectListContainer) return;

  try {
    const response = await fetch('/api/projects');
    const projects = await response.json();
    
    // Clear static list items
    projectListContainer.innerHTML = '';

    projects.forEach(project => {
      const projectItem = document.createElement("li");
      projectItem.className = "project-item active scroll-anim anim-scale-up";
      projectItem.style.display = "block";
      projectItem.style.maxWidth = "600px";
      projectItem.style.width = "100%";
      projectItem.style.margin = "0 auto";

      const tagsHtml = project.tags && project.tags.length > 0 ? project.tags.join(' / ') : project.category;

      projectItem.innerHTML = `
        <a href="${project.link}" target="_blank" style="display: block;">
          <figure class="project-img" style="height: 280px;">
            <div class="project-item-icon-box" style="display: flex; justify-content: center; align-items: center;">
              <ion-icon name="eye-outline"></ion-icon>
            </div>
            <img src="${project.image}" alt="${project.title}" loading="lazy" style="object-position: center top;">
          </figure>
          <h3 class="project-title" style="margin-left: 0; font-size: 20px; font-weight: 600;">${project.title}</h3>
          <p class="project-category" style="margin-left: 0; color: #38bdf8;">${tagsHtml}</p>
        </a>
        <p style="margin-top: 15px; color: var(--light-gray-70); font-size: 15px; line-height: 1.6;">
          ${project.description}
        </p>
      `;

      projectListContainer.appendChild(projectItem);
      animObserver.observe(projectItem); // Attach scroll animation observer to dynamically added item
    });
  } catch (error) {
    console.error("Error dynamically fetching projects:", error);
  }
}

// Initialize dynamic project retrieval on load
window.addEventListener("DOMContentLoaded", () => {
  loadDynamicProjects();
});