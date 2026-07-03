Darian Irani — project portfolio
Live: https://darian-7.github.io/Darian-portfolio/

Static single-page site (no build step). Open index.html or serve the folder:
  python3 -m http.server

Structure
  index.html            Markup + section structure
  assets/css/site.css   Design system, themes, responsive
  assets/js/site.js     Content data (projects/skills/education) + interactions
  assets/fonts/         Self-hosted Geist + Geist Mono
  images/ , videos/     Project media

To add or edit a project, edit the `projects` array in assets/js/site.js
(cat: 'ai-ml' | 'robotics' | 'mechanical'; media img or video; <strong> keeps tech bold).
