const navClick = function (command) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            files: ["content.js"],
        });
        chrome.tabs.sendMessage(tabs[0].id, { action: command });
    });
};

document.getElementById("btnAccess").addEventListener("click", function () {
    navClick("readAll");
    navClick("readAll");
});
document.getElementById("btnRemoveAds").addEventListener("click", function () {
    navClick("removeAds");
});
