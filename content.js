// Function to intercept and modify clicks on shorts links
document.addEventListener('click', function(e) {
  // Find if the clicked element or any of its parents is a link to shorts
  let element = e.target;
  while (element && element.tagName !== 'A') {
    element = element.parentElement;
  }
  
  if (element && element.href && element.href.includes('/shorts/')) {
    e.preventDefault();
    
    // Convert shorts URL to watch URL
    const videoId = element.href.match(/\/shorts\/([^\/\?]+)/)[1];
    const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;
    
    // Navigate to the converted URL
    window.location.href = watchUrl;
  }
}, true);

// Function to modify the DOM to redirect shorts links
function modifyShortsLinks() {
  const shortsLinks = document.querySelectorAll('a[href*="/shorts/"]');
  
  shortsLinks.forEach(link => {
    const videoId = link.href.match(/\/shorts\/([^\/\?]+)/)[1];
    const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;
    link.href = watchUrl;
  });
}

// Function to remove Shorts elements from the DOM
function removeShortsElements() {
  // Remove ytm-shorts-lockup-view-model-v2 elements
  const shortsElements = document.querySelectorAll('ytm-shorts-lockup-view-model-v2');
  if (shortsElements.length > 0) {
    console.log(`Removing ${shortsElements.length} YouTube Shorts elements`);
    shortsElements.forEach(element => {
      element.remove();
    });
  }
}

// Run on page load
modifyShortsLinks();
removeShortsElements();

// Run whenever DOM changes
const observer = new MutationObserver(function() {
  modifyShortsLinks();
  removeShortsElements();
});

// Start observing when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  observer.observe(document.body, { 
    childList: true, 
    subtree: true 
  });
}); 