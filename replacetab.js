var d = new Date();
const currentHour = d.getHours();
const currentURL = window.location.href
d.getMinutes();
if (currentURL.includes("ddsb.ca")) {
	window.location.replace("https://zekestudios.ca/secret/Tabs/ZekeNewTab/index.html");
} else if (currentHour < 10 && currentURL.includes("youtube.com")) {
	
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  		const currentTabId = tabs[0].id;
  		chrome.tabs.update(currentTabId, { url: chrome.runtime.getURL('./contentblocked.html') });
	});
	alert("sus");
}