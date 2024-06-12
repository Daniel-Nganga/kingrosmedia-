//.ceo-back element move from right to left, you can use CSS animations.
const ceoBack = document.querySelector(".ceo-back");

// Function to toggle display of ceoBack after a certain period
function toggleCeoBack() {
  ceoBack.style.display = "block"; // Display ceoBack
  setTimeout(function () {
    ceoBack.style.animation = "slideOut 1s forwards"; // Use CSS animation to slide out
    setTimeout(function () {
      ceoBack.style.display = "none"; // Hide ceoBack after animation completes
      ceoBack.style.animation = ""; // Reset animation
    }, 1000); // 1000 milliseconds = 1 second (duration of slideOut animation)
  }, 3000); // 3000 milliseconds = 3 seconds (adjust as needed)
}
// Call toggleCeoBack when .worker-card is hovered over
const workerCard = document.querySelector(".worker-card");
workerCard.addEventListener("mouseenter", toggleCeoBack);
