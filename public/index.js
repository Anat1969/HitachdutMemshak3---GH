/**
 * LOGIC
 * Routing, State, Event Handlers
 */

import { lessons } from './data.js';

// State
let currentLesson = 'about';
let currentTab = 0;

// Expose lessons globally for debugging
window.lessons = lessons;

// Initialize immediately if DOM is ready, or wait for DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

function initApp() {
  renderApp();
  attachEventListeners();
  loadLesson('about');
}

/**
 * Render main app structure
 */
function renderApp() {
  const app = document.getElementById('app');

  app.innerHTML = `
    <nav class="sidebar">
      <div class="nav-header">
        <p class="nav-logo">קורס בינה מלאכותית</p>
      </div>
      <ul class="nav-items" id="nav-items"></ul>
    </nav>

    <main id="main-content"></main>

    <footer>
      <p>© 2026 ענת שטרן. קורס בתהליך. <a href="https://github.com/anat1969">GitHub</a></p>
    </footer>
  `;

  // Render navigation
  const navItems = document.getElementById('nav-items');
  lessons.forEach(lesson => {
    const li = document.createElement('li');
    li.className = 'nav-item';
    li.innerHTML = `
      <button class="nav-link" data-lesson="${lesson.id}">
        ${lesson.title}
      </button>
    `;
    navItems.appendChild(li);
  });
}

/**
 * Attach event listeners
 */
function attachEventListeners() {
  // Navigation
  document.addEventListener('click', (e) => {
    const navLink = e.target.closest('.nav-link');
    if (navLink) {
      const lessonId = navLink.getAttribute('data-lesson');
      loadLesson(lessonId);
    }

    // Tab buttons
    const tabBtn = e.target.closest('.tab-button');
    if (tabBtn) {
      switchTab(tabBtn);
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      switchNextTab();
    } else if (e.key === 'ArrowLeft') {
      switchPrevTab();
    }
  });
}

/**
 * Load lesson and render its content
 */
function loadLesson(lessonId) {
  currentLesson = lessonId;
  currentTab = 0;

  // Update nav active state
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-lesson') === lessonId) {
      link.classList.add('active');
    }
  });

  // Render lesson content
  const lesson = lessons.find(l => l.id === lessonId);
  if (!lesson) return;

  const mainContent = document.getElementById('main-content');

  mainContent.innerHTML = `
    <section class="section active" data-lesson="${lesson.id}">
      <h1>${lesson.title}</h1>
      <p class="description">${lesson.description}</p>

      <div class="tabs" id="tabs"></div>
      <div id="tab-contents"></div>
    </section>
  `;

  // Render tabs
  const tabsContainer = document.getElementById('tabs');
  lesson.tabs.forEach((tab, index) => {
    const button = document.createElement('button');
    button.className = `tab-button ${index === 0 ? 'active' : ''}`;
    button.textContent = tab.label;
    button.setAttribute('data-tab-index', index);
    tabsContainer.appendChild(button);
  });

  // Render tab contents
  const contentsContainer = document.getElementById('tab-contents');
  lesson.tabs.forEach((tab, index) => {
    const div = document.createElement('div');
    div.className = `tab-content ${index === 0 ? 'active' : ''}`;
    div.setAttribute('data-tab-index', index);
    div.innerHTML = tab.content;
    contentsContainer.appendChild(div);
  });

  // Scroll to top
  window.scrollTo(0, 0);
}

/**
 * Switch to tab
 */
function switchTab(button) {
  const tabIndex = parseInt(button.getAttribute('data-tab-index'), 10);
  if (isNaN(tabIndex)) return;

  currentTab = tabIndex;

  // Update button states
  document.querySelectorAll('.tab-button').forEach((btn, i) => {
    btn.classList.toggle('active', i === tabIndex);
  });

  // Update content states
  document.querySelectorAll('.tab-content').forEach((content, i) => {
    content.classList.toggle('active', i === tabIndex);
  });
}

/**
 * Switch to next tab
 */
function switchNextTab() {
  const lesson = lessons.find(l => l.id === currentLesson);
  if (!lesson) return;

  const nextTab = (currentTab + 1) % lesson.tabs.length;
  const buttons = document.querySelectorAll('.tab-button');
  if (buttons[nextTab]) {
    buttons[nextTab].click();
  }
}

/**
 * Switch to previous tab
 */
function switchPrevTab() {
  const lesson = lessons.find(l => l.id === currentLesson);
  if (!lesson) return;

  const prevTab = (currentTab - 1 + lesson.tabs.length) % lesson.tabs.length;
  const buttons = document.querySelectorAll('.tab-button');
  if (buttons[prevTab]) {
    buttons[prevTab].click();
  }
}
