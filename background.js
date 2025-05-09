// Firefox implementation for blocking YouTube Shorts
browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url && changeInfo.url.includes('youtube.com/shorts')) {
    console.log("Blocking YouTube Shorts:", changeInfo.url);
    
    // Convert /shorts/ URL to /watch?v= format
    const watchUrl = changeInfo.url.replace(/\/shorts\/([^\/\?]+)/, '/watch?v=$1');
    
    // Redirect the tab to the regular watch URL
    browser.tabs.update(tabId, { url: watchUrl });
  }
});