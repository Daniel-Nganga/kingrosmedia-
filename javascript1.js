//adding event listener to photography categories
document.addEventListener("DOMContentLoaded", function () {
  const studio = document.getElementById("studio");
  const wrapping = document.getElementById("wrapping");
  const babyBump = document.getElementById("babyBump");
  const retouch = document.getElementById("retouch");
  const Product = document.getElementById("Product");
  const nature = document.getElementById("nature");

  const studioPhotography = document.getElementById("studio-photography");
  const wrappingCategories = document.getElementById("wrapping-categories");
  const babybumpCategories = document.getElementById("babybump-categories");
  const retouchCategories = document.getElementById("retouch-categories");
  const ProductCategories = document.getElementById("Product-categories");
  const natureCategories = document.getElementById("nature-categories");

  // Event listener for studio  link
  const studioCatego = studio.addEventListener("click", function () {
    studioPhotography.style.display = "block";
    wrappingCategories.style.display = "none";
    babybumpCategories.style.display = "none";
    retouchCategories.style.display = "none";
    ProductCategories.style.display = "none";
    natureCategories.style.display = "none";
  });

  // Event listener for Wrapping  link
  const wrappingCatego = wrapping.addEventListener("click", function () {
    studioPhotography.style.display = "none";
    wrappingCategories.style.display = "block";
    babybumpCategories.style.display = "none";
    retouchCategories.style.display = "none";
    ProductCategories.style.display = "none";
    natureCategories.style.display = "none";
  });
  // Event listener for BabyBump link
  const babyBumpCatego = babyBump.addEventListener("click", function () {
    studioPhotography.style.display = "none";
    wrappingCategories.style.display = "none";
    babybumpCategories.style.display = "block";
    retouchCategories.style.display = "none";
    ProductCategories.style.display = "none";
    natureCategories.style.display = "none";
  });
  // Event listener for retouch link
  const retouchCatego = retouch.addEventListener("click", function () {
    studioPhotography.style.display = "none";
    wrappingCategories.style.display = "none";
    babybumpCategories.style.display = "none";
    retouchCategories.style.display = "block";
    ProductCategories.style.display = "none";
    natureCategories.style.display = "none";

    console.log("retouching clicked");
  });

  // Event listener for Product link
  const productCatego = Product.addEventListener("click", function () {
    studioPhotography.style.display = "none";
    wrappingCategories.style.display = "none";
    babybumpCategories.style.display = "none";
    retouchCategories.style.display = "none";
    ProductCategories.style.display = "block";
    natureCategories.style.display = "none";
  });

  // Event listener for Nature link
  const natureCategor = nature.addEventListener("click", function () {
    studioPhotography.style.display = "none";
    wrappingCategories.style.display = "none";
    babybumpCategories.style.display = "none";
    retouchCategories.style.display = "none";
    ProductCategories.style.display = "none";
    natureCategories.style.display = "block";
  });
});

function bookingShoot() {
  const weddingBooking = document.getElementById("Wedding-bookings");
  window.location.href = "indexbooking.html#Wedding-bookings";
}

// fullpic fuctioning
const studioImages = [
  "Images/studio.jpg",
  "Images/studio2.jpg",
  "Images/studio5.jpg",
  "Images/studio2.jpg",
  "Images/studio1.jpg",
  "Images/studio5.jpg",
  "Images/studio6.jpg",
  "Images/studio12.jpg",
  "Images/studio9.jpg",
  "Images/studio8.jpg",
  "Images/studio10.jpg",
  "Images/studio11.jpg",
  "Images/studio13.jpg",
  "Images/studio15.jpg",
  "Images/studio14.jpg",
  "Images/studio16.jpg",
  // wrappingImages
  "Images/Wrapping1.jpg",
  "Images/Wrapping6.jpg",
  "Images/Wrapping3.jpg",
  "Images/Wrapping4.jpg",
  "Images/Wrapping5.jpg",
  "Images/Wrapping11.jpg",
  "Images/Wrapping7.jpg",
  "Images/Wrapping8.jpg",
  "Images/Wrapping9.jpg",
  "Images/Wrapping11.jpg",
  "Images/Wrapping15.jpg",
  "Images/Wrapping13.jpg",

  //BabyBump
  "Images/babyBump.jpg",
  "Images/babyBump3.jpg",
  "Images/babyBump2.jpg",
  "Images/babyBump18.jpg",
  "Images/babyBump4.jpg",
  "Images/babyBump5.jpg",
  "Images/babyBump6.jpg",
  "Images/babyBump7.jpg",
  "Images/babyBump8.jpg",
  "Images/babyBump9.jpg",
  "Images/babyBump10.jpg",
  "Images/babyBump11.jpg",
  "Images/babyBump12.jpg",
  "Images/babyBump13.jpg",
  "Images/babyBump14.jpg",
  "Images/babyBump15.jpg",
  //retouch
  "Images/Retouch1.jpg",
  "Images/Retouch2.jpg",
  "Images/Retouch3.jpg",
  "Images/Retouch4.jpg",
  "Images/Retouch5.jpg",
  "Images/Retouch6.jpg",
  "Images/Retouch7.jpg",
  "Images/Retouch8.jpg",
  "Images/Retouch9.jpg",
  "Images/Retouch10.jpg",
  "Images/Retouch11.jpg",
  "Images/Retouch12.jpg",
];

const weddingImages = [
  //weddingContainerImageAll
  "Images/Wedding36.jpg",
  "Images/Wedding15.jpg",
  "Images/Wedding10.jpg",
  "Images/Wedding11.jpg",
  "Images/Wedding34.jpg",
  "Images/Wedding36.jpg",
  "Images/Wedding6.jpg",
  "Images/Wedding13.jpg",
  "Images/Wedding6.jpg",
  "Images/Wedding46.jpg",
  "Images/Wedding23.jpg",
  "Images/Wedding27.jpg",
  "Images/Wedding51.jpg",
  // wedding alone

  "Images/Wedding15.jpg",
  "Images/Wedding10.jpg",
  "Images/Wedding11.jpg",
  "Images/Wedding34.jpg",
  "Images/Wedding36.jpg",
  "Images/Wedding6.jpg",
  "Images/Wedding13.jpg",
  "Images/Wedding6.jpg",
  "Images/Wedding46.jpg",
  "Images/Wedding23.jpg",
  "Images/Wedding27.jpg",
  "Images/Wedding51.jpg",
  // weddingContainerImage
  "/Images/f7.jpg",
  "/Images/f8.jpg",
  "/Images/f10.jpg",
];

let currentIndex = 0;
//full studio images
function openFullPreview(index) {
  const fullImage = document.getElementById("fullImage");
  fullImage.src = studioImages[index];
  currentIndex = index;
  document.querySelector(".full-image-preview").style.display = "flex";
  console.log(fullImage, index);
}

function nextImage() {
  currentIndex = (currentIndex + 1) % studioImages.length;
  const fullImage = document.getElementById("fullImage");
  fullImage.src = studioImages[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + studioImages.length) % studioImages.length;
  const fullImage = document.getElementById("fullImage");
  fullImage.src = studioImages[currentIndex];
}

function closePreview() {
  document.querySelector(".full-image-preview").style.display = "none";
}

//wedding full images preview
function WeddingPreview(index) {
  const fullImage = document.getElementById("fullImage");
  fullImage.src = weddingImages[index];
  currentIndex = index;
  document.querySelector(".full-image-preview").style.display = "flex";
}

function nextWeddingImage() {
  currentIndex = (currentIndex + 1) % weddingImages.length;
  const fullImage = document.getElementById("fullImage");
  fullImage.src = weddingImages[currentIndex];
}

function prevWeddingImage() {
  currentIndex =
    (currentIndex - 1 + weddingImages.length) % weddingImages.length;
  const fullImage = document.getElementById("fullImage");
  fullImage.src = weddingImages[currentIndex];
}

function closePreview() {
  document.querySelector(".full-image-preview").style.display = "none";
}
