const get = (query) => document.querySelector(query);

const closeBtn = get(".close-btn");
const toggleBtn = get(".toggle-btn");
const sidebar = get(".sidebar");
const projectsLink = get(".projects-link");
const projects = get(".projects");

const navLinks = document.querySelectorAll(".nav-links>li");
const sidebarLinks = document.querySelectorAll(".sidebar-links a");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.add("sidebar-show");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("sidebar-show");
});

projectsLink.addEventListener("click", (e) => {
  const { bottom, left, right } = e.currentTarget.getBoundingClientRect();
  projects.classList.toggle("show-projects");
});

sidebarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("sidebar-show");
  });
});

navLinks.forEach((link, idx) => {
  if (idx !== 1) {
    link.addEventListener("click", () => {
      projects.classList.remove("show-projects");
    });
  }
});
