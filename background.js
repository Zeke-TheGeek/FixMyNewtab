chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        if (request.action === "getTabInfo") {
			
            chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  				var tabURL = tabs[0].id;
  				chrome.tabs.update(tabURL, { url: chrome.runtime.getURL('./contentblocked.html') });
			});
            return true; // Indicates that sendResponse will be called asynchronously
        }
    });