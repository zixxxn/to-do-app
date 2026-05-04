document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("add-btn");
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");

  // Add new todo
  addBtn.addEventListener("click", () => {
    const task = todoInput.value.trim();
    if (task !== "") {
      const li = document.createElement("li");
      li.textContent = task;

      // Toggle complete
      li.addEventListener("click", () => {
        li.classList.toggle("completed");
      });

      // Delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add("delete-btn");
      deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent toggling complete
        li.remove();
      });

      li.appendChild(deleteBtn);
      todoList.appendChild(li);
      todoInput.value = "";
    }
  });

  // Allow pressing Enter to add task
  todoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addBtn.click();
    }
  });
});
