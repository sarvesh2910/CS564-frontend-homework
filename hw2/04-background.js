// 04-background.js
const generateColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const a = 0.5;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

const updateColor = () => {
  document.body.style.backgroundColor = generateColor();
};

const start = (intervalInput) => {
  setInterval(() => updateColor(), intervalInput * 1000);
};

const stop = (intervalId) => {
  clearInterval(intervalId);
};

const updateButtonState = (actionButton, isRunning) => {
  actionButton.value = isRunning ? "Stop" : "Start";
  actionButton.classList.toggle("btn-danger", isRunning);
  actionButton.classList.toggle("btn-primary", !isRunning);
};

document.addEventListener("DOMContentLoaded", () => {
  const actionButton = document.querySelector("#actionButton");
  const intervalInput = document.querySelector("#intervalInput");
  let currentInterval = start(intervalInput.value);

  //initial state of button
  updateButtonState(actionButton, true);

  actionButton.addEventListener("click", () => {
    if (currentInterval) {
      stop(currentInterval);
      currentInterval = null;
    } else {
      currentInterval = start(intervalInput.value);
    }
    updateButtonState(actionButton, !!currentInterval);
  });
});
