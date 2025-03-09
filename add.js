const showImageButton = document.getElementById("showImage");
const uploadedImage = document.getElementById("uploadedImage");
const brightness = document.getElementById("brightness");
const opacity = document.getElementById("opacity");
const blur = document.getElementById("blur");
const borderRadius = document.getElementById("borderRadius");
const borderRadiusInput = document.getElementById("borderRadiusInput");
const saturation = document.getElementById("saturation");
const textOverlay = document.getElementById("textOverlay");
const fontSize = document.getElementById("fontSize");
const moveUp = document.getElementById("moveUp");
const moveDown = document.getElementById("moveDown");
const moveLeft = document.getElementById("moveLeft");
const moveRight = document.getElementById("moveRight");

// Show predefined image when button is clicked
showImageButton.addEventListener("click", () => {
  uploadedImage.src = "try.jpg"; // Path to your image
  uploadedImage.style.display = "block";
});

// Apply filters
function updateFilters() {
  uploadedImage.style.filter = `
    brightness(${brightness.value}%)
    saturate(${saturation.value}%)
    blur(${blur.value}px)
  `;
  uploadedImage.style.opacity = `${opacity.value / 100}`;
  uploadedImage.style.borderRadius = `${borderRadius.value}px`;
}

brightness.addEventListener("input", updateFilters);
opacity.addEventListener("input", updateFilters);
blur.addEventListener("input", updateFilters);
borderRadius.addEventListener("input", () => {
  borderRadiusInput.value = borderRadius.value;
  updateFilters();
});
borderRadiusInput.addEventListener("input", () => {
  borderRadius.value = borderRadiusInput.value;
  updateFilters();
});
saturation.addEventListener("input", updateFilters);

// Font size control
fontSize.addEventListener("input", () => {
  textOverlay.style.fontSize = `${fontSize.value}px`;
});

// Move text overlay
let posX = 50,
  posY = 50; // Initial position in percentage

function updateTextPosition() {
  textOverlay.style.left = `${posX}%`;
  textOverlay.style.top = `${posY}%`;
  textOverlay.style.transform = `translate(-${posX}%, -${posY}%)`;
}

moveUp.addEventListener("click", () => {
  posY = Math.max(0, posY - 5); // Move up by 5%
  updateTextPosition();
});

moveDown.addEventListener("click", () => {
  posY = Math.min(100, posY + 5); // Move down by 5%
  updateTextPosition();
});

moveLeft.addEventListener("click", () => {
  posX = Math.max(0, posX - 5); // Move left by 5%
  updateTextPosition();
});

moveRight.addEventListener("click", () => {
  posX = Math.min(100, posX + 5); // Move right by 5%
  updateTextPosition();
});
