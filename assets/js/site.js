/* ============================================================
   Darian Irani — Portfolio
   Static port of the Claude Design dc-runtime template.
   Holds content data + all interactions (no framework).
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Content data ----------
     cat: 'ai-ml' | 'robotics' | 'mechanical'
     media: { type: 'img'|'video', src }   (gifs use type 'img')
     hiTags: optional highlighted top tech (rendered first, accent-styled)
     desc may contain <strong> for tech terms (kept bold per brief).

     Order matters: the first FEATURED_COUNT projects are what the
     "All" view shows before "Show more" is clicked.
  */
  var FEATURED_COUNT = 4;
  var CAT_LABEL = { 'ai-ml': 'AI / ML', 'robotics': 'Robotics', 'mechanical': 'Mechanical' };

  var projects = [
    /* --- Featured (shown first in the All view) --- */
    {
      cat: 'ai-ml', media: { type: 'img', src: 'videos/evidence-base.gif' },
      title: 'Flood-Resilience Decision Platform',
      desc: 'Architected a <strong>Palantir Foundry</strong> ontology fusing geospatial/meteorological data into a live digital twin of Dubai\'s drainage network for a real AED 30bn flood-resilience programme - with a human-in-the-loop interface where AI agents propose and users approve interventions, cutting decision time from weeks to minutes.',
      tags: ['Palantir Foundry', 'Big Data Processing', 'Python'],
      links: [{ href: 'https://github.com/darian-7/foundry-flood-decision-platform' }]
    },
    {
      cat: 'robotics', media: { type: 'video', src: 'videos/gem.mp4' },
      title: 'Autonomous Self-Parking System',
      desc: 'An end-to-end self-parking pipeline that detects open spots with <strong>YOLOv8</strong> (95% mAP) and steers in autonomously using a <strong>Hybrid A*</strong> / Reeds-Shepp planner.',
      tags: ['ROS', 'YOLOv8', 'OpenCV', 'Hybrid A*'],
      links: [{ href: 'https://github.com/darian-7/autonomous-parking' }]
    },
    {
      cat: 'mechanical', media: { type: 'video', src: 'videos/MCG.mp4' },
      title: 'Jaw-Angle Effects on Medicated Chewing Gums',
      desc: 'Final-year thesis quantifying how human jaw angle affects medicated chewing-gum performance, using custom <strong>CAD</strong>-designed jaw adaptors and Instron compression testing.',
      tags: ['Siemens NX', 'CAD', 'Experimental Design'],
      links: [{ href: 'https://github.com/darian-7/Mech-Eng-dissertation' }]
    },
    {
      cat: 'robotics', media: { type: 'video', src: 'videos/GRAIC.mp4' },
      title: 'Autonomous Racing: Planning & Control',
      desc: 'A planning-and-control stack for an autonomous racing car in <strong>CARLA</strong>, pairing Hybrid A* waypoint planning with a <strong>PD controller</strong> for real-time steering and speed.',
      tags: ['CARLA', 'Hybrid A*', 'PD Controller'],
      links: [{ href: 'https://github.com/darian-7/GRAIC' }]
    },

    /* --- The rest (revealed by "Show more") --- */
    {
      cat: 'ai-ml', media: { type: 'img', src: 'images/flowchart.jpg' },
      title: 'End-to-End Insurance Policy Pricing Model',
      desc: 'A production-grade ML pipeline that prices health-insurance premiums from raw policyholder data, deployed end-to-end on <strong>AWS</strong> to help brokers optimise their loss ratio.',
      tags: ['AWS', 'MLflow', 'Docker', 'Flask', 'CI/CD'],
      links: [{ href: 'https://github.com/darian-7/insurance-policy-pricing-model' }]
    },
    {
      cat: 'ai-ml', media: { type: 'video', src: 'videos/AI_MP12.mp4' },
      title: 'Self-Playing Snake AI',
      desc: 'A reinforcement-learning agent that teaches itself to play Snake by modelling the board as a Markov Decision Process and learning optimal moves through reward.',
      tags: ['TD Q-Learning', 'NumPy', 'Pygame'],
      links: [{ href: 'https://github.com/darian-7/AI_projects' }]
    },
    {
      cat: 'ai-ml', media: { type: 'img', src: 'images/AI_MP10.jpg' },
      title: 'CNN Image Classifier',
      desc: 'A convolutional neural network built in <strong>PyTorch</strong> that classifies objects in RGB images at 80% accuracy on unseen data.',
      tags: ['PyTorch', 'CNN'],
      links: [{ href: 'https://github.com/darian-7/AI_projects' }]
    },
    {
      cat: 'ai-ml', media: { type: 'img', src: 'images/AI_MP2.jpg' },
      title: 'Movie Review Sentiment Classifier',
      desc: 'A <strong>Naive Bayes</strong> sentiment classifier over a unigram/bigram bag-of-words model that labels movie reviews positive or negative at 96.4% accuracy.',
      tags: ['NLTK', 'Naive Bayes', 'NLP'],
      links: [{ href: 'https://github.com/darian-7/AI_projects' }]
    },
    {
      cat: 'ai-ml', media: { type: 'img', src: 'images/AI_MP8.jpg' },
      title: 'HMM Part-of-Speech Tagger',
      desc: 'A part-of-speech tagger using a <strong>Hidden Markov Model</strong> and Viterbi decoding, lifting accuracy from a 70% baseline to 76% on unseen words.',
      tags: ['Hidden Markov Model', 'Viterbi'],
      links: [{ href: 'https://github.com/darian-7/AI_projects' }]
    },
    {
      cat: 'ai-ml', media: { type: 'img', src: 'images/AI_MP4.jpg' },
      title: 'A* Search for Multi-Goal Pathfinding',
      desc: '<strong>A* search</strong> solving EightPuzzle and WordLadder, extended with a Minimum-Spanning-Tree heuristic to reach multiple goals efficiently.',
      tags: ['A* Search', 'BFS', 'MST Heuristic'],
      links: [{ href: 'https://github.com/darian-7/AI_projects' }]
    },
    {
      cat: 'ai-ml', media: { type: 'video', src: 'videos/AI_MP6.mp4' },
      title: 'Configuration-Space Path Planner',
      desc: 'A planning agent that navigates a shape-shifting "alien" through a maze using configuration-space planning and lowest-cost <strong>KNN</strong> search.',
      tags: ['KNN', 'NumPy', 'Pygame'],
      links: [{ href: 'https://github.com/darian-7/AI_projects' }]
    },
    {
      cat: 'robotics', media: { type: 'video', src: 'videos/PSA_MP1.mp4' },
      title: 'Computer Vision Lane Detection',
      desc: 'A camera-based lane-detection module that turns a driving video stream into an annotated lane overlay using gradient/colour thresholding and a bird\'s-eye perspective transform.',
      tags: ['ROS', 'Gazebo', 'OpenCV'],
      links: [{ href: 'https://github.com/darian-7/Robotics-Projects' }]
    },
    {
      cat: 'robotics', media: { type: 'video', src: 'videos/PSA_MP3.mp4' },
      title: 'Robot Localization with Particle Filters',
      desc: '<strong>Monte Carlo Localization</strong> that pinpoints a robot\'s position in an unknown environment by converging thousands of particles against LiDAR readings.',
      tags: ['ROS', 'Gazebo', 'Monte Carlo Localization'],
      links: [{ href: 'https://github.com/darian-7/Robotics-Projects' }]
    },
    {
      cat: 'robotics', media: { type: 'img', src: 'images/MR_CE3.jpg' },
      title: 'LiDAR-Based SLAM',
      desc: 'A SLAM implementation that builds a geometric map from LiDAR scans using split-and-merge line fitting against an <strong>EKF</strong> trajectory.',
      tags: ['ROS', 'EKF', 'SLAM'],
      links: [{ href: 'https://github.com/darian-7/Robotics-Projects' }]
    },
    {
      cat: 'robotics', media: { type: 'img', src: 'images/MR_CE2.jpg' },
      title: 'Sensor Fusion with Extended Kalman Filter',
      desc: 'GPS–inertial sensor fusion via an <strong>Extended Kalman Filter</strong> for accurate robot localization, with full trajectory and bias diagnostics.',
      tags: ['ROS', 'Extended Kalman Filter', 'GPS / IMU'],
      links: [{ href: 'https://github.com/darian-7/Robotics-Projects' }]
    },
    {
      cat: 'robotics', media: { type: 'img', src: 'images/rtab.jpg' },
      title: 'Benchmarking RGB-D SLAM Across Environments',
      desc: 'A comparative study of RGB-D SLAM performance, fusing ZED/IMU/GPS data with an EKF and benchmarking <strong>RTAB-Map</strong> trajectories by RMSE.',
      tags: ['ROS', 'RTAB-Map', 'EKF'],
      links: [{ href: 'https://github.com/darian-7/Robotics-Projects' }]
    },
    {
      cat: 'robotics', media: { type: 'img', src: 'images/BRLfranka-emika.jpg' },
      title: 'Human-Robot Shared Control (Research)',
      desc: 'A University of Bristol research collaboration on human-robot interaction, remotely controlling a robotic arm through <strong>OpenCV</strong> facial-recognition input.',
      tags: ['CoppeliaSim', 'OpenCV', 'Python'],
      links: [{ href: 'https://github.com/darian-7/Human-Robot-shared-control' }]
    },
    {
      cat: 'mechanical', media: { type: 'img', src: 'images/liftinglug.jpg' },
      title: 'FEA of Lifting-Lug Structural Integrity',
      desc: 'A finite-element analysis of a Gas Combustion Unit\'s lifting lugs in <strong>Abaqus CAE</strong>, validated by a mesh-convergence study and <strong>MATLAB</strong> failure analysis.',
      tags: ['Abaqus CAE', 'MATLAB', 'FEA'],
      links: [{ href: 'https://github.com/darian-7/FEA-investigation' }]
    },
    {
      cat: 'mechanical', media: { type: 'img', src: 'images/fiat.jpg' },
      title: 'Convertible Roof Mechanism Design',
      desc: 'Mechatronic design of a Fiat 595 convertible roof, from <strong>Arduino</strong>-driven sensors and motor control to <strong>MATLAB</strong> dynamics modelling and <strong>Fusion 360</strong> FEA.',
      tags: ['Arduino', 'MATLAB', 'Fusion 360'],
      links: [{ href: 'https://github.com/darian-7/convertible-roof-mechanism-design' }]
    },
    {
      cat: 'mechanical', media: { type: 'img', src: 'images/nacelle.jpg' },
      title: 'Wind Turbine Farm Modelling & Nacelle Design',
      desc: 'A mathematical model of wind-farm power output in <strong>MATLAB</strong> paired with a <strong>Fusion 360</strong> turbine nacelle and gearbox assembly.',
      tags: ['MATLAB', 'Fusion 360'],
      links: [{ href: 'https://github.com/darian-7/Wind-Turbine-Nacelle-Design' }]
    }
  ];

  var skills = [
    { name: 'Languages', icon: '{ }', items: ['Python', 'MATLAB', 'SQL', 'TypeScript'] },
    { name: 'ML & Data', icon: '≈', items: ['PyTorch', 'scikit-learn', 'NumPy', 'Pandas', 'SHAP', 'Spark', 'A/B Testing', 'MLflow', 'Evidently'] },
    { name: 'GenAI & LLM', icon: '✶', items: ['LangChain', 'FAISS', 'HuggingFace', 'PEFT / QLoRA', 'FastAPI'] },
    { name: 'Robotics & CV', icon: '⊙', items: ['ROS', 'Gazebo', 'OpenCV', 'YOLOv8', 'CARLA', 'SLAM / EKF'] },
    { name: 'Tools & Platforms', icon: '⚙', items: ['Git', 'Docker', 'Linux', 'PostgreSQL', 'PowerBI', 'AWS', 'GCP', 'Azure', 'GitHub Actions', 'PyTest'] },
    { name: 'Engineering & CAD', icon: '◇', items: ['Siemens NX', 'Fusion 360', 'Abaqus', 'Arduino'] }
  ];

  var education = [
    { year: 'Aug 2023 — Aug 2024', title: 'Master of Engineering in Autonomy & Robotics', place: 'University of Illinois Urbana-Champaign (USA)' },
    { year: 'Sep 2020 — June 2023', title: 'Bachelor of Engineering in Mechanical Engineering (Hons)', place: 'University of Bristol (UK)' }
  ];

  /* ---------- Rendering ---------- */
  var GH_ICON = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 4.6 18 4.9 18 4.9c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"></path></svg>';

  function el(html) {
    var t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content.firstChild;
  }

  function renderProjects() {
    var grid = document.getElementById('projects-grid');
    if (!grid) return;
    projects.forEach(function (p, i) {
      var num = String(i + 1).padStart(2, '0');
      var mediaHtml = p.media.type === 'video'
        ? '<video src="' + p.media.src + '" autoplay loop muted playsinline></video>'
        : '<img src="' + p.media.src + '" alt="' + escapeAttr(p.title) + '" loading="lazy">';

      var hiTags = (p.hiTags || []).map(function (t) { return '<span class="tag-hi">' + escapeHtml(t) + '</span>'; }).join('');
      var tags = (p.tags || []).map(function (t) { return '<span>' + escapeHtml(t) + '</span>'; }).join('');

      var gh = p.links.map(function (l) {
        return '<a class="gh-btn" href="' + l.href + '" target="_blank" rel="noopener" aria-label="View ' + escapeAttr(p.title) + ' on GitHub">' + GH_ICON + 'GitHub</a>';
      }).join('');

      var card = el(
        '<article class="project-card" data-cat="' + p.cat + '" data-reveal>' +
          '<div class="project-figure">' +
            mediaHtml +
          '</div>' +
          '<div class="project-body">' +
            '<div class="project-num">' + num + '</div>' +
            '<h3>' + escapeHtml(p.title) + '</h3>' +
            '<p class="project-desc">' + p.desc + '</p>' +
            '<div class="project-tags">' + hiTags + tags + '</div>' +
            '<div class="project-foot">' + gh + '</div>' +
          '</div>' +
        '</article>'
      );
      grid.appendChild(card);
    });
  }

  function renderSkills() {
    var grid = document.getElementById('skills-grid');
    if (!grid) return;
    skills.forEach(function (g) {
      var items = g.items.map(function (s) { return '<span>' + escapeHtml(s) + '</span>'; }).join('');
      grid.appendChild(el(
        '<div class="skill-card" data-reveal>' +
          '<div class="skill-head">' +
            '<span class="skill-icon">' + escapeHtml(g.icon) + '</span>' +
            '<h3>' + escapeHtml(g.name) + '</h3>' +
          '</div>' +
          '<div class="skill-items">' + items + '</div>' +
        '</div>'
      ));
    });
  }

  function renderEducation() {
    var list = document.getElementById('education-list');
    if (!list) return;
    education.forEach(function (e) {
      list.appendChild(el(
        '<div class="timeline-item" data-reveal>' +
          '<span class="timeline-dot"></span>' +
          '<div class="timeline-meta">' +
            '<span class="timeline-year">' + escapeHtml(e.year) + '</span>' +
          '</div>' +
          '<h3>' + escapeHtml(e.title) + '</h3>' +
          '<div class="timeline-place">' + escapeHtml(e.place) + '</div>' +
        '</div>'
      ));
    });
  }

  function escapeHtml(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function escapeAttr(s) { return escapeHtml(s).replace(/"/g, '&quot;'); }

  /* ---------- Interactions ---------- */
  function initNav() {
    var burger = document.getElementById('nav-burger');
    var menu = document.getElementById('nav-menu');
    if (burger && menu) {
      burger.addEventListener('click', function () {
        menu.setAttribute('data-open', menu.getAttribute('data-open') === 'true' ? 'false' : 'true');
      });
      menu.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () { menu.setAttribute('data-open', 'false'); });
      });
    }
  }

  function initScrollSpy() {
    var bar = document.getElementById('progress-bar');
    var ids = ['hero', 'about', 'projects', 'skills', 'education', 'contact'];
    var sections = ids.map(function (id) { return document.getElementById(id); }).filter(Boolean);
    var navLinks = Array.prototype.slice.call(document.querySelectorAll('[data-nav]'));
    function onScroll() {
      var st = window.scrollY || document.documentElement.scrollTop;
      var h = document.documentElement.scrollHeight - window.innerHeight;
      if (bar) bar.style.width = (h > 0 ? Math.min(100, (st / h) * 100) : 0) + '%';
      var current = ids[0];
      sections.forEach(function (s) { if (s.getBoundingClientRect().top <= 130) current = s.id; });
      navLinks.forEach(function (l) {
        l.classList.toggle('is-active', l.getAttribute('data-nav') === current);
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();
  }

  function initReveal() {
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var reveals = document.querySelectorAll('[data-reveal]');
    function showAll() { reveals.forEach(function (n) { n.setAttribute('data-shown', '1'); }); }
    if (reduce || !('IntersectionObserver' in window)) { showAll(); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.setAttribute('data-shown', '1'); io.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -7% 0px' });
    reveals.forEach(function (n) { io.observe(n); });
    setTimeout(showAll, 2500); // safety net
  }

  /* Filter pills + Show more. In the "All" view only the first
     FEATURED_COUNT cards show until "Show more" is clicked. A category
     filter shows every matching card. */
  function initFilters() {
    var btns = Array.prototype.slice.call(document.querySelectorAll('[data-filter]'));
    var cards = Array.prototype.slice.call(document.querySelectorAll('.project-card'));
    var moreWrap = document.getElementById('projects-more');
    var moreBtn = document.getElementById('more-btn');
    var state = { filter: 'all', expanded: false };

    function apply() {
      cards.forEach(function (c, i) {
        var visible = state.filter === 'all'
          ? (state.expanded || i < FEATURED_COUNT)
          : (c.getAttribute('data-cat') === state.filter);
        c.style.display = visible ? '' : 'none';
      });
      var showMore = state.filter === 'all' && cards.length > FEATURED_COUNT;
      if (moreWrap) moreWrap.style.display = showMore ? '' : 'none';
      if (moreBtn) {
        moreBtn.setAttribute('data-expanded', state.expanded ? 'true' : 'false');
        moreBtn.firstChild.textContent = state.expanded ? 'Show less ' : 'Show more ';
      }
    }

    btns.forEach(function (b) {
      b.addEventListener('click', function () {
        state.filter = b.getAttribute('data-filter');
        state.expanded = false;
        btns.forEach(function (x) { x.setAttribute('data-active', x === b ? 'true' : 'false'); });
        apply();
      });
    });

    if (moreBtn) moreBtn.addEventListener('click', function () {
      state.expanded = !state.expanded;
      apply();
      if (!state.expanded) {
        var top = document.getElementById('projects');
        if (top) top.scrollIntoView({ behavior: 'smooth' });
      }
    });

    apply();
  }

  /* ---------- Boot ---------- */
  function boot() {
    var yr = document.getElementById('year');
    if (yr) yr.textContent = new Date().getFullYear();
    renderProjects();
    renderSkills();
    renderEducation();
    initNav();
    initScrollSpy();
    initFilters();
    initReveal(); // after content is in the DOM
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
