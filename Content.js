// Function to hide thumbnails and show titles
function hideThumbnailsAndShowTitles() {
  const thumbnails = document.querySelectorAll("#thumbnail");
  thumbnails.forEach(thumbnail => {
      thumbnail.style.display = "none"; // Hide the thumbnail

      // Get the title element associated with the thumbnail
      const titleElement = thumbnail.parentElement.querySelector("#video-title");
      if (titleElement) {
          titleElement.style.display = "block"; // Show the title
      }
  });
}

// Function to hide all videos on the main page of YouTube
function hideAllVideosOnMainPage() {
  const videos = document.querySelectorAll("ytd-rich-grid-renderer, ytd-rich-item-renderer");
  videos.forEach(video => {
      video.style.display = "none";
  });
}

// Check if the current page is the main page of YouTube or a search results page
const currentPage = window.location.href;
if (currentPage === "https://www.youtube.com/" || currentPage === "https://www.youtube.com/") {
  hideAllVideosOnMainPage();
} else {
  hideThumbnailsAndShowTitles(); // Hide thumbnails and show titles on other pages
}

// Detect scroll events and update thumbnails and titles accordingly
window.addEventListener("scroll", hideThumbnailsAndShowTitles);
