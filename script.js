let timer;
let timeLeft = 25 * 60; // Default 25 minutes
let isRunning = false;

// Function to update the timer display
function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById("timer").textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Set a new timer duration
function setTimer(minutes) {
    clearInterval(timer);
    timeLeft = minutes * 60;
    updateDisplay();
    isRunning = false;
}

// Start the timer
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                isRunning = false;
                alert("Time's up! Take a break.");
            }
        }, 1000);
    }
}

// Pause the timer
function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

// Reset the timer
function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    setTimer(25); // Reset to default 25 min
}

// Initialize display
document.addEventListener("DOMContentLoaded", updateDisplay);
