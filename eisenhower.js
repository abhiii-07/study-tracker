document.addEventListener("DOMContentLoaded", function () {
    const saveButton = document.getElementById("saveTasks");
    const successMessage = document.getElementById("successMessage");
    const savedTasksList = document.getElementById("savedTasksList");

    // Function to save tasks
    saveButton.addEventListener("click", function () {
        const urgentImportant = document.getElementById("urgentImportant").value;
        const notUrgentImportant = document.getElementById("notUrgentImportant").value;
        const urgentNotImportant = document.getElementById("urgentNotImportant").value;
        const notUrgentNotImportant = document.getElementById("notUrgentNotImportant").value;

        const tasks = {
            urgentImportant,
            notUrgentImportant,
            urgentNotImportant,
            notUrgentNotImportant,
        };

        localStorage.setItem("eisenhowerTasks", JSON.stringify(tasks));
        
        // Show success message
        successMessage.style.display = "block";
        setTimeout(() => {
            successMessage.style.display = "none";
        }, 2000);

        displaySavedTasks();
    });

    // Function to display saved tasks
    function displaySavedTasks() {
        const savedData = JSON.parse(localStorage.getItem("eisenhowerTasks"));
        savedTasksList.innerHTML = ""; // Clear previous list

        if (savedData) {
            for (const [key, value] of Object.entries(savedData)) {
                const listItem = document.createElement("li");
                listItem.textContent = `${key.replace(/([A-Z])/g, " $1")}: ${value}`;
                savedTasksList.appendChild(listItem);
            }
        }
    }

    // Load saved tasks on page load
    displaySavedTasks();
});
