document.addEventListener("DOMContentLoaded", function () {
  const weddingAllLink = document.getElementById("weddingAll");
  const weddingLink = document.getElementById("wedding_Photos");
  const engagementLink = document.getElementById("Wedding-Engagement");
  const videoLink = document.getElementById("wedding-videography");

  const weddingAllSection = document.getElementById("wedding-all-container");
  const weddingSection = document.getElementById("wedding-alone");
  const engagementSection = document.getElementById("engagement");
  const videoSection = document.getElementById("video-container");

  // Event listener for wedding all link
  weddingAllLink.addEventListener("click", function () {
    weddingAllSection.style.display = "block";
    weddingSection.style.display = "none";
    engagementSection.style.display = "none";
    videoSection.style.display = "none";
    weddingAllLink.style.backgroundColor = "black";
    weddingLink.style.backgroundColor = "rgb(114, 113, 112)";
    engagementLink.style.backgroundColor = "rgb(114, 113, 112)";
    videoLink.style.backgroundColor = "rgb(114, 113, 112)";
  });

  // Event listener for wedding link
  weddingLink.addEventListener("click", function () {
    weddingAllSection.style.display = "none";
    weddingSection.style.display = "block";
    engagementSection.style.display = "none";
    videoSection.style.display = "none";
    weddingLink.style.backgroundColor = "black";

    weddingAllLink.style.backgroundColor = "rgb(114, 113, 112)";
    weddingLink.style.backgroundColor = "black";
    engagementLink.style.backgroundColor = "rgb(114, 113, 112)";
    videoLink.style.backgroundColor = "rgb(114, 113, 112)";
  });

  // Event listener for engagement link
  engagementLink.addEventListener("click", function () {
    weddingAllSection.style.display = "none";
    weddingSection.style.display = "none";
    engagementSection.style.display = "block";
    videoSection.style.display = "none";

    weddingAllLink.style.backgroundColor = "rgb(114, 113, 112)";
    weddingLink.style.backgroundColor = "rgb(114, 113, 112)";
    engagementLink.style.backgroundColor = "black";
    videoLink.style.backgroundColor = "rgb(114, 113, 112)";
  });

  // Event listener for video link
  videoLink.addEventListener("click", function () {
    weddingAllSection.style.display = "none";
    weddingSection.style.display = "none";
    engagementSection.style.display = "none";
    videoSection.style.display = "block";
    weddingAllLink.style.backgroundColor = "rgb(114, 113, 112)";
    weddingLink.style.backgroundColor = "rgb(114, 113, 112)";
    engagementLink.style.backgroundColor = "rgb(114, 113, 112)";
    videoLink.style.backgroundColor = "black";
  });
});

// JavaScript to show additional testimonials when "More Reviews" button is clicked
function moreReviews() {
  const hiddenTestimonials = document.getElementById("hidden-testimonials");
  const moreReviewsButton = document.getElementById("more-reviews");

  if (
    hiddenTestimonials.style.display === "none" ||
    hiddenTestimonials.style.display === ""
  ) {
    hiddenTestimonials.style.display = "flex";
    moreReviewsButton.innerHTML = ""; // Clear existing content
    const closeButton = document.createElement("button");
    closeButton.textContent = "Close Reviews >>";
    closeButton.onclick = closeReviews;
    moreReviewsButton.appendChild(closeButton);
  } else {
    hiddenTestimonials.style.display = "none";
    moreReviewsButton.textContent = "More Reviews >>";
  }
}

function closeReviews() {
  const hiddenTestimonials = document.getElementById("hidden-testimonials");
  const moreReviewsButton = document.getElementById("more-reviews");

  hiddenTestimonials.style.display = "none";
  moreReviewsButton.innerHTML = ""; // Clear existing content
  const openButton = document.createElement("button");
  openButton.textContent = "More Reviews >>";
  openButton.onclick = moreReviews;
  moreReviewsButton.appendChild(openButton);
}

//adding home page links wedding
function weddingShoot() {
  const weddingLink = document.getElementById("wedding_Photos");
  window.location.href = "indexwedding.html#wedding_Photos";
}
//studio link
function studioShoot() {
  window.location.href = "indexPhotography.html#studio";
}
//retouch
function retouchShoot() {
  window.location.href = "indexPhotography.html#retouch";
}
//wrapping
function wrappingShoot() {
  window.location.href = "indexPhotography.html#wrapping";
}
//babybump
function babyBumpShoot() {
  window.location.href = "indexPhotography.html#babyBump";
}
//product
function productShoot() {
  window.location.href = "indexPhotography.html#Product";
}
