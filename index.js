document.addEventListener('DOMContentLoaded', function () {
    // Selecting HTML elements
    var timeDisplay = document.querySelector('.time');
    var startButton = document.querySelector('.start');
    var buttons = document.querySelectorAll('.butt button');

    var timer;
    var seconds = 0;

    // Function to update the timer display
    function updateDisplay() {
        var hours = Math.floor(seconds / 3600);
        var minutes = Math.floor((seconds % 3600) / 60);
        var remainingSeconds = seconds % 60;

        // Display the time in HH:MM:SS format
        timeDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    }

    // Function to start the countdown timer
    function startTimer() {
        timer = setInterval(function () {
            seconds--;

            if (seconds < 0) {
                stopTimer();
                startButton.textContent = 'start';
                seconds = 0;
            }

            updateDisplay();
        }, 1000);
    }

    // Function to stop the timer
    function stopTimer() {
        clearInterval(timer);
    }

    // Event listener for the start/stop button
    startButton.addEventListener('click', function (event) {
        // Prevent the default action to stop the button from changing styles on click
        event.preventDefault();

        if (startButton.textContent === 'start') {
            startButton.textContent = 'stop';
            startTimer();
        } else {
            startButton.textContent = 'start';
            stopTimer();
        }
    });

    // Event listener for the duration buttons to set the countdown time
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            var duration = parseInt(button.textContent);
            seconds = duration * 60;
            updateDisplay();
        });
    });
});
