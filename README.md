
# 🚀 Java_script — JavaScript Learning & Practice Repository

A personal JavaScript learning/practice repository containing **standalone scripts** and **small browser-based projects** covering core JS concepts — variables, loops, functions, arrays, objects, DOM manipulation, events, and async programming.

---

## 🛠️ Tech Stack

| Category | Details |
|---|---|
| 💻 **Language(s)** | JavaScript (vanilla, no frameworks), HTML, CSS |
| ⚙️ **Framework / Runtime** | None — plain browser-executed `<script>` tags, no build tooling, no bundler, no `package.json` |
| 📦 **Notable Libraries** | None — native browser APIs only (`document.querySelector`, `fetch`, `Promise`, `setTimeout`, Canvas API) |

---

## 🧠 Core Concepts Covered

- 🔤 Variables & Data Types
- 🔁 Loops & Conditionals (`if_else.js`, `loops.js`)
- 🧮 Operators
- 🧩 Functions
- 📚 Arrays & Objects
- 🌐 DOM Manipulation & Events
- ⏳ Asynchronous JavaScript (Promises, `async`/`await`, `fetch`, Timers)

---

## 🎮 Featured Projects

### 🧮 Calculator
A fully working calculator app supporting **click and keyboard input**, styled with a sleek dark UI theme.
📂 `projects/calculator/` → `index.html` + `calculator.js` + `style.css`

### ✅ To-Do List
Two versions of a to-do list app for task management practice:
- 📂 `myToDoList/myTodolist.html` — large self-contained to-do list app
- 📂 `projects/todo_list/` — separate to-do list project

### 🐍 Snake Game
A classic **Canvas-based Snake game** built with vanilla JS.
📂 `projects/snake_game/`

---

## 📁 Repository Structure

```text
📦 Java_script
├── 🧩 Core Concept Scripts (run via <script> tags in index.html / m.html)
│   ├── arrays.js, functions.js, loops.js
│   ├── if_else.js, operators.js, objects.js
│   ├── datatypes.js, variables.js
│   └── hello_world.js, calculator.js, function.js
│
├── 🌐 dom/                  DOM basics, events, and form-handling demos (paired .html + .js files)
│   ├── dom_basics.html/js
│   ├── dom_events.html/js
│   └── dom_form.html/js
│
├── ⏳ async/                Async JS concepts, standalone scripts (no HTML harness)
│   └── promises.js, async_await.js, fetch_api.js, timers.js
│
├── 📘 JS_DOM/               A single-page, cumulative DOM tutorial
│   ├── index.html           (selectors, traversal, manipulation, event handling)
│   ├── scripts/              Access_Modify.js, traverse.js, eventHandling.js
│   └── images/
│
├── ✅ myToDoList/           A large self-contained to-do list HTML app
│   └── myTodolist.html
│
├── 🎮 projects/             Three small, self-contained browser apps
│   ├── calculator/           index.html + calculator.js + style.css
│   ├── snake_game/           Canvas-based snake game
│   └── todo_list/            Separate to-do list project
│
├── index.html, m.html       Root-level demo pages (arrays/functions demo,
│                             or dynamic file-download list via DOM APIs)
├── style.css                 Shared root styling (colored headings/paragraphs/links)
└── note.doc                  Sample downloadable file referenced by m.html
```

---

## 🔗 How It Fits Together

There's no single entry point — this is a loose collection of exercises. Root-level `.js` files are concept drills referenced from `index.html` / `m.html` via `<script src="...">` tags and run directly in the browser.

---

## ▶️ How to Run It

No build step or dependencies — just open an HTML file in a browser and check the DevTools console for script output. 🖥️

```bash
git clone https://github.com/melkamu-by/Java_script.git
cd Java_script

open index.html                       # 🧩 root arrays/functions demo
open projects/calculator/index.html   # 🧮 working calculator app
open projects/snake_game/index.html   # 🐍 canvas snake game (if index.html exists there)
open myToDoList/myTodolist.html       # ✅ to-do list app
open dom/dom_events.html              # 🌐 DOM events demo
```

> 💡 **Tip:** For files using `fetch` (e.g. `async/fetch_api.js`), serve via a local static server (e.g. `npx serve` or VS Code Live Server) instead of `file://` to avoid CORS issues.

---

⭐ Feel free to explore, learn, and tinker with these scripts and mini-projects!
