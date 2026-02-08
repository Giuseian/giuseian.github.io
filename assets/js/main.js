const pubs = [
  {
    title: "Titolo pubblicazione 1",
    authors: "Nome Cognome, Coautore, …",
    venue: "Conference/Journal, 2025",
    tags: ["topic-a", "methods"],
    links: [
      { label: "Paper", href: "#" },
      { label: "DOI", href: "#" },
      { label: "Code", href: "#" },
    ],
  },
  {
    title: "Titolo pubblicazione 2",
    authors: "Nome Cognome, …",
    venue: "Workshop, 2024",
    tags: ["topic-b"],
    links: [{ label: "Preprint", href: "#" }],
  },
];

const root = document.documentElement;
const toggle = document.getElementById("themeToggle");
const year = document.getElementById("year");
const pubList = document.getElementById("pubList");
const chips = Array.from(document.querySelectorAll(".filters .chip"));

if (year) year.textContent = new Date().getFullYear();

function setTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  if (toggle) toggle.textContent = theme === "dark" ? "☀️" : "🌙";
}

function initTheme() {
  const saved = localStorage.getItem("theme");
  if (saved) return setTheme(saved);
  setTheme("light"); // come reference
}

function renderPubs(tag = "all") {
  if (!pubList) return;
  pubList.innerHTML = "";

  const filtered = tag === "all" ? pubs : pubs.filter(p => p.tags.includes(tag));

  filtered.forEach(p => {
    const el = document.createElement("article");
    el.className = "card";
    el.innerHTML = `
      <h3 class="card__title">${p.title}</h3>
      <p class="card__meta">${p.authors}<br>${p.venue}</p>
      <div class="card__links">
        ${p.links.map(l => `<a class="taglink" href="${l.href}" target="_blank" rel="noopener">${l.label}</a>`).join("")}
      </div>
    `;
    pubList.appendChild(el);
  });
}

function setActiveChip(tag) {
  chips.forEach(c => c.classList.toggle("is-active", c.dataset.tag === tag));
}

chips.forEach(btn => {
  btn.addEventListener("click", () => {
    const tag = btn.dataset.tag;
    setActiveChip(tag);
    renderPubs(tag);
  });
});

// Topics link che applica filtro
document.querySelectorAll("[data-scroll-tag]").forEach(a => {
  a.addEventListener("click", () => {
    const tag = a.dataset.scrollTag;
    setActiveChip(tag);
    renderPubs(tag);
  });
});

if (toggle) {
  toggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") || "light";
    setTheme(current === "dark" ? "light" : "dark");
  });
}

initTheme();
renderPubs("all");







// const pubs = [
//   {
//     title: "Titolo pubblicazione 1",
//     authors: "Nome Cognome, Coautore, …",
//     venue: "Conference/Journal, 2025",
//     tags: ["topic-a", "methods"],
//     links: [
//       { label: "Paper", href: "#" },
//       { label: "DOI", href: "#" },
//       { label: "Code", href: "#" },
//     ],
//   },
//   {
//     title: "Titolo pubblicazione 2",
//     authors: "Nome Cognome, …",
//     venue: "Workshop, 2024",
//     tags: ["topic-b"],
//     links: [{ label: "Preprint", href: "#" }],
//   },
// ];

// const root = document.documentElement;
// const toggle = document.getElementById("themeToggle");
// const year = document.getElementById("year");
// const pubList = document.getElementById("pubList");
// const chips = Array.from(document.querySelectorAll(".filters .chip"));

// if (year) year.textContent = new Date().getFullYear();

// function setTheme(theme) {
//   root.setAttribute("data-theme", theme);
//   localStorage.setItem("theme", theme);
//   if (toggle) toggle.textContent = theme === "dark" ? "☀️" : "🌙";
// }

// function initTheme() {
//   const saved = localStorage.getItem("theme");
//   if (saved) return setTheme(saved);
//   setTheme("light"); // default come reference
// }

// function renderPubs(tag = "all") {
//   if (!pubList) return;
//   pubList.innerHTML = "";

//   const filtered = tag === "all" ? pubs : pubs.filter(p => p.tags.includes(tag));

//   filtered.forEach(p => {
//     const el = document.createElement("article");
//     el.className = "card";
//     el.innerHTML = `
//       <h3 class="card__title">${p.title}</h3>
//       <p class="card__meta">${p.authors}<br>${p.venue}</p>
//       <div class="card__links">
//         ${p.links.map(l => `<a class="taglink" href="${l.href}" target="_blank" rel="noopener">${l.label}</a>`).join("")}
//       </div>
//     `;
//     pubList.appendChild(el);
//   });
// }

// function setActiveChip(tag) {
//   chips.forEach(c => c.classList.toggle("is-active", c.dataset.tag === tag));
// }

// chips.forEach(btn => {
//   btn.addEventListener("click", () => {
//     const tag = btn.dataset.tag;
//     setActiveChip(tag);
//     renderPubs(tag);
//   });
// });

// document.querySelectorAll("[data-scroll-tag]").forEach(a => {
//   a.addEventListener("click", () => {
//     const tag = a.dataset.scrollTag;
//     setActiveChip(tag);
//     renderPubs(tag);
//   });
// });

// if (toggle) {
//   toggle.addEventListener("click", () => {
//     const current = root.getAttribute("data-theme") || "light";
//     setTheme(current === "dark" ? "light" : "dark");
//   });
// }

// initTheme();
// renderPubs("all");





// // const pubs = [
// //   {
// //     title: "Titolo pubblicazione 1",
// //     authors: "Nome Cognome, Coautore, …",
// //     venue: "Conference/Journal, 2025",
// //     tags: ["topic-a", "methods"],
// //     links: [
// //       { label: "Paper", href: "#" },
// //       { label: "DOI", href: "#" },
// //       { label: "Code", href: "#" },
// //     ],
// //   },
// //   {
// //     title: "Titolo pubblicazione 2",
// //     authors: "Nome Cognome, …",
// //     venue: "Workshop, 2024",
// //     tags: ["topic-b"],
// //     links: [{ label: "Preprint", href: "#" }],
// //   },
// // ];

// // const root = document.documentElement;
// // const toggle = document.getElementById("themeToggle");
// // const year = document.getElementById("year");
// // const pubList = document.getElementById("pubList");
// // const chips = Array.from(document.querySelectorAll(".filters .chip"));

// // if (year) year.textContent = new Date().getFullYear();

// // function setTheme(theme) {
// //   root.setAttribute("data-theme", theme);
// //   localStorage.setItem("theme", theme);
// //   if (toggle) toggle.textContent = theme === "dark" ? "☀️" : "🌙";
// // }

// // function initTheme() {
// //   const saved = localStorage.getItem("theme");
// //   if (saved) return setTheme(saved);
// //   setTheme("light"); // default come reference
// // }

// // function renderPubs(tag = "all") {
// //   if (!pubList) return;
// //   pubList.innerHTML = "";

// //   const filtered = tag === "all" ? pubs : pubs.filter(p => p.tags.includes(tag));

// //   filtered.forEach(p => {
// //     const el = document.createElement("article");
// //     el.className = "card";
// //     el.innerHTML = `
// //       <h3 class="card__title">${p.title}</h3>
// //       <p class="card__meta">${p.authors}<br>${p.venue}</p>
// //       <div class="card__links">
// //         ${p.links.map(l => `<a class="taglink" href="${l.href}" target="_blank" rel="noopener">${l.label}</a>`).join("")}
// //       </div>
// //     `;
// //     pubList.appendChild(el);
// //   });
// // }

// // function setActiveChip(tag) {
// //   chips.forEach(c => c.classList.toggle("is-active", c.dataset.tag === tag));
// // }

// // chips.forEach(btn => {
// //   btn.addEventListener("click", () => {
// //     const tag = btn.dataset.tag;
// //     setActiveChip(tag);
// //     renderPubs(tag);
// //   });
// // });

// // document.querySelectorAll("[data-scroll-tag]").forEach(a => {
// //   a.addEventListener("click", () => {
// //     const tag = a.dataset.scrollTag;
// //     setActiveChip(tag);
// //     renderPubs(tag);
// //   });
// // });

// // if (toggle) {
// //   toggle.addEventListener("click", () => {
// //     const current = root.getAttribute("data-theme") || "light";
// //     setTheme(current === "dark" ? "light" : "dark");
// //   });
// // }

// // initTheme();
// // renderPubs("all");





// // // const pubs = [
// // //   {
// // //     title: "Titolo pubblicazione 1",
// // //     authors: "Nome Cognome, Coautore, …",
// // //     venue: "Conference/Journal, 2025",
// // //     tags: ["topic-a", "methods"],
// // //     links: [
// // //       { label: "Paper", href: "#" },
// // //       { label: "DOI", href: "#" },
// // //       { label: "Code", href: "#" },
// // //     ],
// // //   },
// // //   {
// // //     title: "Titolo pubblicazione 2",
// // //     authors: "Nome Cognome, …",
// // //     venue: "Workshop, 2024",
// // //     tags: ["topic-b"],
// // //     links: [{ label: "Preprint", href: "#" }],
// // //   },
// // // ];

// // // const root = document.documentElement;
// // // const toggle = document.getElementById("themeToggle");
// // // const year = document.getElementById("year");
// // // const pubList = document.getElementById("pubList");
// // // const chips = Array.from(document.querySelectorAll(".filters .chip"));

// // // if (year) year.textContent = new Date().getFullYear();

// // // function setTheme(theme) {
// // //   root.setAttribute("data-theme", theme);
// // //   localStorage.setItem("theme", theme);
// // //   if (toggle) toggle.textContent = theme === "dark" ? "☀️" : "🌙";
// // // }

// // // function initTheme() {
// // //   const saved = localStorage.getItem("theme");
// // //   if (saved) return setTheme(saved);

// // //   // default LIGHT come reference
// // //   setTheme("light");
// // // }

// // // function renderPubs(tag = "all") {
// // //   if (!pubList) return;
// // //   pubList.innerHTML = "";

// // //   const filtered = tag === "all" ? pubs : pubs.filter(p => p.tags.includes(tag));

// // //   filtered.forEach(p => {
// // //     const el = document.createElement("article");
// // //     el.className = "card";
// // //     el.innerHTML = `
// // //       <h3 class="card__title">${p.title}</h3>
// // //       <p class="card__meta">${p.authors}<br>${p.venue}</p>
// // //       <div class="card__links">
// // //         ${p.links.map(l => `<a class="taglink" href="${l.href}" target="_blank" rel="noopener">${l.label}</a>`).join("")}
// // //       </div>
// // //     `;
// // //     pubList.appendChild(el);
// // //   });
// // // }

// // // function setActiveChip(tag) {
// // //   chips.forEach(c => c.classList.toggle("is-active", c.dataset.tag === tag));
// // // }

// // // chips.forEach(btn => {
// // //   btn.addEventListener("click", () => {
// // //     const tag = btn.dataset.tag;
// // //     setActiveChip(tag);
// // //     renderPubs(tag);
// // //   });
// // // });

// // // document.querySelectorAll("[data-scroll-tag]").forEach(a => {
// // //   a.addEventListener("click", () => {
// // //     const tag = a.dataset.scrollTag;
// // //     setActiveChip(tag);
// // //     renderPubs(tag);
// // //   });
// // // });

// // // if (toggle) {
// // //   toggle.addEventListener("click", () => {
// // //     const current = root.getAttribute("data-theme") || "light";
// // //     setTheme(current === "dark" ? "light" : "dark");
// // //   });
// // // }

// // // initTheme();
// // // renderPubs("all");




// // // // const pubs = [
// // // //   {
// // // //     title: "Titolo pubblicazione 1",
// // // //     authors: "Nome Cognome, Coautore, …",
// // // //     venue: "Conference/Journal, 2025",
// // // //     tags: ["topic-a", "methods"],
// // // //     links: [
// // // //       { label: "Paper", href: "#" },
// // // //       { label: "DOI", href: "#" },
// // // //       { label: "Code", href: "#" },
// // // //     ],
// // // //   },
// // // //   {
// // // //     title: "Titolo pubblicazione 2",
// // // //     authors: "Nome Cognome, …",
// // // //     venue: "Workshop, 2024",
// // // //     tags: ["topic-b"],
// // // //     links: [{ label: "Preprint", href: "#" }],
// // // //   },
// // // // ];

// // // // const root = document.documentElement;
// // // // const toggle = document.getElementById("themeToggle");
// // // // const year = document.getElementById("year");
// // // // const pubList = document.getElementById("pubList");
// // // // const chips = Array.from(document.querySelectorAll(".filters .chip"));

// // // // if (year) year.textContent = new Date().getFullYear();

// // // // function setTheme(theme) {
// // // //   root.setAttribute("data-theme", theme);
// // // //   localStorage.setItem("theme", theme);
// // // //   if (toggle) toggle.textContent = theme === "dark" ? "☀️" : "🌙";
// // // // }

// // // // function initTheme() {
// // // //   const saved = localStorage.getItem("theme");
// // // //   if (saved) return setTheme(saved);

// // // //   // Default: LIGHT (come reference)
// // // //   setTheme("light");
// // // // }

// // // // function renderPubs(tag = "all") {
// // // //   if (!pubList) return;
// // // //   pubList.innerHTML = "";

// // // //   const filtered = tag === "all" ? pubs : pubs.filter(p => p.tags.includes(tag));

// // // //   filtered.forEach(p => {
// // // //     const el = document.createElement("article");
// // // //     el.className = "card";
// // // //     el.innerHTML = `
// // // //       <h3 class="card__title">${p.title}</h3>
// // // //       <p class="card__meta">${p.authors}<br>${p.venue}</p>
// // // //       <div class="card__links">
// // // //         ${p.links.map(l => `<a class="taglink" href="${l.href}" target="_blank" rel="noopener">${l.label}</a>`).join("")}
// // // //       </div>
// // // //     `;
// // // //     pubList.appendChild(el);
// // // //   });
// // // // }

// // // // function setActiveChip(tag) {
// // // //   chips.forEach(c => c.classList.toggle("is-active", c.dataset.tag === tag));
// // // // }

// // // // chips.forEach(btn => {
// // // //   btn.addEventListener("click", () => {
// // // //     const tag = btn.dataset.tag;
// // // //     setActiveChip(tag);
// // // //     renderPubs(tag);
// // // //   });
// // // // });

// // // // document.querySelectorAll("[data-scroll-tag]").forEach(a => {
// // // //   a.addEventListener("click", () => {
// // // //     const tag = a.dataset.scrollTag;
// // // //     setActiveChip(tag);
// // // //     renderPubs(tag);
// // // //   });
// // // // });

// // // // if (toggle) {
// // // //   toggle.addEventListener("click", () => {
// // // //     const current = root.getAttribute("data-theme") || "light";
// // // //     setTheme(current === "dark" ? "light" : "dark");
// // // //   });
// // // // }

// // // // initTheme();
// // // // renderPubs("all");







// // // // // const pubs = [
// // // // //   {
// // // // //     title: "Titolo pubblicazione 1",
// // // // //     authors: "Nome Cognome, Coautore, …",
// // // // //     venue: "Conference/Journal, 2025",
// // // // //     tags: ["topic-a", "methods"],
// // // // //     links: [
// // // // //       { label: "Paper", href: "#" },
// // // // //       { label: "DOI", href: "#" },
// // // // //       { label: "Code", href: "#" },
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     title: "Titolo pubblicazione 2",
// // // // //     authors: "Nome Cognome, …",
// // // // //     venue: "Workshop, 2024",
// // // // //     tags: ["topic-b"],
// // // // //     links: [{ label: "Preprint", href: "#" }],
// // // // //   },
// // // // // ];

// // // // // const root = document.documentElement;
// // // // // const toggle = document.getElementById("themeToggle");
// // // // // const year = document.getElementById("year");
// // // // // const pubList = document.getElementById("pubList");
// // // // // const chips = Array.from(document.querySelectorAll(".filters .chip"));

// // // // // if (year) year.textContent = new Date().getFullYear();

// // // // // function setTheme(theme) {
// // // // //   root.setAttribute("data-theme", theme);
// // // // //   localStorage.setItem("theme", theme);
// // // // //   if (toggle) toggle.textContent = theme === "dark" ? "☀️" : "🌙";
// // // // // }

// // // // // function initTheme() {
// // // // //   const saved = localStorage.getItem("theme");
// // // // //   if (saved) return setTheme(saved);
// // // // //   const prefersDark =
// // // // //     window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
// // // // //   setTheme(prefersDark ? "dark" : "light");
// // // // // }

// // // // // function renderPubs(tag = "all") {
// // // // //   if (!pubList) return;
// // // // //   pubList.innerHTML = "";

// // // // //   const filtered = tag === "all" ? pubs : pubs.filter(p => p.tags.includes(tag));

// // // // //   filtered.forEach(p => {
// // // // //     const el = document.createElement("article");
// // // // //     el.className = "card";
// // // // //     el.innerHTML = `
// // // // //       <h3 class="card__title">${p.title}</h3>
// // // // //       <p class="card__meta">${p.authors}<br>${p.venue}</p>
// // // // //       <div class="card__links">
// // // // //         ${p.links
// // // // //           .map(
// // // // //             l =>
// // // // //               `<a class="taglink" href="${l.href}" target="_blank" rel="noopener">${l.label}</a>`
// // // // //           )
// // // // //           .join("")}
// // // // //       </div>
// // // // //     `;
// // // // //     pubList.appendChild(el);
// // // // //   });
// // // // // }

// // // // // function setActiveChip(tag) {
// // // // //   chips.forEach(c => c.classList.toggle("is-active", c.dataset.tag === tag));
// // // // // }

// // // // // chips.forEach(btn => {
// // // // //   btn.addEventListener("click", () => {
// // // // //     const tag = btn.dataset.tag;
// // // // //     setActiveChip(tag);
// // // // //     renderPubs(tag);
// // // // //   });
// // // // // });

// // // // // // “Topics” link che applica il filtro e scrolla
// // // // // document.querySelectorAll("[data-scroll-tag]").forEach(a => {
// // // // //   a.addEventListener("click", () => {
// // // // //     const tag = a.dataset.scrollTag;
// // // // //     setActiveChip(tag);
// // // // //     renderPubs(tag);
// // // // //   });
// // // // // });

// // // // // if (toggle) {
// // // // //   toggle.addEventListener("click", () => {
// // // // //     const current = root.getAttribute("data-theme") || "light";
// // // // //     setTheme(current === "dark" ? "light" : "dark");
// // // // //   });
// // // // // }

// // // // // initTheme();
// // // // // renderPubs("all");













// // // // // // const pubs = [
// // // // // //   {
// // // // // //     title: "Titolo pubblicazione 1",
// // // // // //     authors: "Nome Cognome, Coautore, …",
// // // // // //     venue: "Conference/Journal, 2025",
// // // // // //     tags: ["topic-a", "methods"],
// // // // // //     links: [
// // // // // //       { label: "Paper", href: "#" },
// // // // // //       { label: "DOI", href: "#" },
// // // // // //       { label: "Code", href: "#" },
// // // // // //     ],
// // // // // //   },
// // // // // //   {
// // // // // //     title: "Titolo pubblicazione 2",
// // // // // //     authors: "Nome Cognome, …",
// // // // // //     venue: "Workshop, 2024",
// // // // // //     tags: ["topic-b"],
// // // // // //     links: [{ label: "Preprint", href: "#" }],
// // // // // //   },
// // // // // // ];

// // // // // // const root = document.documentElement;
// // // // // // const toggle = document.getElementById("themeToggle");
// // // // // // const year = document.getElementById("year");
// // // // // // const pubList = document.getElementById("pubList");
// // // // // // const chips = Array.from(document.querySelectorAll(".filters .chip"));

// // // // // // year.textContent = new Date().getFullYear();

// // // // // // function setTheme(theme) {
// // // // // //   root.setAttribute("data-theme", theme);
// // // // // //   localStorage.setItem("theme", theme);
// // // // // //   toggle.textContent = theme === "dark" ? "☀️" : "🌙";
// // // // // // }

// // // // // // function initTheme() {
// // // // // //   const saved = localStorage.getItem("theme");
// // // // // //   if (saved) return setTheme(saved);
// // // // // //   const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
// // // // // //   setTheme(prefersDark ? "dark" : "light");
// // // // // // }

// // // // // // function renderPubs(tag = "all") {
// // // // // //   pubList.innerHTML = "";
// // // // // //   const filtered = tag === "all" ? pubs : pubs.filter(p => p.tags.includes(tag));

// // // // // //   filtered.forEach(p => {
// // // // // //     const el = document.createElement("article");
// // // // // //     el.className = "card";
// // // // // //     el.innerHTML = `
// // // // // //       <h3 class="card__title">${p.title}</h3>
// // // // // //       <p class="card__meta">${p.authors}<br>${p.venue}</p>
// // // // // //       <div class="card__links">
// // // // // //         ${p.links.map(l => `<a class="taglink" href="${l.href}" target="_blank" rel="noopener">${l.label}</a>`).join("")}
// // // // // //       </div>
// // // // // //     `;
// // // // // //     pubList.appendChild(el);
// // // // // //   });
// // // // // // }

// // // // // // function setActiveChip(tag) {
// // // // // //   chips.forEach(c => c.classList.toggle("is-active", c.dataset.tag === tag));
// // // // // // }

// // // // // // chips.forEach(btn => {
// // // // // //   btn.addEventListener("click", () => {
// // // // // //     const tag = btn.dataset.tag;
// // // // // //     setActiveChip(tag);
// // // // // //     renderPubs(tag);
// // // // // //   });
// // // // // // });

// // // // // // // “Topics” link che applica il filtro e scrolla
// // // // // // document.querySelectorAll("[data-scroll-tag]").forEach(a => {
// // // // // //   a.addEventListener("click", () => {
// // // // // //     const tag = a.dataset.scrollTag;
// // // // // //     setActiveChip(tag);
// // // // // //     renderPubs(tag);
// // // // // //   });
// // // // // // });

// // // // // // toggle.addEventListener("click", () => {
// // // // // //   const current = root.getAttribute("data-theme") || "light";
// // // // // //   setTheme(current === "dark" ? "light" : "dark");
// // // // // // });

// // // // // // initTheme();
// // // // // // renderPubs("all");
