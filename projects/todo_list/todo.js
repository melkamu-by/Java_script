let tasks = JSON.parse(localStorage.getItem("todoTasks") || "[]");
let currentFilter = "all";

let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");
let taskCount = document.getElementById("taskCount");
let doneCount = document.getElementById("doneCount");
let clearDoneBtn = document.getElementById("clearDone");
let filterBtns = document.querySelectorAll(".filter-btn");

function saveTasks() {
    localStorage.setItem("todoTasks", JSON.stringify(tasks));
}

function addTask(text) {
    let trimmed = text.trim();
    if (!trimmed) return;

    tasks.push({
        id: Date.now(),
        text: trimmed,
        completed: false
    });

    saveTasks();
    renderTasks();
    taskInput.value = "";
    taskInput.focus();
}

function toggleTask(id) {
    tasks = tasks.map(function (task) {
        if (task.id === id) {
            task.completed = !task.completed;
        }
        return task;
    });
    saveTasks();
    renderTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(function (task) {
        return task.id !== id;
    });
    saveTasks();
    renderTasks();
}

function clearCompleted() {
    tasks = tasks.filter(function (task) {
        return !task.completed;
    });
    saveTasks();
    renderTasks();
}

function getFilteredTasks() {
    if (currentFilter === "active") {
        return tasks.filter(function (task) { return !task.completed; });
    }
    if (currentFilter === "done") {
        return tasks.filter(function (task) { return task.completed; });
    }
    return tasks;
}

function renderTasks() {
    let filtered = getFilteredTasks();
    taskList.innerHTML = "";

    if (filtered.length === 0) {
        taskList.innerHTML = '<li class="empty-msg">No tasks here. Add one above!</li>';
    } else {
        filtered.forEach(function (task) {
            let li = document.createElement("li");
            li.className = "task-item" + (task.completed ? " completed" : "");

            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = task.completed;
            checkbox.addEventListener("change", function () {
                toggleTask(task.id);
            });

            let span = document.createElement("span");
            span.textContent = task.text;

            let deleteBtn = document.createElement("button");
            deleteBtn.className = "delete-btn";
            deleteBtn.textContent = "Delete";
            deleteBtn.addEventListener("click", function () {
                deleteTask(task.id);
            });

            li.appendChild(checkbox);
            li.appendChild(span);
            li.appendChild(deleteBtn);
            taskList.appendChild(li);
        });
    }

    let done = tasks.filter(function (t) { return t.completed; }).length;
    taskCount.textContent = tasks.length + " task" + (tasks.length !== 1 ? "s" : "");
    doneCount.textContent = done + " done";
}

addBtn.addEventListener("click", function () {
    addTask(taskInput.value);
});

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask(taskInput.value);
    }
});

clearDoneBtn.addEventListener("click", clearCompleted);

filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        filterBtns.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        currentFilter = btn.dataset.filter;
        renderTasks();
    });
});

renderTasks();
