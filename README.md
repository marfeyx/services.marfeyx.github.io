# Marfeyx - Creative Services Website

This is the official repository for the Marfeyx creative services portfolio website, live at [services.marfeyx.github.io](https://services.marfeyx.github.io).

## Project Overview

This is a static website designed to showcase the web development and creative services offered by Marfeyx. The site is built with a focus on clean design, fast performance, and a clear presentation of services. It is fully responsive and includes features like a dark/light theme switcher and multi-language support.

## ✨ Features

*   **Responsive Design:** The layout adapts to all screen sizes, from mobile phones to desktop monitors.
*   **Theme Switcher:** Users can toggle between a light and dark mode for comfortable viewing.
*   **Multi-language Support:** The content can be switched between English and German.
*   **Static Site:** Built with pure HTML, CSS, and JavaScript for maximum performance and security.
*   **CSS Variables:** Used for easy theming and maintenance.

## 🛠️ Tech Stack

*   **HTML5:** For the structure and content of the pages.
*   **CSS3:** For styling, layout, and animations. Custom properties (variables) are used extensively.
*   **JavaScript:** For interactive elements like the theme switcher and language toggle.

## 📂 File Structure

The repository is organized into the following main directories and files:

```
/
├── 404/               # Custom 404 error page
├── ASSETS/            # Images, icons, and other static assets
├── contact/           # Contact page with a form
├── customisation/     # Page for custom service offers
├── JS/                # JavaScript files
│   ├── script.js      # Main script for theme/language switching
│   └── customisation.js # Scripts specific to the customisation page
├── offers/            # Service offers page
├── socials/           # Social media links page
├── index.html         # Home page
├── index.css          # Main stylesheet
├── README.md          # This file
└── CNAME              # Custom domain configuration for GitHub Pages
```

## 📝 Notes

### Design Philosophy

The design is intentionally minimal and content-focused. The goal is to provide information clearly and efficiently without unnecessary distractions. Animations are used sparingly to enhance the user experience without impacting performance.

### Customization

*   **Colors & Fonts:** The color scheme and typography can be easily modified by changing the CSS variables defined at the top of `index.css` and other page-specific CSS files.
*   **Content:** All text is in the HTML files. The `data-i18n` attributes are used by `script.js` to handle language switching. To add or change text, you'll need to update the corresponding HTML elements and the translation objects in the script.

### Local Development

To run this project locally, you can simply open the `index.html` file in your web browser. For the best experience, it's recommended to use a local server to avoid potential issues with file paths. Many code editors, like VS Code, have extensions (e.g., "Live Server") that can do this for you.

---

*This project was built to be lightweight, maintainable, and easily deployable on services like GitHub Pages.*
