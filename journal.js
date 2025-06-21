document.addEventListener("DOMContentLoaded", function () {
    const saveButton = document.getElementById("saveJournal");
    const successMessage = document.getElementById("successMessage");

    // Function to save journal entries
    saveButton.addEventListener("click", function () {
        const success = document.getElementById("success").value;
        const improve = document.getElementById("improve").value;
        const goals = document.getElementById("goals").value;
        const mood = document.getElementById("mood-emoji").innerText;

        let savedJournal = {
            mood,
            success,
            improve,
            goals,
        };

        localStorage.setItem("selfReflectionJournal", JSON.stringify(savedJournal));

        // Show success message
        successMessage.style.display = "block";
        setTimeout(() => {
            successMessage.style.display = "none";
        }, 2000);

        displaySavedJournal();
    });

    // Function to set mood
    window.setMood = function (rating) {
        const moods = {
            1: "😢 Sad",
            2: "😐 Somewhat",
            3: "🙂 Fine",
            4: "😊 Good",
            5: "😃 Happy"
        };

        document.getElementById("mood-emoji").innerText = moods[rating];

        let savedJournal = JSON.parse(localStorage.getItem("selfReflectionJournal")) || {};
        savedJournal.mood = moods[rating];
        localStorage.setItem("selfReflectionJournal", JSON.stringify(savedJournal));

        displaySavedJournal();
    };

    // Function to display saved journal
    function displaySavedJournal() {
        const savedData = JSON.parse(localStorage.getItem("selfReflectionJournal"));

        if (savedData) {
            document.getElementById("savedMood").innerText = savedData.mood || "No mood recorded";
            document.getElementById("savedSuccess").innerText = savedData.success || "No entry";
            document.getElementById("savedImprove").innerText = savedData.improve || "No entry";
            document.getElementById("savedGoals").innerText = savedData.goals || "No entry";
        }
    }

    // Load saved journal on page load
    displaySavedJournal();
});
