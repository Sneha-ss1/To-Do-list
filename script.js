const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
    const task = taskInput.value.trim();

    if (task === "") {
        alert("Task cannot be empty!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = task;

    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "10px";

    deleteBtn.addEventListener("click", () => {
        taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
});
