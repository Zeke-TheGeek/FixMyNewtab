var d = new Date();
const currentHourInit = d.getHours();
const currentMin = d.getMinutes();
const currentHour = currentHourInit * 100 + currentMin
const currentURL = window.location.href
d.getMinutes();
if (currentURL.includes("ddsb.ca")) {
	window.location.replace("https://zekestudios.ca/secret/Tabs/ZekeNewTab/index.html");
} else if (currentHour < 1035 || currentHour > 1120 && currentURL.includes("youtube.com")) {
	
	chrome.runtime.sendMessage({ action: "getTabInfo" }, function(response) {});
	
}