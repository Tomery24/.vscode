// Timer Variables
let timer;
let timeLeft = 25 * 60; // 25 minutes in seconds
let totalTime = timeLeft;
let isRunning = false;

// Get Elements
const display = document.getElementById("timer-display");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");
const progressBar = document.getElementById("progress-bar");

// Update Timer Display
function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    display.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

// Update Progress Bar
function updateProgressBar() {
    let progress = (timeLeft / totalTime) * 100;
    progressBar.style.width = `${progress}%`;
}

// Start Timer
startBtn.addEventListener("click", () => {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
                updateProgressBar();
            } else {
                clearInterval(timer);
                isRunning = false;
                triggerAnimation();
                alert("Time's up!");
            }
        }, 1000);
    }
});

// Pause Timer
pauseBtn.addEventListener("click", () => {
    clearInterval(timer);
    isRunning = false;
});

// Reset Timer
resetBtn.addEventListener("click", () => {
    clearInterval(timer);
    timeLeft = 25 * 60;
    totalTime = timeLeft;
    updateDisplay();
    updateProgressBar();
    isRunning = false;
    display.classList.remove("flash"); // Remove animation
});

// Flash Animation When Timer Ends
function triggerAnimation() {
    display.classList.add("flash");
}

// Initialize Display & Progress Bar
updateDisplay();
updateProgressBar();
