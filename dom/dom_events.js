let count = 0;
let counterEl = document.getElementById("counter");
let box = document.getElementById("box");
let nameInput = document.getElementById("nameInput");
let greeting = document.getElementById("greeting");

// Click event
box.addEventListener("click", function () {
    count++;
    counterEl.textContent = count;
});

// Mouse events
box.addEventListener("mouseenter", function () {
    box.style.backgroundColor = "#2ecc71";
    box.textContent = "Mouse is over!";
});

box.addEventListener("mouseleave", function () {
    box.style.backgroundColor = "#3498db";
    box.textContent = "Click or hover me";
});

// Input event (fires on every keystroke)
nameInput.addEventListener("input", function () {
    let name = nameInput.value.trim();
    if (name) {
        greeting.textContent = "Hello, " + name + "!";
    } else {
        greeting.textContent = "Hello!";
    }
});

// Keyboard event
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && nameInput.value.trim()) {
        greeting.textContent = "Welcome, " + nameInput.value.trim() + "! 🎉";
    }
});
