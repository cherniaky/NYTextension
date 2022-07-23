chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    console.log(message);
    switch (message.action) {
        case "readAll":
            readArticles();
            break;
        case "removeAds":
            removeAds();
            break;
        default:
            break;
    }
    sendResponse({ received: true });
});

function readArticles() {
    if (
        document.querySelector("#gateway-content") &&
        document.querySelector("#gateway-content").style.display != "none"
    ) {
        document.querySelector("#gateway-content").style.display = "none";
    }

    if (
        document.querySelector("#app div div") &&
        document.querySelector("#app div div").style.overflowY != "scroll"
    ) {
        document.querySelector("#app div div").style.overflowY = "scroll";
        document.querySelector("#app div div").lastElementChild.style.display =
            "none";
    }

    // if (
    //     document.querySelector(".css-mcm29f") &&
    //     document.querySelector(".css-mcm29f").lastElementChild.style.display !=
    //         "none"
    // ) {
    //     document.querySelector(".css-mcm29f").style.overflowY = "scroll";
    //     document.querySelector(".css-mcm29f").lastElementChild.style.display =
    //         "none";
    // }
    // if (
    //     document.querySelector("#site-content") &&
    //     document.querySelector("#site-content").style.display != "relative"
    // ) {
    //     document.querySelector("#site-content").style.position = "relative";
    // }
}

function removeAds() {
    document.querySelectorAll('[id*="wrapper"]').forEach(function (item) {
        item.style.display = "none";
    });

    document
        .querySelectorAll('[data-testid="StandardAd"]')
        .forEach(function (item) {
            item.parentNode.parentElement.remove();
        });
}

function removeAdsAndReadArticles() {
    removeAds();
    readArticles();
}

window.onload = function () {
    // if (!window.location.href.includes("nytimes.com/search")) {
    setInterval(removeAdsAndReadArticles(), 1000);
    // }
    console.clear();
};
