# Java_script — Repository Notes

A personal JavaScript learning/practice repository containing standalone scripts and small browser-based projects covering core JS concepts (variables, loops, functions, arrays, objects, DOM manipulation, events, and async programming), plus mini-projects: a calculator, a snake game, and a to-do list app.

## Stack
- **Language(s):** JavaScript (vanilla, no frameworks), HTML, CSS
- **Framework / runtime:** None — plain browser-executed `<script>` tags, no build tooling, no bundler, no `package.json`
- **Notable libraries:** None — uses native browser APIs only (`document.querySelector`, `fetch`, `Promise`, `setTimeout`, Canvas API)

## Structure

```
arrays.js, functions.js, loops.js,     Core JS concept scripts run via
if_else.js, operators.js, objects.js,  <script> tags in index.html / m.html
datatypes.js, variables.js,
hello_world.js, calculator.js, function.js

dom/            DOM basics, events, and form-handling demos (paired .html + .js files)
  dom_basics.html/js
  dom_events.html/js
  dom_form.html/js

async/          Async JS concepts, standalone scripts (no HTML harness)
  promises.js, async_await.js, fetch_api.js, timers.js

JS_DOM/          A single-page, cumulative DOM tutorial (selectors, traversal,
  index.html     manipulation, event handling) loading multiple scripts in sequence
  scripts/       (Access_Modify.js, traverse.js, eventHandling.js)
  images/

myToDoList/      A large self-contained to-do list HTML app
  myTodolist.html

projects/        Three small browser apps, each self-contained
  calculator/    index.html + calculator.js + style.css — working calculator
                 with click and keyboard input, dark UI theme
  snake_game/    Canvas-based snake game
  todo_list/     Separate to-do list project

index.html, m.html   Root-level demo pages that load arrays.js/functions.js,
                     or render a dynamic file-download list via DOM APIs
style.css            Shared root styling (colored headings/paragraphs/links)
note.doc             A sample downloadable file referenced by m.html
```

## How it fits together
There's no single entry point — this is a loose collection of exercises. Root-level `.js` files are concept drills referenced from `index.html`/`m.html` via `<script src="...">` tags and run by opening the HTML in a browser (output goes to `console.log`). The `dom/`, `async/`, and `JS_DOM/` folders are topic-based tutorial modules, each pairing an HTML file with one or more JS files demonstrating a specific API (DOM traversal, event listeners, promises/async-await, fetch). The `projects/` folder contains the most "finished" work — e.g., `calculator/calculator.js` wires up a full button grid + keyboard support via `data-action`/`data-value` attributes and `addEventListener`, styled with a dark-themed `style.css`.

## How to run it
No build step or dependencies — just open an HTML file in a browser and check the DevTools console for script output.

```bash
git clone https://github.com/melkamu-by/Java_script.git
cd Java_script
open index.html                       # root arrays/functions demo
open projects/calculator/index.html   # working calculator app
open projects/snake_game/index.html   # canvas snake game (if index.html exists there)
open myToDoList/myTodolist.html       # to-do list app
open dom/dom_events.html              # DOM events demo
```

For files using `fetch` (e.g. `async/fetch_api.js`), serving via a local static server (e.g. `npx serve` or VS Code Live Server) is recommended instead of `file://` to avoid CORS issues.
