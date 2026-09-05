// Select elements by ID
let title = document.getElementById("title");
let message = document.getElementById("message");
let list = document.getElementById("list");

// Change text content
title.textContent = "Welcome, Melkamu Belay!";

// Change inner HTML
message.innerHTML = "Learning <strong>DOM</strong> manipulation";

// Add list items
let topics = ["Variables", "Functions", "Arrays", "Objects"];
for (let i = 0; i < topics.length; i++) {
    let item = document.createElement("li");
    item.textContent = topics[i];
    list.appendChild(item);
}

// Button click handlers
document.getElementById("changeBtn").addEventListener("click", function () {
    message.textContent = "Text changed on click!";
});

document.getElementById("styleBtn").addEventListener("click", function () {
    message.classList.toggle("highlight");
});
