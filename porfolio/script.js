const socialLinks = [
  { label: "GitHub", icon: "GH", url: "https://github.com/johndoe" },
  { label: "LinkedIn", icon: "in", url: "https://linkedin.com" },
  { label: "Email", icon: "@", url: "mailto:johndoe@example.com" },
];

const stats = [
  { icon: "ED", title: "Student", text: "Web Development" },
  { icon: "</>", title: "Projects", text: "6+ Completed" },
  { icon: "BOOK", title: "Currently Learning", text: "React & Node.js" },
];

const skills = [
  { name: "JavaScript", icon: "JS", color: "#facc15" },
  { name: "HTML5", icon: "5", color: "#fb923c" },
  { name: "CSS3", icon: "3", color: "#60a5fa" },
  { name: "Git", icon: "G", color: "#f87171" },
  { name: "GitHub", icon: "GH", color: "#e5e7eb" },
  { name: "VS Code", icon: "VS", color: "#7dd3fc" },
  { name: "React", icon: "R", color: "#bae6fd" },
  { name: "Node.js", icon: "N", color: "#86efac" },
  { name: "APIs", icon: "API", color: "#c4b5fd" },
];

const projects = [
  {
    title: "Todo Application",
    description: "A simple todo app to add, edit, delete and mark tasks as complete.",
    tags: ["JavaScript", "HTML", "CSS"],
    gradient: "linear-gradient(135deg, #fff7cc, #fde68a)",
  },
  {
    title: "Weather Dashboard",
    description: "Weather app that shows current weather and forecast using API.",
    tags: ["JavaScript", "API", "CSS"],
    gradient: "linear-gradient(135deg, #93c5fd, #dbeafe)",
  },
  {
    title: "Quiz Application",
    description: "A multiple choice quiz app with score calculation and timer.",
    tags: ["JavaScript", "HTML", "CSS"],
    gradient: "linear-gradient(135deg, #8b5cf6, #ddd6fe)",
  },
];

const journey = [
  { title: "HTML & CSS", status: "Completed", icon: "</>", type: "done" },
  { title: "JavaScript Basics", status: "Completed", icon: "JS", type: "done" },
  { title: "DOM Manipulation", status: "Completed", icon: "DOM", type: "done" },
  { title: "APIs & Fetch", status: "Completed", icon: "API", type: "done" },
  { title: "React.js", status: "In Progress", icon: "R", type: "active" },
  { title: "Node.js", status: "Next", icon: "</>", type: "next" },
];

const certifications = [
  "JavaScript Algorithms - freeCodeCamp",
  "Responsive Web Design - freeCodeCamp",
  "JavaScript Essentials - Udemy",
];

const contacts = [
  { icon: "@", label: "johndoe@example.com", url: "mailto:johndoe@example.com" },
  { icon: "TEL", label: "+234 801 234 5678", url: "tel:+2348012345678" },
  { icon: "GH", label: "github.com/johndoe", url: "https://github.com/johndoe" },
];

const tagColors = {
  JavaScript: "#fef08a",
  HTML: "#fed7aa",
  CSS: "#bfdbfe",
  API: "#ddd6fe",
};

function renderSocialLinks() {
  const container = document.querySelector("#social-links");
  container.innerHTML = socialLinks
    .map(
      (link) =>
        `<a href="${link.url}" aria-label="${link.label}" title="${link.label}">${link.icon}</a>`
    )
    .join("");
}

function renderStats() {
  const container = document.querySelector("#stats");
  container.innerHTML = stats
    .map(
      (item) => `
        <div class="stat">
          <span class="stat-icon">${item.icon}</span>
          <strong>${item.title}</strong>
          <p>${item.text}</p>
        </div>
      `
    )
    .join("");
}

function renderSkills() {
  const container = document.querySelector("#skills-list");
  container.innerHTML = skills
    .map(
      (skill) => `
        <div class="skill">
          <span style="background: ${skill.color}">${skill.icon}</span>
          <strong>${skill.name}</strong>
        </div>
      `
    )
    .join("");
}

function renderProjects() {
  const container = document.querySelector("#projects-list");
  container.innerHTML = projects
    .map(
      (project) => `
        <article class="project-card">
          <div class="project-preview" style="background: ${project.gradient}">
            <div class="mock-window">
              <div class="mock-line"></div>
              <div class="mock-line short"></div>
              <div class="mock-line"></div>
            </div>
          </div>
          <div class="project-body">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tags">
              ${project.tags
                .map((tag) => `<span style="background: ${tagColors[tag]}">${tag}</span>`)
                .join("")}
            </div>
          </div>
          <div class="project-links">
            <a href="https://github.com/johndoe">GH GitHub</a>
            <a href="#projects">Live Demo open</a>
          </div>
        </article>
      `
    )
    .join("");
}

function renderJourney() {
  const container = document.querySelector("#journey-list");
  container.innerHTML = journey
    .map(
      (step) => `
        <div class="journey-step ${step.type}">
          <span class="journey-icon">${step.icon}</span>
          <h3>${step.title}</h3>
          <p>${step.status}</p>
        </div>
      `
    )
    .join("");
}

function renderCertifications() {
  const container = document.querySelector("#certifications");
  container.innerHTML = certifications.map((certification) => `<li>${certification}</li>`).join("");
}

function renderContacts() {
  const container = document.querySelector("#contact-list");
  container.innerHTML = contacts
    .map(
      (contact) => `
        <a href="${contact.url}">
          <span>${contact.icon}</span>
          <span>${contact.label}</span>
        </a>
      `
    )
    .join("");
}

function setupThemeToggle() {
  const button = document.querySelector(".theme-toggle");

  button.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    button.textContent = document.body.classList.contains("dark") ? "Light" : "Dark";
  });
}

function setupContactForm() {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Thanks for reaching out. This demo form does not send messages yet.");
    form.reset();
  });
}

renderSocialLinks();
renderStats();
renderSkills();
renderProjects();
renderJourney();
renderCertifications();
renderContacts();
setupThemeToggle();
setupContactForm();

