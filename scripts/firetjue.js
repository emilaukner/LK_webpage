var countdownInterval;
var seconds = 20 * 60; // 20 minutes in seconds

function startCountdown() {
    // Check if a countdown is already active
    if (!countdownInterval) {
        var countdownElement = document.getElementById('countdown');
        var startBtn = document.getElementById('startBtn');
        var stopBtn = document.getElementById('stopBtn');

        countdownInterval = setInterval(function() {
            var minutes = Math.floor(seconds / 60);
            var remainingSeconds = seconds % 60;

            // Display the countdown
            countdownElement.innerHTML = minutes + ":" + (remainingSeconds < 10 ? "0" : "") + remainingSeconds;

            // Check if the countdown has reached zero
            if (seconds === 0) {
                clearInterval(countdownInterval); // Stop the countdown
                playSound('../sounds/dj-airhorn-sound-39405.mp3'); // Trigger the last sound
                seconds = 20 * 60; // Reset the timer
                countdownElement.innerHTML = "20:00"; // Reset the displayed co
                startBtn.style.display = 'block'; // Show the start button
                stopBtn.style.display = 'none'; // Hide the stop button
            } else if (seconds === 15 * 60) {
                playSound('../sounds/15min.wav'); // Trigger the same sound at 15:00, 10:00, and 5:00
            } else if (seconds === 10 * 60) {
                playSound('../sounds/10min.wav'); // Trigger the same sound at 15:00, 10:00, and 5:00
            } else if (seconds === 5 * 60) {
                playSound('../sounds/5min.wav'); // Trigger the same sound at 15:00, 10:00, and 5:00
            }
            else if (seconds === 10) {
                playSound('../sounds/mixkit-male-deep-voice-countdown-925.wav'); // Trigger the sound at 11 seconds
            }

            seconds--; // Decrease the countdown
        }, 1000); // Update every 1 second

        startBtn.style.display = 'none'; // Hide the start button
        stopBtn.style.display = 'block'; // Show the stop button
    }
}

function stopCountdown() {
    clearInterval(countdownInterval); // Stop the countdown
    seconds = 20 * 60; // Reset the timer
    countdownInterval = null; // Reset the countdown interval variable
    var countdownElement = document.getElementById('countdown');
    countdownElement.innerHTML = "20:00"; // Reset the displayed countdown
    var startBtn = document.getElementById('startBtn');
    var stopBtn = document.getElementById('stopBtn');
    startBtn.style.display = 'block'; // Show the start button
    stopBtn.style.display = 'none'; // Hide the stop button
}

function playSound(soundPath) {
    var audio = new Audio(soundPath);
    audio.play();
}

