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

// Run on page load
modifyShortsLinks();

// Run whenever DOM changes
const observer = new MutationObserver(function() {
  modifyShortsLinks();
});

// Start observing when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  observer.observe(document.body, { 
    childList: true, 
    subtree: true 
  });
}); 