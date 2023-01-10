const whitelist = ["cusd", "infinitecampus", "slides.google.com", "khanacademy.org", 
                "brainpop.com", "bim.easyaccessmaterials", "code.org", "w3schools", 
                "wikipedia.org", "stackoverflow", "clever.com", "quizlet.com", "blooket", 
                "quizz", "kahoot.it", "scratch.mit.edu", "gimkit", ".edu", ".gov", "google.com"];
const blacklist = ["scratch.mit.edu"];
let url;
chrome.tabs.onUpdated.addListener((tabId, tab) => {
    const start = Date.now();
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        url = tabs[0].url;
    });
    for (let i = l = 0; i < whitelist.length; i++) {
        if (url && (url.toString().includes(whitelist[i]) && !(url.toString().includes(blacklist[i < blacklist.length ? i : blacklist.length - 1])))) {
            chrome.tabs.sendMessage(tabId, {
                block: false,
                url: url,
                whitelist: whitelist.toString(),
                t: start
            })
        } else if (url.toString().includes(blacklist[i < blacklist.length ? i : blacklist.length - 1])) {
            chrome.tabs.sendMessage(tabId, {
                block: true,
                url: url,
                whitelist: whitelist.toString(),
                t: start
            })
        } else {
            l++
        }
        if (l == whitelist.length) {
            chrome.tabs.sendMessage(tabId, {
                block: true,
                url: url,
                whitelist: whitelist.toString(),
                t: start
            })
        }
    }
})
