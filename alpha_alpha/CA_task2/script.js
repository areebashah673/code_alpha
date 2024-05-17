document.addEventListener("DOMContentLoaded", function() {
    loadTasks();
});

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;

        // Add click event to mark task as completed
        li.addEventListener("click", function() {
            li.classList.toggle("completed");
            saveTasks();
        });

        // Create delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");
        deleteButton.addEventListener("click", function(e) {
            e.stopPropagation(); // Prevent triggering the li click event
            li.remove();
            saveTasks();
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = "";
        saveTasks();
    }
}

function saveTasks() {
    const taskList = document.getElementById("taskList");
    const tasks = [];
    for (let i = 0; i < taskList.children.length; i++) {
        const task = taskList.children[i];
        tasks.push({
            text: task.childNodes[0].textContent,
            completed: task.classList.contains("completed")
        });
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const taskList = document.getElementById("taskList");
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task.text;
        if (task.completed) {
            li.classList.add("completed");
        }

        // Add click event to mark task as completed
        li.addEventListener("click", function() {
            li.classList.toggle("completed");
            saveTasks();
        });

        // Create delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");
        deleteButton.addEventListener("click", function(e) {
            e.stopPropagation(); // Prevent triggering the li click event
            li.remove();
            saveTasks();
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}
