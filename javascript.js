//current slide
let i = 0;

//page cover slide channge
let backgroundImageCover = document.getElementById("navbar-container");
let CoverImage = [
  "NK5A9606.jpg",
  "banner3.jpg",
  "IMG_0506.jpg",
  "IMG_9971.jpg",
  "banner2.jpg",
  "banner.jpg",
  "banner5.jpg",
];
function backgroundImageCoverChange() {
  backgroundImageCover.style.backgroundImage = `url(Images/${CoverImage[i]})`;
}
window.onload = backgroundImageCoverChange();

//function for scrolling images in cover
function coverBackArrow() {
  i = (CoverImage.length + i - 1) % CoverImage.length;
  backgroundImageCoverChange();
}
function coverNextArrow() {
  i = (CoverImage.length + i + 1) % CoverImage.length;
  backgroundImageCoverChange();
}

function selectCoverImage(number) {
  i = number;
  backgroundImageCover.style.backgroundImage = `url(Images/${CoverImage[i]})`;
}
//Testimonials slides in home page

//wedding index
//----------- menu  bar clicked  function--------

const navlink = document.getElementById("nav-link");
function downMenu() {
  const navlink = document.getElementById("nav-link");

  if (navlink.style.display === "none" || navlink.style.display === "") {
    navlink.style.display = "block";
  } else {
    navlink.style.display = "none";
  }
}

// Event listener for  Wedding-type-container links
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
    weddingAllSection.style.opacity = "1";
    weddingSection.style.opacity = "0";
    engagementSection.style.opacity = "0";
    videoSection.style.opacity = "0";
  });
  // Event listener for wedding link
  weddingLink.addEventListener("click", function () {
    weddingAllSection.style.opacity = "0";
    weddingSection.style.opacity = "1";
    engagementSection.style.opacity = "0";
    videoSection.style.opacity = "0";
  });

  // Event listener for engagement link
  engagementLink.addEventListener("click", function () {
    weddingAllSection.style.opacity = "0";
    weddingSection.style.opacity = "0";
    engagementSection.style.opacity = "1";
    videoSection.style.opacity = "0";
  });

  // Event listener for video link
  videoLink.addEventListener("click", function () {
    weddingAllSection.style.opacity = "0";
    weddingSection.style.opacity = "0";
    engagementSection.style.opacity = "0";
    videoSection.style.opacity = "1";
  });
});
