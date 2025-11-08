// script.js

// --- Data Models ---

const skillsData = {
  backend: [
    { name: "Node.js (Express.js)", level: "90%" },
    { name: "MySQL / PostgreSQL", level: "85%" },
    { name: "RESTful API Development", level: "90%" },
    { name: "Authentication & CRUD", level: "80%" },
  ],
  data: [
    { name: "SQL (Optimization & Procedures)", level: "90%" },
    { name: "Python (Data Preprocessing/Automation)", level: "85%" },
    { name: "Data Modeling & ETL Pipelines", level: "75%" },
    { name: "Machine Learning Basics (RF, LR)", level: "65%" },
  ],
  cloud: [
    { name: "AWS Cloud (Foundations)", level: "70%" },
    { name: "Git & Version Control", level: "85%" },
    { name: "Docker (Basic)", level: "50%" },
  ],
};

const projectsData = [
  {
    title: "API Development with Node.js",
    description:
      "Designing RESTful APIs for user and product management. Implemented CRUD operations and integrated with a MySQL database.",
    tech: ["Node.js", "Express.js", "MySQL", "REST"],
    github: "#", // Replace with actual GitHub link
  },
  {
    title: "Eligibility Prediction for Loan",
    description:
      "Developed a predictive model using Random Forest Classifier. Included preprocessing, hyperparameter tuning, and ROC curve evaluation.",
    tech: ["Python", "Random Forest", "Scikit-learn", "Data Preprocessing"],
    github: "#", // Replace with actual GitHub link
  },
//   {
//     title: "Insurance Upgrades Data Prep",
//     description:
//       "Cleaned and corrected customer data for a U.S.-based travel provider. Prepared datasets for a targeted insurance promotion campaign.",
//     tech: ["Python", "Data Cleaning", "Data Preprocessing", "ETL"],
//     github: "#", // Replace with actual GitHub link
//   },
//   {
//     title: "CodeClause Internship – Sentiment Analysis Project",
//     description:
//       "Developed a machine learning model to perform sentiment analysis on textual data during my internship at CodeClause. The project focused on natural language processing (NLP), feature extraction, and sentiment classification using Python.",
//     tech: ["Python", "NLP", "Scikit-learn", "Pandas", "Jupyter Notebook"],
//     github: "https://github.com/Kerollos-A/CodeClause_Sentiment_Analysis",
//   },

  {
    title: "CodeSoft Internship – Machine Learning Projects",
    description:
      "A collection of three machine learning projects completed during my internship at CodeSoft, covering data preprocessing, model training, and evaluation. Includes Titanic Survival Prediction, Credit Card Fraud Detection, and Iris Flower Classification.",
    tech: ["Python", "Pandas", "Scikit-learn", "Jupyter Notebook"],
    github: "https://github.com/Kerollos-A/codSoft_Projects",
  },
  {
  title: "Fake News Detection using NLP & Machine Learning",
  description:
    "Developed a machine learning model to detect fake news articles using TF-IDF vectorization and a LinearSVC classifier. Achieved over 93% accuracy in distinguishing real from fake news articles.",
  tech: ["Python", "Pandas", "Scikit-learn", "NLP", "TfidfVectorizer", "LinearSVC"],
  github: "https://github.com/Kerollos-A/CodeClause_Fake_News", // استبدل بالرابط الفعلي
},

// {
//   title: "Guess My Number – JavaScript Game",
//   description:
//     "A simple number guessing game built as part of Jonas Schmedtmann’s JavaScript course. The player guesses a number between 1 and 20, with feedback and scoring based on accuracy.",
//   tech: ["HTML", "CSS", "JavaScript"],
//   github: "https://github.com/Kerollos-A/Js-game-project-Guess-My-Number",
// //   liveDemo: "https://kerollos-a.github.io/Js-game-project-Guess-My-Number/" // 
// }




];

// --- Theme Toggle Logic ---

/**
 * Applies the correct theme to the <body> element.
 * @param {string} theme - 'dark' or 'light'.
 */
function applyTheme(theme) {
  const isLight = theme === "light";
  document.body.classList.toggle("light", isLight);

  // Toggle icons
  const sunIcons = document.querySelectorAll("#sun-icon, #sun-icon-mobile");
  const moonIcons = document.querySelectorAll("#moon-icon, #moon-icon-mobile");

  sunIcons.forEach((icon) => icon.classList.toggle("hidden", !isLight));
  moonIcons.forEach((icon) => icon.classList.toggle("hidden", isLight));

  // Save preference to localStorage
  localStorage.setItem("theme", theme);
}

/**
 * Initializes the theme based on user's saved preference or system preference.
 */
function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  const prefersLight =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches;

  let initialTheme = "dark"; // Default to dark mode
  if (savedTheme) {
    initialTheme = savedTheme;
  } else if (prefersLight) {
    initialTheme = "light";
  }

  applyTheme(initialTheme);
}

/**
 * Toggles the theme between dark and light.
 */
function toggleTheme() {
  const currentTheme = document.body.classList.contains("light")
    ? "light"
    : "dark";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(newTheme);
}

// --- Utility Functions ---

/**
 * Renders the skill bar HTML for a given set of skills.
 */
// script.js (Modified renderSkills function only)

// ... (Data Models remain the same) ...

// --- Utility Functions ---

/**
 * Renders the skill bar HTML for a given set of skills, removing explicit percentages.
 */
function renderSkills(containerId, skills) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // We now render a simple list item instead of a bar structure
  container.innerHTML = skills
    .map(
      (skill) => `
        <div class="skill-item p-2 bg-primary-dark/50 rounded-lg  transition-colors duration-500 hover:bg-primary-dark/80">
            <p class="text-md text-text-light flex justify-between">
                <span class="font-medium">${skill.name}</span>
            </p>
        </div>
    `
    )
    .join("");
}

// ... (The rest of script.js remains the same) ...

/**
 * Renders the project cards into the projects container.
 */
function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;

  container.innerHTML = projectsData
    .map(
      (project) => `
        <div class="project-card bg-secondary-dark p-6 rounded-xl shadow-xl flex flex-col justify-between transition-colors duration-500">
            <div class="space-y-4">
                <h3 class="text-2xl font-bold text-white transition-colors duration-500">${
                  project.title
                }</h3>
                <p class="text-text-muted">${project.description}</p>
            </div>
            <div>
                <div class="flex flex-wrap gap-2 mt-4">
                    ${project.tech
                      .map(
                        (t) =>
                          `<span class="text-xs font-medium bg-primary-dark text-accent-blue px-3 py-1 rounded-full transition-colors duration-500">${t}</span>`
                      )
                      .join("")}
                </div>
               <a href="${
                 project.github
               }" target="_blank" rel="noopener noreferrer" 
   class="inline-flex items-center text-accent-blue hover:text-white transition duration-300 font-semibold mt-3">
   <svg xmlns="http://www.w3.org/2000/svg" 
        width="18" height="18" viewBox="0 0 24 24" fill="currentColor" 
        class="mr-1">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 
      0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577
      0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61
      -.546-1.387-1.333-1.757-1.333-1.757
      -1.089-.744.084-.729.084-.729 
      1.205.084 1.84 1.236 1.84 1.236 
      1.07 1.835 2.807 1.305 3.492.998 
      .108-.776.417-1.305.76-1.605 
      -2.665-.3-5.466-1.332-5.466-5.931 
      0-1.31.465-2.381 1.235-3.221 
      -.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23 
      .96-.267 1.98-.399 3-.405 
      1.02.006 2.04.138 3 .405 
      2.28-1.552 3.285-1.23 3.285-1.23 
      .645 1.653.24 2.873.12 3.176 
      .765.84 1.23 1.911 1.23 3.221 
      0 4.611-2.805 5.625-5.475 5.921 
      .42.36.81 1.096.81 2.22 
      0 1.606-.015 2.896-.015 3.286 
      0 .315.21.69.825.57 
      C20.565 22.092 24 17.592 24 12.297 
      c0-6.627-5.373-12-12-12z"/>
   </svg>
   GitHub
</a>


            </div>
        </div>
    `
    )
    .join("");
}

//   ${project.liveDemo ? `  <span class="mx-3 text-gray-400 transition duration-300 group-hover:text-accent-blue">|</span>
//   <a href="${project.liveDemo}" target="_blank" rel="noopener noreferrer"
//      class="inline-flex items-center text-accent-blue hover:text-white transition duration-300 font-semibold">
//     <svg xmlns="http://www.w3.org/2000/svg" 
//          width="18" height="18" viewBox="0 0 24 24" fill="currentColor"
//          class="mr-1">
//       <path d="M14 3h7v7h-2V6.414l-9.293 9.293-1.414-1.414L17.586 5H14V3zM5 5h5V3H5c-1.1 0-2 .9-2 2v14
//                c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5h-2v5H5V5z"/>
//     </svg>
//     Live Demo
//   </a>` : ""}

/**
 * Animates the skill bars when the skills section is visible.
 */
function animateSkills(entries, observer) {
  // Skills are now rendered as a simple list, so no animation is needed.
  // We stop observing immediately.
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
    }
  });
}

/**
 * Toggles the visibility of the mobile navigation menu.
 */
function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
}

/**
 * Closes the mobile menu (used after a link is clicked).
 */
function closeMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  if (!menu.classList.contains("hidden")) {
    menu.classList.add("hidden");
  }
}

// --- Initialization on Document Load ---
document.addEventListener("DOMContentLoaded", () => {
  // 1. Theme Initialization (MUST be first)
  initTheme();

  // 2. Initial Data Rendering
  renderSkills("backend-skills", skillsData.backend);
  renderSkills("data-skills", skillsData.data);
  renderSkills("cloud-skills", skillsData.cloud);
  renderProjects();

  // Set current year in footer
  document.getElementById("current-year").textContent =
    new Date().getFullYear();

  // 3. Mobile Menu Setup
  const mobileButton = document.getElementById("mobile-menu-button");
  if (mobileButton) {
    mobileButton.addEventListener("click", toggleMobileMenu);
  }
  window.closeMobileMenu = closeMobileMenu; // Expose to HTML inline onclick

  // 4. Theme Toggle Button Setup
  const desktopToggle = document.getElementById("theme-toggle");
  const mobileToggle = document.getElementById("theme-toggle-mobile");
  if (desktopToggle) desktopToggle.addEventListener("click", toggleTheme);
  if (mobileToggle) mobileToggle.addEventListener("click", toggleTheme);

  // 5. Skill Bar Animation using Intersection Observer
  const skillsSection = document.getElementById("skills");
  if (skillsSection) {
    const observerOptions = {
      root: null, // relative to the viewport
      rootMargin: "0px",
      threshold: 0.2, // Trigger when 20% of the section is visible
    };
    const skillsObserver = new IntersectionObserver(
      animateSkills,
      observerOptions
    );
    skillsObserver.observe(skillsSection);
  }

  // 6. Initialize Lucide Icons (Must be called after all HTML is rendered)
  lucide.createIcons();

  // 7. Scroll-based NavBar Effect
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("shadow-2xl");
    } else {
      navbar.classList.remove("shadow-2xl");
    }
  });
});
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  scrollTopBtn.style.display = window.scrollY > 400 ? 'block' : 'none';
});


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const navLink = document.querySelector(`.nav-link[href="#${id}"]`);

      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove("text-accent-blue", "border-b-2", "border-accent-blue"));
        navLink.classList.add("text-accent-blue", "border-b-2", "border-accent-blue");
      }
    });
  },
  { threshold: 0.6 } // يعني لما 60% من السكشن يكون ظاهر
);

sections.forEach((section) => observer.observe(section));
